//
//  GameWebView.swift
//  RPG Maker Framework
//
//  The one place the app touches WebKit. WKWebView has no native SwiftUI
//  equivalent below iOS 26, so it is wrapped once here with UIViewRepresentable
//  and everything else in the app stays pure SwiftUI.
//

import SwiftUI
import WebKit

/// A JavaScript `alert()` raised by the game. `dismiss` must be called exactly once.
struct JavaScriptAlert {
    let message: String
    let dismiss: () -> Void
}

struct GameWebView: UIViewRepresentable {
    let game: Game
    var onAlert: (JavaScriptAlert) -> Void = { _ in }

    func makeCoordinator() -> Coordinator {
        Coordinator(onAlert: onAlert)
    }

    func makeUIView(context: Context) -> WKWebView {
        let configuration = WKWebViewConfiguration()
        configuration.dataDetectorTypes = []
        configuration.allowsInlineMediaPlayback = true
        configuration.mediaTypesRequiringUserActionForPlayback = []
        // RPG Maker MZ loads its data/*.json over XHR from file://, which WebKit
        // blocks by default. This is the same switch the original UIKit version used.
        configuration.preferences.setValue(true, forKey: "allowFileAccessFromFileURLs")

        // Controller bridge: define window.RPGMakerFrameworkGamepad before any
        // game script runs (see GamepadBridgeScript / GameControllerBridge).
        let gamepadScript = WKUserScript(
            source: GamepadBridgeScript.source,
            injectionTime: .atDocumentStart,
            forMainFrameOnly: true
        )
        configuration.userContentController.addUserScript(gamepadScript)

        let webView = WKWebView(frame: .zero, configuration: configuration)
        webView.uiDelegate = context.coordinator
        webView.navigationDelegate = context.coordinator
        webView.isOpaque = false
        webView.backgroundColor = .black
        webView.scrollView.isScrollEnabled = false
        webView.scrollView.bounces = false
        webView.scrollView.contentInsetAdjustmentBehavior = .never

        // Grant read access to the whole game folder, not just index.html,
        // so js/, data/, img/ and audio/ all resolve.
        webView.loadFileURL(game.indexURL, allowingReadAccessTo: game.folderURL)

        // Forward PS5 / Xbox / Backbone / MFi controller input into the game.
        context.coordinator.controllerBridge = GameControllerBridge(webView: webView)

        // Keep the screen awake while a game is running.
        UIApplication.shared.isIdleTimerDisabled = true
        return webView
    }

    func updateUIView(_ webView: WKWebView, context: Context) {
        context.coordinator.onAlert = onAlert
    }

    static func dismantleUIView(_ webView: WKWebView, coordinator: Coordinator) {
        coordinator.controllerBridge?.tearDown()
        coordinator.controllerBridge = nil
        UIApplication.shared.isIdleTimerDisabled = false
        webView.stopLoading()
        webView.uiDelegate = nil
        webView.navigationDelegate = nil
    }

    final class Coordinator: NSObject, WKUIDelegate, WKNavigationDelegate {
        var onAlert: (JavaScriptAlert) -> Void
        var controllerBridge: GameControllerBridge?

        init(onAlert: @escaping (JavaScriptAlert) -> Void) {
            self.onAlert = onAlert
        }

        /// The game page finished loading: tell its JS whether a controller
        /// is already attached (handlers were set up before the page existed).
        func webView(_ webView: WKWebView, didFinish navigation: WKNavigation!) {
            controllerBridge?.resync()
        }

        /// Surfaces JavaScript `alert()` calls (handy for debugging a game) as a SwiftUI alert.
        func webView(
            _ webView: WKWebView,
            runJavaScriptAlertPanelWithMessage message: String,
            initiatedByFrame frame: WKFrameInfo,
            completionHandler: @escaping () -> Void
        ) {
            onAlert(JavaScriptAlert(message: message, dismiss: completionHandler))
        }
    }
}

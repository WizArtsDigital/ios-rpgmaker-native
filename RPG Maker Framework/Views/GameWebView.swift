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

        // Scripts injected before any game code runs, in this order:
        //   1. Compatibility fixes (focus check, fetch() on file://) — without
        //      these an unpatched export sits on a black screen.
        //   2. Controller bridge (window.RPGMakerFrameworkGamepad).
        //   3. DEBUG only: mirror JS errors into Xcode's console.
        let contentController = configuration.userContentController
        // 0. Per-game settings from framework.json (already validated as JSON),
        // plus the natively resolved orientation, so the JS display layer sizes
        // the canvas for the locked orientation even if the rotation animation
        // hasn't finished when the game boots.
        var configObject: [String: Any] = [:]
        if let raw = game.frameworkConfigJSON,
           let data = raw.data(using: .utf8),
           let parsed = try? JSONSerialization.jsonObject(with: data) as? [String: Any] {
            configObject = parsed
        }
        configObject["_orientation"] = game.orientation.rawValue
        let configData = (try? JSONSerialization.data(withJSONObject: configObject)) ?? Data("{}".utf8)
        let configJSON = String(data: configData, encoding: .utf8) ?? "{}"
        contentController.addUserScript(
            WKUserScript(
                source: "window.RPGMakerFrameworkConfig = \(configJSON);",
                injectionTime: .atDocumentStart,
                forMainFrameOnly: true
            )
        )
        for source in [RPGMakerCompatScript.source, GamepadBridgeScript.source] {
            contentController.addUserScript(
                WKUserScript(source: source, injectionTime: .atDocumentStart, forMainFrameOnly: true)
            )
        }
        #if DEBUG
        contentController.add(context.coordinator, name: Coordinator.logHandlerName)
        contentController.addUserScript(
            WKUserScript(source: RPGMakerCompatScript.debugLoggingSource, injectionTime: .atDocumentStart, forMainFrameOnly: true)
        )
        #endif

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
        // With a framework.json "controller" map, the bridge types the game's
        // own keyboard keys; otherwise it drives MZ's logical buttons.
        var keyboardMap: [String: String]?
        if let controller = configObject["controller"] as? [String: Any],
           let buttons = controller["buttons"] as? [String: String] {
            keyboardMap = Dictionary(uniqueKeysWithValues: buttons.map { ($0.key.lowercased(), $0.value) })
        }
        context.coordinator.controllerBridge = GameControllerBridge(webView: webView, keyboardMap: keyboardMap)

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
        #if DEBUG
        webView.configuration.userContentController.removeScriptMessageHandler(forName: Coordinator.logHandlerName)
        #endif
        UIApplication.shared.isIdleTimerDisabled = false
        webView.stopLoading()
        webView.uiDelegate = nil
        webView.navigationDelegate = nil
    }

    final class Coordinator: NSObject, WKUIDelegate, WKNavigationDelegate, WKScriptMessageHandler {
        static let logHandlerName = "rpgmakerLog"

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

        // MARK: Load failures — surface them instead of leaving a black screen

        func webView(_ webView: WKWebView, didFailProvisionalNavigation navigation: WKNavigation!, withError error: Error) {
            reportLoadFailure(error)
        }

        func webView(_ webView: WKWebView, didFail navigation: WKNavigation!, withError error: Error) {
            reportLoadFailure(error)
        }

        func webViewWebContentProcessDidTerminate(_ webView: WKWebView) {
            // WebKit killed the page (usually memory pressure on a heavy game).
            onAlert(JavaScriptAlert(
                message: "The game's web process stopped unexpectedly (this is usually memory pressure). Exit and relaunch the game.",
                dismiss: {}
            ))
        }

        private func reportLoadFailure(_ error: Error) {
            #if DEBUG
            print("[Game] Load failed: \(error)")
            #endif
            onAlert(JavaScriptAlert(
                message: "Couldn't load the game: \(error.localizedDescription)",
                dismiss: {}
            ))
        }

        // MARK: DEBUG console mirror (see RPGMakerCompatScript.debugLoggingSource)

        func userContentController(_ userContentController: WKUserContentController, didReceive message: WKScriptMessage) {
            #if DEBUG
            if message.name == Self.logHandlerName {
                print("[Game JS] \(message.body)")
            }
            #endif
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

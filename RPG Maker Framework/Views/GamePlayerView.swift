//
//  GamePlayerView.swift
//  RPG Maker Framework
//
//  Full-screen host for a running game, with a small overlay button to exit
//  back to the library.
//

import SwiftUI

struct GamePlayerView: View {
    let game: Game
    let onExit: () -> Void

    @State private var showExitConfirmation = false
    @State private var javaScriptAlert: JavaScriptAlert?

    var body: some View {
        ZStack(alignment: .topTrailing) {
            Color.black
                .ignoresSafeArea()

            GameWebView(game: game) { alert in
                javaScriptAlert = alert
            }
            .ignoresSafeArea()

            exitButton
                .padding(12)
        }
        #if DEBUG
        .overlay(alignment: .bottomLeading) {
            ControllerDebugOverlay()
                .padding(.leading, 10)
                .padding(.bottom, 10)
        }
        #endif
        .statusBarHidden(true)
        .onAppear { OrientationLock.lock(game.orientation.mask) }
        .onDisappear { OrientationLock.unlock() }
        .persistentSystemOverlays(.hidden)
        .confirmationDialog(
            "Exit to the game library?",
            isPresented: $showExitConfirmation,
            titleVisibility: .visible
        ) {
            Button("Exit Game", role: .destructive, action: onExit)
            Button("Keep Playing", role: .cancel) {}
        } message: {
            Text("Any progress that hasn't been saved in the game will be lost.")
        }
        .alert(
            game.title,
            isPresented: Binding(
                get: { javaScriptAlert != nil },
                set: { if !$0 { javaScriptAlert = nil } }
            ),
            presenting: javaScriptAlert
        ) { alert in
            Button("OK") { alert.dismiss() }
        } message: { alert in
            Text(alert.message)
        }
    }

    private var exitButton: some View {
        Button {
            showExitConfirmation = true
        } label: {
            Image(systemName: "xmark")
                .font(.system(size: 13, weight: .bold))
                .foregroundStyle(.white)
                .padding(10)
                .background(.black.opacity(0.45), in: Circle())
                .overlay(Circle().strokeBorder(.white.opacity(0.25), lineWidth: 1))
        }
        .accessibilityLabel("Exit game")
    }
}

#if DEBUG
/// Debug builds only: live view of the controller bridge, so a device test
/// diagnoses itself without the Xcode console.
private struct ControllerDebugOverlay: View {
    private let debug = ControllerDebugState.shared

    var body: some View {
        Text(statusText)
            .font(.caption2.monospaced())
            .foregroundStyle(.white)
            .padding(.horizontal, 8)
            .padding(.vertical, 4)
            .background(.black.opacity(0.65), in: Capsule())
    }

    private var statusText: String {
        guard let name = debug.attachedName else {
            return "controller: none detected"
        }
        var text = "\(name) · \(debug.eventCount) events"
        if let last = debug.lastEvent {
            text += " · \(last)"
        }
        return text
    }
}
#endif

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
        .statusBarHidden(true)
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

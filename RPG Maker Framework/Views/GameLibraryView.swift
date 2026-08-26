//
//  GameLibraryView.swift
//  RPG Maker Framework
//
//  The screen the app opens on: a grid of every bundled game.
//  Tapping a game launches it full screen in GamePlayerView.
//

import SwiftUI

struct GameLibraryView: View {
    @Environment(GameLibrary.self) private var library
    @State private var selectedGame: Game?

    private let columns = [GridItem(.adaptive(minimum: 150, maximum: 220), spacing: 20)]

    var body: some View {
        NavigationStack {
            Group {
                if library.games.isEmpty {
                    emptyState
                } else {
                    grid
                }
            }
            .navigationTitle("Games")
            .background(Color(.systemGroupedBackground))
        }
        .fullScreenCover(item: $selectedGame) { game in
            GamePlayerView(game: game) {
                selectedGame = nil
            }
        }
    }

    private var grid: some View {
        ScrollView {
            LazyVGrid(columns: columns, spacing: 20) {
                ForEach(library.games) { game in
                    Button {
                        selectedGame = game
                    } label: {
                        GameCard(game: game)
                    }
                    .buttonStyle(.plain)
                    .accessibilityHint("Starts \(game.title)")
                }
            }
            .padding(20)
        }
    }

    private var emptyState: some View {
        ContentUnavailableView {
            Label("No Games Found", systemImage: "gamecontroller")
        } description: {
            Text("Export your RPG Maker MZ game for web, then drop its folder into the “Games” folder in this Xcode project and build again.")
        }
    }
}

/// One tile in the library grid.
struct GameCard: View {
    let game: Game

    var body: some View {
        VStack(spacing: 12) {
            GameIcon(url: game.iconURL)
                .aspectRatio(1, contentMode: .fit)
                .clipShape(RoundedRectangle(cornerRadius: 24, style: .continuous))
                .shadow(color: .black.opacity(0.12), radius: 8, y: 4)

            Text(game.title)
                .font(.headline)
                .multilineTextAlignment(.center)
                .lineLimit(2)
                .frame(maxWidth: .infinity)
        }
        .padding(16)
        .background(.background, in: RoundedRectangle(cornerRadius: 20, style: .continuous))
        .contentShape(RoundedRectangle(cornerRadius: 20, style: .continuous))
        .hoverEffect(.lift)
    }
}

/// The game's exported icon, or a placeholder when the export has none.
struct GameIcon: View {
    let url: URL?

    var body: some View {
        if let url, let image = UIImage(contentsOfFile: url.path) {
            Image(uiImage: image)
                .resizable()
                .scaledToFill()
        } else {
            ZStack {
                LinearGradient(
                    colors: [.accentColor.opacity(0.85), .accentColor.opacity(0.45)],
                    startPoint: .topLeading,
                    endPoint: .bottomTrailing
                )
                Image(systemName: "gamecontroller.fill")
                    .font(.system(size: 44, weight: .semibold))
                    .foregroundStyle(.white)
            }
        }
    }
}

#Preview {
    GameLibraryView()
        .environment(GameLibrary())
}

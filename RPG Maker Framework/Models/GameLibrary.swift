//
//  GameLibrary.swift
//  RPG Maker Framework
//
//  Discovers every game bundled under the `Games` folder reference.
//  To add a game: drop an exported RPG Maker MZ `www` folder into `Games/`
//  (rename it to the game's name) and rebuild. No code changes needed.
//

import Foundation
import Observation

@Observable
final class GameLibrary {
    /// Name of the folder reference in the Xcode project that holds the games.
    static let gamesFolderName = "Games"

    private(set) var games: [Game] = []

    init() {
        reload()
    }

    /// Rescans the bundle. Cheap — only reads folder names and each System.json.
    func reload() {
        let fileManager = FileManager.default

        guard let gamesRoot = Bundle.main.url(forResource: Self.gamesFolderName, withExtension: nil) else {
            games = []
            return
        }

        let folders = (try? fileManager.contentsOfDirectory(
            at: gamesRoot,
            includingPropertiesForKeys: [.isDirectoryKey],
            options: [.skipsHiddenFiles]
        )) ?? []

        games = folders
            .filter { (try? $0.resourceValues(forKeys: [.isDirectoryKey]).isDirectory) == true }
            .compactMap(Self.makeGame(from:))
            .sorted { $0.title.localizedStandardCompare($1.title) == .orderedAscending }
    }

    private static func makeGame(from folder: URL) -> Game? {
        let fileManager = FileManager.default
        let index = folder.appendingPathComponent("index.html")
        guard fileManager.fileExists(atPath: index.path) else { return nil }

        let icon = folder.appendingPathComponent("icon/icon.png")

        return Game(
            id: folder.lastPathComponent,
            title: readTitle(in: folder) ?? folder.lastPathComponent,
            folderURL: folder,
            indexURL: index,
            iconURL: fileManager.fileExists(atPath: icon.path) ? icon : nil,
            frameworkConfigJSON: readFrameworkConfig(in: folder)
        )
    }

    /// Optional `framework.json` next to index.html. Validated as JSON so a typo
    /// can't inject broken script into the game; invalid files are ignored.
    private static func readFrameworkConfig(in folder: URL) -> String? {
        let url = folder.appendingPathComponent("framework.json")
        guard let data = try? Data(contentsOf: url) else { return nil }
        guard (try? JSONSerialization.jsonObject(with: data)) != nil,
              let text = String(data: data, encoding: .utf8) else {
            #if DEBUG
            print("[GameLibrary] Ignoring invalid framework.json in \(folder.lastPathComponent)")
            #endif
            return nil
        }
        return text
    }

    /// RPG Maker MZ stores the game's title in data/System.json under "gameTitle".
    private static func readTitle(in folder: URL) -> String? {
        let systemJSON = folder.appendingPathComponent("data/System.json")
        guard
            let data = try? Data(contentsOf: systemJSON),
            let object = try? JSONSerialization.jsonObject(with: data) as? [String: Any],
            let title = object["gameTitle"] as? String,
            !title.trimmingCharacters(in: .whitespacesAndNewlines).isEmpty
        else { return nil }
        return title
    }
}

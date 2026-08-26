//
//  Game.swift
//  RPG Maker Framework
//
//  One exported RPG Maker MZ game living in the app bundle's `Games` folder.
//

import Foundation

/// `nonisolated` keeps this plain value type usable from any context under the
/// project's MainActor default isolation.
nonisolated struct Game: Identifiable {
    /// The folder name inside `Games`. Stable, unique, and safe to use as an id.
    let id: String

    /// Title shown in the library (from data/System.json, falling back to the folder name).
    let title: String

    /// The game's root folder — the exported `www` contents.
    let folderURL: URL

    /// `index.html` inside `folderURL`.
    let indexURL: URL

    /// `icon/icon.png` if the export includes one.
    let iconURL: URL?
}

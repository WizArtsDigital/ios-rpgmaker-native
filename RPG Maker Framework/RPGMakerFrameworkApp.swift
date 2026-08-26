//
//  RPGMakerFrameworkApp.swift
//  RPG Maker Framework
//
//  SwiftUI entry point. Replaces AppDelegate / SceneDelegate / Main.storyboard.
//

import SwiftUI

@main
struct RPGMakerFrameworkApp: App {
    /// Scans the bundled `Games` folder once at launch and is shared with every view.
    @State private var library = GameLibrary()

    var body: some Scene {
        WindowGroup {
            GameLibraryView()
                .environment(library)
        }
    }
}

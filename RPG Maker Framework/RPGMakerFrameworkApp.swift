//
//  RPGMakerFrameworkApp.swift
//  RPG Maker Framework
//
//  SwiftUI entry point. Replaces AppDelegate / SceneDelegate / Main.storyboard.
//

import SwiftUI
import GoogleMobileAds

@main
struct RPGMakerFrameworkApp: App {
    /// Scans the bundled `Games` folder once at launch and is shared with every view.
    @State private var library = GameLibrary()

    init() {
        // App.init() runs synchronously BEFORE SwiftUI presents the first
        // frame, so anything slow here delays the whole window. Push the SDK
        // start to the next run loop tick (same fix as ParkExplore) so the
        // library appears immediately; AdBannerView requests its first ad
        // after this has run.
        DispatchQueue.main.async {
            MobileAds.shared.start()
        }
    }

    var body: some Scene {
        WindowGroup {
            GameLibraryView()
                .environment(library)
        }
    }
}

//
//  OrientationLock.swift
//  RPG Maker Framework
//
//  Games lock the device to their natural orientation (landscape for a
//  wide-resolution game) while they're on screen; the library allows all
//  orientations. The lock is enforced through the app delegate's
//  supportedInterfaceOrientationsFor hook — the one mechanism iOS actually
//  honors — and a geometry update rotates the device immediately.
//

import UIKit

/// A game's natural orientation. Resolved from framework.json's
/// "orientation" key when present, otherwise derived from the game's
/// authored resolution in System.json (wider than tall → landscape).
nonisolated enum GameOrientation: String {
    case landscape
    case portrait
    case any
}

extension GameOrientation {
    var mask: UIInterfaceOrientationMask {
        switch self {
        case .landscape: return .landscape
        case .portrait: return [.portrait, .portraitUpsideDown]
        case .any: return .all
        }
    }
}

enum OrientationLock {
    /// Read by OrientationAppDelegate's supportedInterfaceOrientationsFor.
    private(set) static var mask: UIInterfaceOrientationMask = .all

    static func lock(_ newMask: UIInterfaceOrientationMask) {
        mask = newMask
        for case let scene as UIWindowScene in UIApplication.shared.connectedScenes {
            scene.requestGeometryUpdate(.iOS(interfaceOrientations: newMask)) { _ in }
            for window in scene.windows {
                window.rootViewController?.setNeedsUpdateOfSupportedInterfaceOrientations()
            }
        }
    }

    static func unlock() {
        lock(.all)
    }
}

/// Minimal app delegate, present only to answer the orientation question.
/// (The app itself remains pure SwiftUI lifecycle.)
final class OrientationAppDelegate: NSObject, UIApplicationDelegate {
    func application(
        _ application: UIApplication,
        supportedInterfaceOrientationsFor window: UIWindow?
    ) -> UIInterfaceOrientationMask {
        OrientationLock.mask
    }
}

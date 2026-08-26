//
//  GameControllerMonitor.swift
//  RPG Maker Framework
//
//  App-wide view of which physical controllers are attached (PS5 DualSense,
//  Xbox, Backbone One, any MFi extended gamepad). Used by the library screen
//  to show a "controller connected" indicator; GameControllerBridge does the
//  actual input work per game session.
//

import Foundation
import GameController
import Observation

@Observable
final class GameControllerMonitor {
    static let shared = GameControllerMonitor()

    /// Controllers that expose an extended gamepad profile (the only kind
    /// RPG Maker can use), most recently connected first.
    private(set) var controllers: [GCController] = []

    var isControllerConnected: Bool { !controllers.isEmpty }

    /// Friendly name of the primary controller, e.g. "DualSense Wireless
    /// Controller", "Xbox Wireless Controller", "Backbone One".
    var primaryControllerName: String? {
        controllers.first.map { $0.vendorName ?? "Game Controller" }
    }

    private var observers: [NSObjectProtocol] = []

    private init() {
        refresh()

        let center = NotificationCenter.default
        observers.append(center.addObserver(forName: .GCControllerDidConnect, object: nil, queue: .main) { _ in
            MainActor.assumeIsolated { GameControllerMonitor.shared.refresh() }
        })
        observers.append(center.addObserver(forName: .GCControllerDidDisconnect, object: nil, queue: .main) { _ in
            MainActor.assumeIsolated { GameControllerMonitor.shared.refresh() }
        })
    }

    private func refresh() {
        controllers = Array(
            GCController.controllers()
                .filter { $0.extendedGamepad != nil }
                .reversed()
        )
    }
}

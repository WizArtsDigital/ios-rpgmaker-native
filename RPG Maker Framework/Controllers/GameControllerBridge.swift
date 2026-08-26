//
//  GameControllerBridge.swift
//  RPG Maker Framework
//
//  Turns Apple GameController input (PS5 DualSense, Xbox, Backbone One, any
//  MFi extended gamepad) into RPG Maker MZ button presses inside the WKWebView.
//
//  Why native instead of the browser Gamepad API: WKWebView's Gamepad API
//  support is inconsistent (it needs a user gesture and can silently stop
//  reporting), whereas GameController delivers every press reliably and lets
//  us pick the mapping. The bridge forwards state changes to the injected JS
//  (see GamepadBridgeScript) which writes them into `Input._currentState`.
//
//  Button mapping (edit `bind` calls in `attach` to change it):
//
//    Controller            RPG Maker MZ button
//    --------------------  ------------------------------------
//    A / Cross             ok        (confirm, talk, interact)
//    B / Circle            cancel    (back)
//    X / Square            shift     (dash)
//    Y / Triangle          menu      (open menu)
//    LB / L1               pageup
//    RB / R1               pagedown
//    D-pad, left stick     up / down / left / right
//    Menu / Options (≡)    escape    (menu on the map, cancel in menus)
//
//  This matches RPG Maker MZ's own default `Input.gamepadMapper`, so games
//  behave the same as they do with a controller in a desktop browser.
//

import Foundation
import GameController
import WebKit

/// The logical button names RPG Maker MZ's `Input` class understands.
nonisolated enum RPGButton: String {
    case ok, cancel, shift, menu, pageup, pagedown, escape
    case up, down, left, right
}

final class GameControllerBridge {
    private weak var webView: WKWebView?
    private var observers: [NSObjectProtocol] = []
    private var attachedControllers: [ObjectIdentifier: GCController] = [:]

    /// Which direction buttons are currently held, from the D-pad and the
    /// left stick combined. Only changes are sent to the game.
    private var heldDirections: Set<RPGButton> = []
    private var dpadVector: (x: Float, y: Float) = (0, 0)
    private var stickVector: (x: Float, y: Float) = (0, 0)

    private let stickThreshold: Float = 0.5

    init(webView: WKWebView) {
        self.webView = webView

        for controller in GCController.controllers() {
            attach(controller)
        }

        let center = NotificationCenter.default
        observers.append(center.addObserver(forName: .GCControllerDidConnect, object: nil, queue: .main) { [weak self] note in
            MainActor.assumeIsolated {
                if let controller = note.object as? GCController {
                    self?.attach(controller)
                }
            }
        })
        observers.append(center.addObserver(forName: .GCControllerDidDisconnect, object: nil, queue: .main) { [weak self] note in
            MainActor.assumeIsolated {
                if let controller = note.object as? GCController {
                    self?.detach(controller)
                }
            }
        })
    }

    /// Call when the game page has (re)loaded so the JS side learns whether a
    /// controller is already connected.
    func resync() {
        sendConnected(!attachedControllers.isEmpty)
        for direction in heldDirections {
            send(direction, pressed: true)
        }
    }

    /// Call from `dismantleUIView`; releases handlers so the controller can be
    /// picked up cleanly by the next game.
    func tearDown() {
        for controller in attachedControllers.values {
            clearHandlers(on: controller)
        }
        attachedControllers.removeAll()
        for observer in observers {
            NotificationCenter.default.removeObserver(observer)
        }
        observers.removeAll()
        webView = nil
    }

    // MARK: - Controller lifecycle

    private func attach(_ controller: GCController) {
        guard let pad = controller.extendedGamepad else { return }
        let key = ObjectIdentifier(controller)
        guard attachedControllers[key] == nil else { return }
        attachedControllers[key] = controller

        if controller.playerIndex == .indexUnset {
            controller.playerIndex = .index1
        }

        bind(pad.buttonA, to: .ok)
        bind(pad.buttonB, to: .cancel)
        bind(pad.buttonX, to: .shift)
        bind(pad.buttonY, to: .menu)
        bind(pad.leftShoulder, to: .pageup)
        bind(pad.rightShoulder, to: .pagedown)
        bind(pad.buttonMenu, to: .escape)

        // GameController delivers handlers on the main queue by default;
        // assumeIsolated makes that explicit to the compiler.
        pad.dpad.valueChangedHandler = { [weak self] _, x, y in
            MainActor.assumeIsolated {
                self?.dpadVector = (x, y)
                self?.updateDirections()
            }
        }
        pad.leftThumbstick.valueChangedHandler = { [weak self] _, x, y in
            MainActor.assumeIsolated {
                self?.stickVector = (x, y)
                self?.updateDirections()
            }
        }

        sendConnected(true)
    }

    private func detach(_ controller: GCController) {
        let key = ObjectIdentifier(controller)
        guard attachedControllers.removeValue(forKey: key) != nil else { return }
        clearHandlers(on: controller)

        if attachedControllers.isEmpty {
            dpadVector = (0, 0)
            stickVector = (0, 0)
            updateDirections()
            sendConnected(false)
        }
    }

    private func bind(_ button: GCControllerButtonInput, to name: RPGButton) {
        button.pressedChangedHandler = { [weak self] _, _, pressed in
            MainActor.assumeIsolated {
                self?.send(name, pressed: pressed)
            }
        }
    }

    private func clearHandlers(on controller: GCController) {
        guard let pad = controller.extendedGamepad else { return }
        for button in [pad.buttonA, pad.buttonB, pad.buttonX, pad.buttonY,
                       pad.leftShoulder, pad.rightShoulder, pad.buttonMenu] {
            button.pressedChangedHandler = nil
        }
        pad.dpad.valueChangedHandler = nil
        pad.leftThumbstick.valueChangedHandler = nil
    }

    // MARK: - Directions

    private func updateDirections() {
        var next: Set<RPGButton> = []
        for vector in [dpadVector, stickVector] {
            if vector.y > stickThreshold { next.insert(.up) }
            if vector.y < -stickThreshold { next.insert(.down) }
            if vector.x < -stickThreshold { next.insert(.left) }
            if vector.x > stickThreshold { next.insert(.right) }
        }

        for released in heldDirections.subtracting(next) {
            send(released, pressed: false)
        }
        for pressed in next.subtracting(heldDirections) {
            send(pressed, pressed: true)
        }
        heldDirections = next
    }

    // MARK: - JavaScript

    private func send(_ button: RPGButton, pressed: Bool) {
        evaluate("window.RPGMakerFrameworkGamepad && RPGMakerFrameworkGamepad.set('\(button.rawValue)', \(pressed));")
    }

    private func sendConnected(_ connected: Bool) {
        evaluate("window.RPGMakerFrameworkGamepad && RPGMakerFrameworkGamepad.setConnected(\(connected));")
    }

    private func evaluate(_ script: String) {
        webView?.evaluateJavaScript(script) { _, error in
            #if DEBUG
            if let error {
                print("[Controller] JS bridge error: \(error.localizedDescription)")
            }
            #endif
        }
    }
}

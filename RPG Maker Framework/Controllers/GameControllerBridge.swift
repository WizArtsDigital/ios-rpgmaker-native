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
//  KEYBOARD MODE: games whose plugins remap input around their own key
//  bindings (e.g. Hendrix_Keyboard_Gamepad) ignore MZ's logical buttons, so
//  for them framework.json declares a "controller" map and the bridge types
//  real keyboard keys instead — the one input path every plugin honors:
//
//    "controller": { "buttons": {
//      "a": "E", "b": "Escape", "x": "U", "y": "G",
//      "lb": "F", "rb": "Q", "lt": "Space", "rt": "C", "menu": "Escape",
//      "up": "W", "down": "S", "left": "A", "right": "D" } }
//
//  Direction entries (up/down/left/right, fed by D-pad and left stick)
//  default to the arrow keys when omitted.
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

    /// Non-nil = keyboard mode: controller element id → key name to type.
    private let keyboardMap: [String: String]?
    private var observers: [NSObjectProtocol] = []
    private var attachedControllers: [ObjectIdentifier: GCController] = [:]

    /// Which direction buttons are currently held, from the D-pad and the
    /// left stick combined. Only changes are sent to the game.
    private var heldDirections: Set<RPGButton> = []
    private var dpadVector: (x: Float, y: Float) = (0, 0)
    private var stickVector: (x: Float, y: Float) = (0, 0)

    private let stickThreshold: Float = 0.5

    init(webView: WKWebView, keyboardMap: [String: String]? = nil) {
        self.webView = webView
        self.keyboardMap = keyboardMap
        #if DEBUG
        ControllerDebugState.shared.reset()
        #endif

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
            sendDirection(direction, pressed: true)
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

        if let map = keyboardMap {
            bindKey(pad.buttonA, to: map["a"])
            bindKey(pad.buttonB, to: map["b"])
            bindKey(pad.buttonX, to: map["x"])
            bindKey(pad.buttonY, to: map["y"])
            bindKey(pad.leftShoulder, to: map["lb"])
            bindKey(pad.rightShoulder, to: map["rb"])
            bindKey(pad.leftTrigger, to: map["lt"])
            bindKey(pad.rightTrigger, to: map["rt"])
            bindKey(pad.buttonMenu, to: map["menu"])
            bindKey(pad.buttonOptions, to: map["options"])
        } else {
            bind(pad.buttonA, to: .ok)
            bind(pad.buttonB, to: .cancel)
            bind(pad.buttonX, to: .shift)
            bind(pad.buttonY, to: .menu)
            bind(pad.leftShoulder, to: .pageup)
            bind(pad.rightShoulder, to: .pagedown)
            bind(pad.buttonMenu, to: .escape)
        }

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

        #if DEBUG
        print("[Controller] Attached: \(controller.vendorName ?? "unknown") (keyboard mode: \(keyboardMap != nil))")
        ControllerDebugState.shared.attachedName = controller.vendorName ?? "controller"
        #endif
        sendConnected(true)
    }

    private func detach(_ controller: GCController) {
        let key = ObjectIdentifier(controller)
        guard attachedControllers.removeValue(forKey: key) != nil else { return }
        #if DEBUG
        print("[Controller] Detached: \(controller.vendorName ?? "unknown")")
        if attachedControllers.isEmpty { ControllerDebugState.shared.attachedName = nil }
        #endif
        clearHandlers(on: controller)

        if attachedControllers.isEmpty {
            dpadVector = (0, 0)
            stickVector = (0, 0)
            updateDirections()
            sendConnected(false)
        }
    }

    private func bindKey(_ button: GCControllerButtonInput?, to keyName: String?) {
        guard let button, let keyName, !keyName.isEmpty else { return }
        button.pressedChangedHandler = { [weak self] _, _, pressed in
            MainActor.assumeIsolated {
                self?.sendKey(keyName, pressed: pressed)
            }
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
        let buttons: [GCControllerButtonInput?] = [
            pad.buttonA, pad.buttonB, pad.buttonX, pad.buttonY,
            pad.leftShoulder, pad.rightShoulder, pad.leftTrigger, pad.rightTrigger,
            pad.buttonMenu, pad.buttonOptions
        ]
        for button in buttons {
            button?.pressedChangedHandler = nil
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
            sendDirection(released, pressed: false)
        }
        for pressed in next.subtracting(heldDirections) {
            sendDirection(pressed, pressed: true)
        }
        heldDirections = next
    }

    private func sendDirection(_ direction: RPGButton, pressed: Bool) {
        if let map = keyboardMap {
            let defaults: [RPGButton: String] = [
                .up: "ArrowUp", .down: "ArrowDown", .left: "ArrowLeft", .right: "ArrowRight"
            ]
            let keyName = map[direction.rawValue] ?? defaults[direction] ?? direction.rawValue
            sendKey(keyName, pressed: pressed)
        } else {
            send(direction, pressed: pressed)
        }
    }

    // MARK: - JavaScript

    /// Keyboard mode: type/release a real key inside the game.
    private func sendKey(_ keyName: String, pressed: Bool) {
        #if DEBUG
        ControllerDebugState.shared.eventCount += 1
        ControllerDebugState.shared.lastEvent = "key \(keyName) \(pressed ? "down" : "up")"
        #endif
        let function = pressed ? "pressKey" : "releaseKey"
        evaluate("window.RPGMakerFrameworkGamepad && RPGMakerFrameworkGamepad.\(function)('\(keyName)');")
    }

    private func send(_ button: RPGButton, pressed: Bool) {
        #if DEBUG
        ControllerDebugState.shared.eventCount += 1
        ControllerDebugState.shared.lastEvent = "\(button.rawValue) \(pressed ? "down" : "up")"
        #endif
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
                ControllerDebugState.shared.lastEvent = "JS ERROR: \(error.localizedDescription)"
            }
            #endif
        }
    }
}

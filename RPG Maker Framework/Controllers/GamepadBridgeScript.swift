//
//  GamepadBridgeScript.swift
//  RPG Maker Framework
//
//  JavaScript injected into every game at document start. It exposes
//  `window.RPGMakerFrameworkGamepad`, which the native GameControllerBridge
//  calls to press/release RPG Maker MZ's logical buttons.
//
//  How it hooks in: RPG Maker MZ keeps all input in `Input._currentState`
//  (keyed by "ok", "cancel", "up", ...). Its own browser Gamepad API polling
//  runs from `Input._pollGamepads()` once per frame. The shim wraps that poll:
//
//    • If the browser itself can see a gamepad (navigator.getGamepads), the
//      native bridge stands down and MZ — plus any gamepad plugins the game
//      ships, e.g. Hendrix_Keyboard_Gamepad or AnalogStickEx — handle it with
//      full fidelity.
//    • Otherwise the native bridge is the input source: held buttons are
//      re-applied every frame so they survive `Input.clear()` on scene
//      changes, exactly like MZ's own gamepad path.
//
//  The hook is installed as a property accessor so a plugin that later
//  assigns its own `Input._pollGamepads` (with or without aliasing the old
//  one) keeps working and keeps the shim in the chain.
//

import Foundation

enum GamepadBridgeScript {
    static let source = #"""
    (function () {
        if (window.RPGMakerFrameworkGamepad) { return; }

        var held = {};              // buttonName -> true while held by the controller
        var nativeConnected = false;
        var installed = false;
        var inWrapper = false;

        function inputReady() {
            var input = window.Input;
            return !!input
                && (typeof input === "function" || typeof input === "object")
                && typeof input._pollGamepads === "function";
        }

        function browserSeesGamepad() {
            try {
                if (typeof navigator.getGamepads !== "function") { return false; }
                var pads = navigator.getGamepads();
                for (var i = 0; i < pads.length; i++) {
                    if (pads[i] && pads[i].connected) { return true; }
                }
            } catch (e) {}
            return false;
        }

        function nativeIsSource() {
            return nativeConnected && !browserSeesGamepad();
        }

        function applyHeld() {
            var state = window.Input._currentState;
            if (!state) { return; }
            for (var name in held) {
                if (held[name]) { state[name] = true; }
            }
        }

        function install() {
            if (installed) { return true; }
            if (!inputReady()) { return false; }

            var Input = window.Input;
            var original = Input._pollGamepads;   // MZ's real poll
            var current = original;                // latest assignment (plugins may replace it)

            var wrapper = function () {
                if (nativeIsSource()) {
                    applyHeld();
                    return;
                }
                if (inWrapper) {
                    // A plugin aliased the old _pollGamepads (which is us) and
                    // called it from its own override: run MZ's real poll once.
                    return original.call(this);
                }
                inWrapper = true;
                try {
                    return current.call(this);
                } finally {
                    inWrapper = false;
                }
            };

            Object.defineProperty(Input, "_pollGamepads", {
                configurable: true,
                enumerable: true,
                get: function () { return wrapper; },
                set: function (fn) { if (typeof fn === "function" && fn !== wrapper) { current = fn; } }
            });

            installed = true;
            return true;
        }

        function set(name, pressed) {
            install();
            if (pressed) {
                held[name] = true;
            } else {
                delete held[name];
            }
            if (nativeIsSource() && inputReady() && window.Input._currentState) {
                window.Input._currentState[name] = !!pressed;
            }
        }

        function setConnected(flag) {
            nativeConnected = !!flag;
            if (!nativeConnected) {
                for (var name in held) {
                    delete held[name];
                    if (inputReady() && window.Input._currentState) {
                        window.Input._currentState[name] = false;
                    }
                }
            }
            install();
        }

        window.RPGMakerFrameworkGamepad = {
            set: set,
            setConnected: setConnected,
            isConnected: function () { return nativeConnected; },
            isNativeSource: nativeIsSource
        };

        // rmmz_core.js is loaded asynchronously by main.js, so poll briefly
        // until `Input` exists, then hook it.
        var attempts = 0;
        var timer = setInterval(function () {
            attempts += 1;
            if (install() || attempts > 600) { clearInterval(timer); }
        }, 100);
    })();
    """#
}

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
//  runs from `Input._pollGamepads()` once per frame. While a native controller
//  is connected we replace that poll with one that re-applies the buttons the
//  controller is holding — so held directions survive `Input.clear()` on scene
//  changes, exactly like MZ's own gamepad path. With no native controller the
//  original poll runs, so the browser Gamepad API still works as a fallback.
//

import Foundation

enum GamepadBridgeScript {
    static let source = #"""
    (function () {
        if (window.RPGMakerFrameworkGamepad) { return; }

        var held = {};              // buttonName -> true while held by the controller
        var nativeConnected = false;
        var installed = false;
        var originalPoll = null;

        function inputReady() {
            return typeof window.Input === "object"
                && window.Input !== null
                && typeof window.Input._pollGamepads === "function";
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
            originalPoll = window.Input._pollGamepads;
            window.Input._pollGamepads = function () {
                if (nativeConnected) {
                    applyHeld();
                } else {
                    originalPoll.call(this);
                }
            };
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
            if (inputReady() && window.Input._currentState) {
                window.Input._currentState[name] = !!pressed;
            }
        }

        function setConnected(flag) {
            nativeConnected = !!flag;
            if (!nativeConnected) {
                for (var name in held) { set(name, false); }
            }
            install();
        }

        window.RPGMakerFrameworkGamepad = {
            set: set,
            setConnected: setConnected,
            isConnected: function () { return nativeConnected; }
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

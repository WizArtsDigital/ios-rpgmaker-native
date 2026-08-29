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
//    • While a native controller is attached, the bridge is the input source
//      and MZ's browser Gamepad polling is bypassed (WKWebView lists pads in
//      navigator.getGamepads but doesn't deliver their input — Safari-only).
//      Held buttons are re-applied every frame so they survive
//      `Input.clear()` on scene changes, exactly like MZ's own gamepad path.
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

        // The native GameController bridge is ALWAYS the input source while a
        // physical controller is attached. WKWebView lists controllers in
        // navigator.getGamepads() but does not reliably deliver their input
        // (that only works in Safari proper), so deferring to the browser
        // path — an earlier design — left the controller dead in every game.
        // MZ's own browser polling is suppressed while native is connected,
        // so nothing double-fires in environments where the browser data
        // does flow.
        function nativeIsSource() {
            return nativeConnected;
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
                releaseAllKeys();
            }
            install();
        }

        // ---- Keyboard synthesis (controller "keyboard mode") -------------
        // For games whose plugins remap input (framework.json "controller"),
        // the native bridge types real keys instead of MZ logical buttons.
        var KEY_SPECIALS = {
            "SPACE": [32, " ", "Space"], "ENTER": [13, "Enter", "Enter"],
            "ESCAPE": [27, "Escape", "Escape"], "ESC": [27, "Escape", "Escape"],
            "SHIFT": [16, "Shift", "ShiftLeft"], "CONTROL": [17, "Control", "ControlLeft"],
            "CTRL": [17, "Control", "ControlLeft"], "TAB": [9, "Tab", "Tab"],
            "ARROWUP": [38, "ArrowUp", "ArrowUp"], "ARROWDOWN": [40, "ArrowDown", "ArrowDown"],
            "ARROWLEFT": [37, "ArrowLeft", "ArrowLeft"], "ARROWRIGHT": [39, "ArrowRight", "ArrowRight"],
            "UP": [38, "ArrowUp", "ArrowUp"], "DOWN": [40, "ArrowDown", "ArrowDown"],
            "LEFT": [37, "ArrowLeft", "ArrowLeft"], "RIGHT": [39, "ArrowRight", "ArrowRight"]
        };

        function keySpec(name) {
            if (!name) { return null; }
            var upper = String(name).trim().toUpperCase();
            if (KEY_SPECIALS[upper]) {
                return { keyCode: KEY_SPECIALS[upper][0], key: KEY_SPECIALS[upper][1], code: KEY_SPECIALS[upper][2] };
            }
            if (/^[A-Z]$/.test(upper)) {
                return { keyCode: upper.charCodeAt(0), key: upper.toLowerCase(), code: "Key" + upper };
            }
            if (/^[0-9]$/.test(upper)) {
                return { keyCode: upper.charCodeAt(0), key: upper, code: "Digit" + upper };
            }
            return null;
        }

        function makeKeyEvent(type, spec) {
            var event;
            try {
                event = new KeyboardEvent(type, {
                    key: spec.key, code: spec.code, keyCode: spec.keyCode, which: spec.keyCode,
                    bubbles: true, cancelable: true
                });
            } catch (e) {
                event = document.createEvent("Event");
                event.initEvent(type, true, true);
            }
            try {
                Object.defineProperty(event, "keyCode", { get: function () { return spec.keyCode; } });
                Object.defineProperty(event, "which", { get: function () { return spec.keyCode; } });
            } catch (e) {}
            return event;
        }

        var heldKeys = {};

        function pressKey(name) {
            if (heldKeys[name]) { return; }
            var spec = keySpec(name);
            if (!spec) { return; }
            heldKeys[name] = spec;
            document.dispatchEvent(makeKeyEvent("keydown", spec));
        }

        function releaseKey(name) {
            var spec = heldKeys[name];
            if (!spec) { return; }
            delete heldKeys[name];
            document.dispatchEvent(makeKeyEvent("keyup", spec));
        }

        function releaseAllKeys() {
            for (var name in heldKeys) { releaseKey(name); }
        }

        var stats = { connects: 0, sets: 0, keys: 0 };
        var announced = false;
        function announceOnce(kind) {
            if (announced) { return; }
            announced = true;
            try { console.warn("[Controller JS] first " + kind + " event received from native bridge"); } catch (e) {}
        }

        window.RPGMakerFrameworkGamepad = {
            set: function (name, pressed) { stats.sets += 1; announceOnce("button"); return set(name, pressed); },
            pressKey: function (name) { stats.keys += 1; announceOnce("key"); return pressKey(name); },
            stats: function () { return JSON.stringify(stats); },
            releaseKey: releaseKey,
            setConnected: function (flag) { stats.connects += 1; return setConnected(flag); },
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

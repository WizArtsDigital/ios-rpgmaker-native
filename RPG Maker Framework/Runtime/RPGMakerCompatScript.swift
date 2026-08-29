//
//  RPGMakerCompatScript.swift
//  RPG Maker Framework
//
//  Compatibility JavaScript injected into every game at document start, before
//  main.js runs. It papers over the differences between a desktop browser /
//  NW.js (what RPG Maker MZ expects) and a WKWebView loading file:// URLs, so
//  an exported game works as-is with no edits to its js/ folder.
//
//  1. Focus.  MZ's SceneManager.isGameActive() calls document.hasFocus(),
//     which is false inside a WKWebView. A scene whose update() never runs
//     never finishes its fade-in from black — the classic "black screen".
//     Forcing hasFocus() to true replaces the old manual patch to
//     rmmz_managers.js the README used to require.
//
//  2. fetch() on file:// URLs.  Some plugins read their JSON config with
//     fetch(), which WebKit rejects for local files while XMLHttpRequest
//     (what MZ's core uses) is allowed. If a file:// fetch fails, retry it
//     through XHR and hand back a real Response.
//
//  3. Ogg Vorbis audio.  MZ ships its own WASM Vorbis decoder
//     (js/libs/vorbisdecoder.js) and uses it only when
//     Utils.canPlayOgg() — i.e. <audio>.canPlayType("audio/ogg") — says the
//     browser can't play Ogg. Recent iOS answers "maybe", so MZ skips its
//     decoder and hands .ogg files to AudioContext.decodeAudioData, which
//     can't decode Vorbis: every sound fails with "Failed to load: audio/…".
//     Answering "" for Ogg types sends MZ down its own decoder path, which
//     also keeps LOOPSTART/LOOPLENGTH working (MZ only reads loop tags from
//     Ogg containers, so converting to .m4a would break BGM loops).
//
//  4. Touch gestures (opt-in per game via framework.json).  Multi-finger
//     taps are turned into synthetic keyboard presses, so a game whose
//     plugins expect a key (e.g. "U" = attack) gets it from a gesture:
//
//       { "gestures": { "twoFingerTap":   { "key": "U" },
//                       "threeFingerTap": { "key": "Escape" } } }
//
//     Key names: single letters/digits, Space, Enter, Escape, Shift,
//     Control, Tab, ArrowUp/Down/Left/Right. Presses go through the same
//     document "keydown" path as a real keyboard, so MZ's Input.keyMapper
//     and any key-remapping plugin see them. MZ's default two-finger
//     "cancel" is suppressed while a two-finger gesture is bound.
//
//  5. Edge-to-edge display.  MZ renders at the resolution authored in
//     System.json and letterboxes the rest of the screen (black borders).
//     framework.json's "display" setting controls how the framework fixes
//     that, per game:
//       "extend" (default) - at boot, widen/heighten the canvas to the
//         device's aspect ratio. More of the game world is visible, the UI
//         box keeps its authored size and stays centered (MZ's own
//         adjustBoxSize behavior), nothing is stretched or cropped.
//       "fill" - keep the authored resolution, scale to cover the screen
//         and crop the overflow. Use for games whose HUD breaks when the
//         canvas grows.
//       "fit" - RPG Maker's stock letterboxing, untouched.
//

import Foundation

enum RPGMakerCompatScript {
    static let source = #"""
    (function () {
        if (window.__rpgMakerFrameworkCompat) { return; }
        window.__rpgMakerFrameworkCompat = true;

        // 1. The web view is always "focused" as far as the game is concerned.
        try {
            document.hasFocus = function () { return true; };
        } catch (e) {}

        // 3. Make MZ use its bundled Vorbis decoder for .ogg audio.
        try {
            var mediaProto = window.HTMLMediaElement && window.HTMLMediaElement.prototype;
            if (mediaProto && typeof mediaProto.canPlayType === "function") {
                var originalCanPlayType = mediaProto.canPlayType;
                mediaProto.canPlayType = function (type) {
                    if (typeof type === "string" && /ogg|vorbis/i.test(type)) { return ""; }
                    return originalCanPlayType.call(this, type);
                };
            }
        } catch (e) {}

        // 5. Edge-to-edge display (see framework.json "display": extend | fill | fit).
        (function () {
            var config = window.RPGMakerFrameworkConfig || {};
            var mode = config.display || "extend";
            if (mode !== "extend" && mode !== "fill") { return; }

            function screenSize() {
                var el = document.documentElement;
                return {
                    width: (el && el.clientWidth) || window.innerWidth,
                    height: (el && el.clientHeight) || window.innerHeight
                };
            }

            // The aspect ratio to fill. The game is orientation-locked
            // natively (config._orientation), so compute the aspect for THAT
            // orientation from the physical screen dimensions — never from
            // whichever way the device happens to be held at boot. A game
            // launched in portrait therefore still sizes its canvas for
            // landscape, and is correct the moment the device finishes
            // rotating.
            function targetAspect() {
                var screen = screenSize();
                if (screen.width <= 0 || screen.height <= 0) { return 0; }
                var long = Math.max(screen.width, screen.height);
                var short = Math.min(screen.width, screen.height);
                switch (config._orientation) {
                    case "landscape": return long / short;
                    case "portrait": return short / long;
                    default: return screen.width / screen.height;
                }
            }

            function extendedSize(width, height) {
                var aspect = targetAspect();
                if (aspect > 0 && width > 0 && height > 0) {
                    if (aspect > width / height) {
                        width = 2 * Math.round((height * aspect) / 2);
                    } else {
                        height = 2 * Math.round((width / aspect) / 2);
                    }
                }
                return { width: width, height: height };
            }

            var installed = false;
            function install() {
                if (installed) { return true; }
                var g = window.Graphics;
                if (!g || typeof g.resize !== "function" || typeof g._updateRealScale !== "function") { return false; }

                if (mode === "extend") {
                    // Grow the canvas to the target aspect ratio. Idempotent:
                    // input already at the right aspect passes through unchanged.
                    var originalResize = g.resize;
                    var designSize = null;   // what the game asked for, pre-extension
                    g.resize = function (width, height) {
                        if (!this.__rpgmakerFrameworkResizing) {
                            designSize = { width: width, height: height };
                        }
                        var extended = extendedSize(width, height);
                        return originalResize.call(this, extended.width, extended.height);
                    };
                    // For an "any"-orientation game (or a boot that raced the
                    // rotation animation), re-extend when the viewport changes.
                    window.addEventListener("resize", function () {
                        if (!designSize) { return; }
                        var extended = extendedSize(designSize.width, designSize.height);
                        if (extended.width !== g._width || extended.height !== g._height) {
                            g.__rpgmakerFrameworkResizing = true;
                            try { g.resize(designSize.width, designSize.height); }
                            finally { g.__rpgmakerFrameworkResizing = false; }
                        }
                    });
                } else {
                    // fill: cover the screen, crop the overflow.
                    var originalScale = g._updateRealScale;
                    g._updateRealScale = function () {
                        originalScale.call(this);
                        if (this._stretchEnabled && this._width > 0 && this._height > 0) {
                            this._realScale = Math.max(
                                this._stretchWidth() / this._width,
                                this._stretchHeight() / this._height
                            );
                        }
                    };
                }
                installed = true;
                return true;
            }

            var attempts = 0;
            var timer = setInterval(function () {
                attempts += 1;
                if (install() || attempts > 600) { clearInterval(timer); }
            }, 50);
            install();
        })();

        // 4. Touch gestures → synthetic keyboard presses (see framework.json).
        (function () {
            var config = window.RPGMakerFrameworkConfig || {};
            var gestures = config.gestures || {};
            var bindings = {
                2: gestures.twoFingerTap,
                3: gestures.threeFingerTap
            };
            if (!bindings[2] && !bindings[3]) { return; }

            var SPECIAL = {
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
                if (SPECIAL[upper]) {
                    return { keyCode: SPECIAL[upper][0], key: SPECIAL[upper][1], code: SPECIAL[upper][2] };
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
                // Some engines ignore keyCode from the init dictionary; force it.
                try {
                    Object.defineProperty(event, "keyCode", { get: function () { return spec.keyCode; } });
                    Object.defineProperty(event, "which", { get: function () { return spec.keyCode; } });
                } catch (e) {}
                return event;
            }

            var HOLD_MS = 100; // > one frame, so Input.update() sees the press

            function pressKey(binding) {
                var spec = keySpec(binding && binding.key);
                if (!spec) { return; }
                document.dispatchEvent(makeKeyEvent("keydown", spec));
                setTimeout(function () {
                    document.dispatchEvent(makeKeyEvent("keyup", spec));
                }, (binding.holdMs > 0 ? binding.holdMs : HOLD_MS));
            }

            // Undo whatever the first finger's tap started (MZ's tap-to-move
            // destination, and the pending trigger if the frame hasn't run yet).
            function cancelSingleTap() {
                try {
                    if (window.TouchInput && typeof TouchInput.clear === "function") { TouchInput.clear(); }
                    if (window.$gameTemp && typeof $gameTemp.clearDestination === "function") { $gameTemp.clearDestination(); }
                } catch (e) {}
            }

            var activeFingers = 0;   // most fingers seen during the current touch sequence
            var handled = false;
            var pendingTimer = null;

            // Fingers land one at a time, so a three-finger tap looks like a
            // two-finger tap first. Only when a three-finger gesture is bound
            // do we wait briefly before committing to the two-finger one.
            var SETTLE_MS = bindings[3] ? (gestures.settleMs > 0 ? gestures.settleMs : 60) : 0;

            function commit(binding) {
                handled = true;
                cancelSingleTap();
                pressKey(binding);
            }

            // Capture on window: runs before MZ's document-level TouchInput
            // listeners, so a multi-finger touchstart never reaches them
            // (MZ would otherwise treat 2+ fingers as "cancel").
            window.addEventListener("touchstart", function (event) {
                var count = event.touches.length;
                if (count < 2) { return; }
                event.stopPropagation();
                event.preventDefault();
                if (count > activeFingers) { activeFingers = count; }
                if (handled) { return; }

                var binding = bindings[count];
                if (pendingTimer) { clearTimeout(pendingTimer); pendingTimer = null; }
                if (!binding) { return; }
                if (count === 2 && SETTLE_MS > 0) {
                    pendingTimer = setTimeout(function () {
                        pendingTimer = null;
                        if (!handled) { commit(binding); }
                    }, SETTLE_MS);
                } else {
                    commit(binding);
                }
            }, { capture: true, passive: false });

            window.addEventListener("touchmove", function (event) {
                if (event.touches.length >= 2 && handled) {
                    event.stopPropagation();
                    event.preventDefault();
                }
            }, { capture: true, passive: false });

            function onSequenceEnd(event) {
                if (event.touches.length === 0) {
                    // Quick two-finger tap released before the settle timer: fire now.
                    if (pendingTimer && !handled && activeFingers === 2 && bindings[2]) {
                        clearTimeout(pendingTimer); pendingTimer = null;
                        commit(bindings[2]);
                    }
                    activeFingers = 0;
                    handled = false;
                }
            }
            window.addEventListener("touchend", onSequenceEnd, { capture: true });
            window.addEventListener("touchcancel", onSequenceEnd, { capture: true });
        })();

        // 2. fetch() fallback for local files.
        var nativeFetch = window.fetch;
        if (typeof nativeFetch === "function") {
            var isFileURL = function (input) {
                try {
                    var raw = (typeof input === "string") ? input : (input && input.url) || "";
                    return new URL(raw, window.location.href).protocol === "file:";
                } catch (e) {
                    return false;
                }
            };

            var xhrFetch = function (input, init) {
                var url = (typeof input === "string") ? input : input.url;
                var method = (init && init.method) || (input && input.method) || "GET";
                return new Promise(function (resolve, reject) {
                    var xhr = new XMLHttpRequest();
                    xhr.open(method, url, true);
                    xhr.responseType = "arraybuffer";
                    xhr.onload = function () {
                        // file:// responses report status 0 on success.
                        var ok = xhr.status === 0 || (xhr.status >= 200 && xhr.status < 300);
                        resolve(new Response(ok ? xhr.response : null, {
                            status: ok ? 200 : (xhr.status || 404),
                            statusText: ok ? "OK" : "Not Found"
                        }));
                    };
                    xhr.onerror = function () {
                        reject(new TypeError("RPG Maker Framework: could not read " + url));
                    };
                    xhr.send();
                });
            };

            window.fetch = function (input, init) {
                if (!isFileURL(input)) {
                    return nativeFetch.apply(window, arguments);
                }
                var args = arguments;
                return nativeFetch.apply(window, args).catch(function () {
                    return xhrFetch(input, init);
                });
            };
        }
    })();
    """#

    /// DEBUG only: mirrors the game's console errors, uncaught exceptions and
    /// unhandled promise rejections to Xcode's console via the
    /// `rpgmakerLog` script message handler, so a broken game is diagnosable
    /// without Safari's Web Inspector.
    static let debugLoggingSource = #"""
    (function () {
        if (!window.webkit || !window.webkit.messageHandlers || !window.webkit.messageHandlers.rpgmakerLog) { return; }
        var handler = window.webkit.messageHandlers.rpgmakerLog;
        function post(level, parts) {
            try {
                var text = Array.prototype.map.call(parts, function (p) {
                    if (p instanceof Error) { return p.message + (p.stack ? "\n" + p.stack : ""); }
                    if (typeof p === "object") { try { return JSON.stringify(p); } catch (e) { return String(p); } }
                    return String(p);
                }).join(" ");
                handler.postMessage(level + ": " + text);
            } catch (e) {}
        }
        var originalError = console.error, originalWarn = console.warn;
        console.error = function () { post("error", arguments); if (originalError) { originalError.apply(console, arguments); } };
        console.warn  = function () { post("warn",  arguments); if (originalWarn)  { originalWarn.apply(console, arguments); } };
        window.addEventListener("error", function (event) {
            post("uncaught", [event.message, "(" + (event.filename || "?") + ":" + (event.lineno || 0) + ")"]);
        });
        window.addEventListener("unhandledrejection", function (event) {
            post("unhandled promise", [event.reason]);
        });
    })();
    """#
}

# RPG Maker Framework

What Does This Framework Do?
With this framework you can copy your deployed RPG Maker MZ projects into this Xcode 26 project and run - and publish - your games on iOS, iPadOS and macOS (Designed for iPad / Mac Catalyst). The project targets iOS 18.0 and later.

The app is written entirely in SwiftUI. It opens on a game library screen that lists every game bundled in the app; tapping a game launches it full screen inside a WKWebView, with a small close button in the corner to return to the library. There are no storyboards, view controllers, AppDelegate or SceneDelegate to maintain.

Prerequisites:
You will need a RPG Maker MZ Project, 
RPG Maker MZ
Mac
iOS Device 
Xcode 26 
Apple Developer Account (Signing Certificate, Provisioning Profiles, Etc.) 

See Official Apple Developer Documentation if you’re unfamiliar on how to develop and publish for Apple Platforms. 

Project Layout:

RPG Maker Framework/
  RPGMakerFrameworkApp.swift   - App entry point (SwiftUI App lifecycle)
  Models/Game.swift            - One bundled game (title, folder, index.html, icon)
  Models/GameLibrary.swift     - Scans the Games folder at launch
  Views/GameLibraryView.swift  - The game picker grid
  Views/GamePlayerView.swift   - Full-screen game host with the exit button
  Views/GameWebView.swift      - The single WKWebView wrapper (the only WebKit code)
  Views/AdBannerView.swift     - Google AdMob adaptive banner shown under the game grid
  Models/AdConfig.swift        - AdMob banner ad unit ID
  Controllers/                 - Game controller support (PS5, Xbox, Backbone One, MFi)
  Games/                       - One folder per game. Ships with "Hello World" as a sample.
  Assets.xcassets, Info.plist

Instructions:

Step 1: Export Your Game in RPG Maker MZ
Under File menu, select Deployment. Make sure to use Web Browsers / iOS / Android option. 

Step 2: Open this Xcode 26 Project (RPG Maker Framework.xcodeproj).

Step 3: Add Your Game to the Games Folder
In Finder, open the project's "RPG Maker Framework/Games" folder.
Copy your exported game folder (usually Documents/Output/<project>/www) into "Games" and rename the copied folder to your game's name, e.g. "Games/My Adventure".
The folder must contain index.html at its top level. If it has data/System.json (every MZ export does), the library uses the game title from there; the icon comes from icon/icon.png.
Because "Games" is a folder reference in Xcode (blue folder), anything you drop in is picked up automatically on the next build - no need to add files in Xcode.
Repeat for as many games as you want. Delete the sample "Hello World" folder when you no longer need it.

Step 4: There is no step 4.
Older versions of this framework required editing js/rmmz_managers.js (the SceneManager.isGameActive focus patch) or the game sat on a black screen. The framework now injects that fix - and a fetch() fallback some plugins need - into every game automatically (Runtime/RPGMakerCompatScript.swift), so drop in the export exactly as RPG Maker produced it. Games that were patched by hand still work.

Audio: keep the .ogg files exactly as exported. iOS can't decode Ogg Vorbis natively, but MZ ships its own decoder (js/libs/vorbisdecoder.js) and the framework makes sure MZ uses it, so sound and BGM loop points (LOOPSTART / LOOPLENGTH) work without converting anything. Don't convert to .m4a - MZ only reads loop tags from Ogg files, so converted music would stop looping.

Tip: delete anything in the game folder that isn't part of the game (READ ME.txt, Terms_of_Use.pdf, .url shortcuts) - everything in Games/ ships inside the app bundle.

And that’s it! You can now run your games in the simulator, or plug in an iOS/iPadOS device (so long as you have developer permissions). 

Google AdMob
The library screen shows an anchored adaptive banner at the bottom, using the same implementation as ParkExplore (Views/AdBannerView.swift + Models/AdConfig.swift). The Google Mobile Ads SDK is pulled in with Swift Package Manager (https://github.com/googleads/swift-package-manager-google-mobile-ads, 13.4+) - Xcode resolves it automatically the first time you open the project; no CocoaPods and no -ObjC linker flag needed.

How the IDs work:
  - DEBUG builds always use Google's test banner unit, so you never request or click live ads while developing (AdMob invalid-traffic policy).
  - RELEASE builds use `liveBannerAdUnitID` in Models/AdConfig.swift. It is empty right now, so Release falls back to the test unit and logs a reminder. Fill it in from the AdMob console before shipping.
  - Info.plist `GADApplicationIdentifier` is still Google's TEST app ID - replace it with this app's own AdMob app ID at the same time.
  - Ads are requested as non-personalized ("npa": "1"), so no App Tracking Transparency prompt or NSUserTrackingUsageDescription is needed. See the comments in AdConfig.swift if you want personalized ads later.
The SKAdNetworkItems list in Info.plist is Google's current recommended set. ParkExplore also has a StoreKit "Remove Ads" purchase (AdFreeStore) that hides the banner; that is not ported yet.

Game Controllers (PS5 DualSense, Xbox, Backbone One, MFi)
Any controller iOS recognizes works out of the box - pair a DualSense or Xbox controller in Settings > Bluetooth, or plug the phone into a Backbone One. The library screen shows a green "controller connected" badge in the top-right, and inside a game the controller drives RPG Maker directly through Apple's GameController framework (Controllers/GameControllerBridge.swift), which is far more reliable than the browser Gamepad API inside a WKWebView. No Backbone SDK is needed; Backbone One is a standard MFi extended gamepad.

Default mapping (same as RPG Maker MZ's own Input.gamepadMapper, so games behave like they do with a controller in a desktop browser):

  A / Cross            ok        (confirm, interact)
  B / Circle           cancel    (back)
  X / Square           shift     (dash)
  Y / Triangle         menu      (open menu)
  LB / L1              pageup
  RB / R1              pagedown
  D-pad or left stick  move
  Menu / Options (≡)   escape    (menu on the map, cancel in menus)

To change the mapping, edit the `bind(...)` calls in GameControllerBridge.attach. Triggers, right stick, Share/Create and the touchpad are intentionally unmapped - bind them there if a game needs them.

How it works: Controllers/GamepadBridgeScript.swift is injected into every game before its scripts run and exposes window.RPGMakerFrameworkGamepad. Native button changes are sent with evaluateJavaScript and written straight into Input._currentState, which is exactly what RPG Maker's own gamepad polling does. While a controller is connected, MZ's browser polling is bypassed so input is never double-counted; with no controller it runs as normal.

Per-Game Settings: framework.json (optional)
Drop a framework.json next to a game's index.html to configure the framework's runtime layer for that game only. Currently supported:

  {
    "display": "extend",
    "gestures": {
      "twoFingerTap":   { "key": "U" },
      "threeFingerTap": { "key": "Escape" }
    }
  }

orientation - "landscape", "portrait", or "any". Games are orientation-locked while playing: the phone rotates to the game's orientation when it launches and unlocks when you exit to the library. Without this key the framework decides from the game's authored resolution (wider than tall → landscape). The canvas is always sized for the locked orientation, so launching from a portrait-held phone still comes up edge-to-edge landscape.

display - how the game fills the screen (black borders come from RPG Maker letterboxing its authored System.json resolution):
  "extend" (the default, even with no framework.json): at boot the canvas grows to the device's aspect ratio, so the game world reaches every edge. Menus and windows keep their authored size and stay centered (MZ's own UI-area behavior). You simply see more of the map. Note: on maps smaller than the widened view, RPG Maker shows the area beyond the map edge, same as it would on an ultrawide monitor.
  "fill": keep the authored resolution and scale it up to cover the screen, cropping the overflow. Use for games whose HUD assumes exact canvas edges.
  "fit": RPG Maker's stock letterboxing, if a game needs the black borders back.

controller - optional keyboard mode for the game controller bridge. By default a controller drives RPG Maker's standard logical buttons (A=ok, B=cancel, ...), which vanilla MZ games understand. Games using input-remapping plugins (Hendrix_Keyboard_Gamepad and friends) ignore those, so give them a "controller" map and the bridge types the game's own keyboard keys instead: {"controller": {"buttons": {"a": "E", "x": "U", "lt": "Space", "up": "W", ...}}}. Element names: a, b, x, y, lb, rb, lt, rt, menu, options, plus up/down/left/right for the D-pad and left stick (default: arrow keys). The bundled Hendrix sample ships with the full map matching its Button Config.

Multi-finger taps are delivered to the game as real keyboard presses (document keydown/keyup), so MZ's Input.keyMapper and key-remapping plugins such as Hendrix_Keyboard_Gamepad treat them exactly like a keyboard. Key names: a single letter or digit, Space, Enter, Escape, Shift, Control, Tab, Up/Down/Left/Right. While a two-finger gesture is bound, MZ's default two-finger "cancel" is suppressed. Single taps are untouched - normal RPG Maker tap-to-move keeps working.

Example - the bundled Hendrix action-combat sample: its export shipped with "Move via Cursor" off and Attack bound to "U, leftclick", which on a phone means every tap attacks and nothing moves. Two plugin settings were changed in js/plugins.js (Action Engine "Move via Cursor" = true; Keyboard/Gamepad Attack "To Key" = "U") and its framework.json binds twoFingerTap to U. Result: tap to move, two-finger tap to attack, and a physical controller still attacks with X via the plugin's own gamepad mapping. The original plugins.js is kept in _backups/ at the repo root.

Customizing the Library Screen
Everything you see before a game starts lives in Views/GameLibraryView.swift. It is plain SwiftUI, so this is the place to add features such as In-App Purchases, Ads, a settings screen, or a different look for the game grid. GamePlayerView.swift owns the full-screen game and the exit button; GameWebView.swift is the only file that talks to WebKit.

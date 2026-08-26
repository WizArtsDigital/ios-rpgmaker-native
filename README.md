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

Step 4: Allow MZ to start without focus (2 METHODS)

METHOD 1:
Navigate to Games > <your game> > js > rmmz_managers.js

Search for the SceneManager.isGameActive function - this will be located around line 2107. 

Replace the code with the following in order skip the check on focus:



SceneManager.isGameActive = function() {
    return true;
    try {
        return window.top.document.hasFocus();
    } catch (e) {
        // SecurityError
        return true;
    }
};




METHOD 2:
If you don’t feel like replacing the code in Method 1, copy the rmmz_managers.js file from the sample "Hello World" game (it already has the change) over your own game's

js > rmmz_managers.js

WARNING: YOUR MZ GAME WILL NOT WORK IF YOU DO NOT DO THIS STEP!!!!!!!!!!!!!!

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

Customizing the Library Screen
Everything you see before a game starts lives in Views/GameLibraryView.swift. It is plain SwiftUI, so this is the place to add features such as In-App Purchases, Ads, a settings screen, or a different look for the game grid. GamePlayerView.swift owns the full-screen game and the exit button; GameWebView.swift is the only file that talks to WebKit.

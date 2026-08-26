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

Customizing the Library Screen
Everything you see before a game starts lives in Views/GameLibraryView.swift. It is plain SwiftUI, so this is the place to add features such as In-App Purchases, Ads, a settings screen, or a different look for the game grid. GamePlayerView.swift owns the full-screen game and the exit button; GameWebView.swift is the only file that talks to WebKit.

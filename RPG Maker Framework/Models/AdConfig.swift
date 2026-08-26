//
//  AdConfig.swift
//  RPG Maker Framework
//
//  Google AdMob identifiers and request policy. Same structure as
//  ParkExplore's AdConfig so both apps behave the same way.
//
//  Ad IDs:
//    • Google's TEST unit → served in DEBUG builds, so development never
//      requests (or accidentally clicks) live ads. This split is an AdMob
//      POLICY requirement: tapping your own live ads is invalid traffic and
//      can get the account suspended. Test on device from a Debug build, or
//      register the device as a test device before running a Release build.
//    • The REAL banner unit → served in RELEASE builds. Until it is filled in
//      below, Release builds fall back to the test unit (never a crash).
//    • The app ID lives in Info.plist (GADApplicationIdentifier). It is
//      currently Google's TEST app ID; replace it with this app's own ID
//      from the AdMob console at the same time as the live unit below.
//

import Foundation
import GoogleMobileAds

enum AdConfig {
    /// Google's official test banner ad unit (anchored adaptive).
    /// Safe to click in development; NEVER ship real ads you click yourself.
    static let testBannerAdUnitID = "ca-app-pub-3940256099942544/2435281174"

    /// TODO: the REAL banner unit for RPG Maker Framework from the AdMob
    /// console (AdMob → Apps → this app → Ad units). Format:
    /// "ca-app-pub-XXXXXXXXXXXXXXXX/YYYYYYYYYY".
    static let liveBannerAdUnitID = ""

    /// Test unit in DEBUG (never request/click live ads while developing —
    /// AdMob invalid-traffic policy), real unit in RELEASE.
    static var bannerAdUnitID: String {
        #if DEBUG
        return testBannerAdUnitID
        #else
        if liveBannerAdUnitID.isEmpty {
            print("[AdMob] liveBannerAdUnitID is not set — Release build is serving TEST ads. Fill it in AdConfig.swift.")
            return testBannerAdUnitID
        }
        return liveBannerAdUnitID
        #endif
    }

    /// This app requests NON-PERSONALIZED ads only (the "npa": "1" flag
    /// below). AdMob still serves ads, but non-personalized ads don't use
    /// the IDFA for cross-app tracking — so the app does NOT need an App
    /// Tracking Transparency prompt or NSUserTrackingUsageDescription in
    /// Info.plist. Same v1 decision as ParkExplore: it trades some revenue
    /// (personalized ads pay more) for skipping the ATT flow entirely.
    /// To switch to personalized ads later: flip this to false, add
    /// NSUserTrackingUsageDescription to Info.plist, and call
    /// ATTrackingManager.requestTrackingAuthorization(...) before the
    /// first ad request.
    static let requestsNonPersonalizedAdsOnly = true

    /// Builds every ad request the app makes, so the non-personalized flag
    /// is set in exactly one place.
    static func makeAdRequest() -> Request {
        let request = Request()

        if requestsNonPersonalizedAdsOnly {
            let extras = Extras()
            extras.additionalParameters = ["npa": "1"]
            request.register(extras)
        }

        return request
    }
}

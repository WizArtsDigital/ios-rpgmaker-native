//
//  AdBannerView.swift
//  RPG Maker Framework
//
//  Google AdMob adaptive banner, wrapped for SwiftUI. Ported from
//  ParkExplore's AdBannerView so both apps share one proven implementation.
//  Drop `AdBannerView()` anywhere (currently: bottom of GameLibraryView).
//

import SwiftUI
import GoogleMobileAds

/// SwiftUI-facing banner. Measures its own width, reserves the matching
/// anchored-adaptive height, and only (re)loads an ad once the width has
/// settled — loading mid-layout (e.g. during a navigation animation) is
/// what makes creatives render scaled or cropped.
struct AdBannerView: View {
    @State private var bannerWidth: CGFloat = 0

    var body: some View {
        BannerViewContainer(width: bannerWidth)
            .frame(height: bannerHeight)
            .frame(maxWidth: .infinity)
            .onGeometryChange(for: CGFloat.self) { proxy in
                // Whole points only — sub-pixel jitter must not retrigger loads.
                floor(proxy.size.width)
            } action: { newWidth in
                bannerWidth = newWidth
            }
    }

    private var bannerHeight: CGFloat {
        guard bannerWidth > 0 else { return 0 }
        return currentOrientationAnchoredAdaptiveBanner(width: bannerWidth).size.height
    }
}

/// UIKit bridge — the Google Mobile Ads SDK has no native SwiftUI banner
/// (still true as of SDK 13.x), so we wrap BannerView ourselves.
///
/// The BannerView lives inside a plain container view, pinned by Auto Layout
/// constraints (top + centered horizontally). It keeps its intrinsic ad size
/// no matter what SwiftUI proposes, so the creative is never stretched,
/// scaled, or cut off — worst case there's a sliver of container around it.
private struct BannerViewContainer: UIViewRepresentable {
    let width: CGFloat

    func makeUIView(context: Context) -> UIView {
        let container = UIView()
        let banner = context.coordinator.banner
        banner.translatesAutoresizingMaskIntoConstraints = false
        container.addSubview(banner)
        NSLayoutConstraint.activate([
            banner.centerXAnchor.constraint(equalTo: container.centerXAnchor),
            banner.topAnchor.constraint(equalTo: container.topAnchor),
        ])
        return container
    }

    func updateUIView(_ uiView: UIView, context: Context) {
        context.coordinator.loadIfNeeded(width: width)
    }

    func makeCoordinator() -> Coordinator { Coordinator() }

    final class Coordinator: NSObject, BannerViewDelegate {
        let banner: BannerView

        private var loadedWidth: CGFloat = 0

        /// How many times the CURRENT load cycle has been retried after a
        /// failure. Reset to 0 on a successful load and on a real width
        /// change (rotation / iPad split-resize starts a fresh cycle).
        private var retryCount = 0

        /// Cap on automatic retries per width so a genuinely broken setup
        /// (bad ad unit ID, no network for minutes) doesn't retry forever.
        /// 8 attempts with the backoff below spans roughly three minutes.
        private let maxRetries = 8

        override init() {
            banner = BannerView()
            banner.adUnitID = AdConfig.bannerAdUnitID
            super.init()
            banner.delegate = self
        }

        /// Requests an ad sized for `width`, but only when the width has
        /// meaningfully changed (first settle, rotation, iPad split resize).
        func loadIfNeeded(width: CGFloat) {
            guard width > 0, abs(width - loadedWidth) > 1 else { return }
            loadedWidth = width
            retryCount = 0 // new width → fresh load cycle
            requestAd()
        }

        /// Fires the actual ad request at the current settled width. Kept
        /// separate from `loadIfNeeded(width:)` so a retry can re-request
        /// WITHOUT a width change.
        private func requestAd() {
            guard loadedWidth > 0 else { return }
            banner.adSize = currentOrientationAnchoredAdaptiveBanner(width: loadedWidth)
            banner.load(AdConfig.makeAdRequest())
        }

        // MARK: BannerViewDelegate

        func bannerViewDidReceiveAd(_ bannerView: BannerView) {
            retryCount = 0
            #if DEBUG
            print("[AdMob] Banner loaded at \(bannerView.adSize.size).")
            #endif
        }

        func bannerView(_ bannerView: BannerView, didFailToReceiveAdWithError error: Error) {
            #if DEBUG
            print("[AdMob] Banner failed to load (attempt \(retryCount + 1)): \(error.localizedDescription)")
            #endif

            // A single failed load (transient no-fill on the shared test
            // unit, a brief network drop, or a request that raced ahead of
            // MobileAds.shared.start()) would otherwise leave a permanent
            // gray box, because loadIfNeeded only fires on a width change.
            // Retry with capped exponential backoff so it self-heals.
            guard retryCount < maxRetries else {
                #if DEBUG
                print("[AdMob] Giving up after \(maxRetries) retries; will try again on the next width change.")
                #endif
                return
            }
            retryCount += 1
            // 2, 4, 8, 16, 32, then capped at 60s for the rest.
            let delaySeconds = min(Double(1 << retryCount), 60)
            DispatchQueue.main.asyncAfter(deadline: .now() + delaySeconds) { [weak self] in
                self?.requestAd()
            }
        }
    }
}

#Preview {
    VStack {
        Spacer()
        AdBannerView()
    }
}

/**
 * Minimum touch/pointer target sizes, in density-independent pixels.
 *
 * These are raw numbers rather than Tailwind class strings because React Native
 * styles need numeric `height` / `minHeight` values. Each platform's own HIG
 * sets the floor:
 *
 * - Apple (iOS, iPadOS, macOS, tvOS, visionOS): 44pt
 *   https://developer.apple.com/design/human-interface-guidelines/accessing-private-data
 * - Android (Material Design): 48dp
 *   https://m3.material.io/foundations/designing/structure#dab862b1-e042-4c40-b680-b484b9f077f6
 * - Web (WCAG 2.2 Target Size (Minimum), 2.5.8): 24px, but 44px is the
 *   widely-used AAA-friendly floor and matches Apple's, so we use it.
 */

/** React Native `Platform.OS` values, plus `'web'` for the DOM build. */
export type TouchTargetPlatform = 'ios' | 'android' | 'macos' | 'windows' | 'web';

/**
 * Minimum touch target height/width per platform, in dp/pt/px.
 *
 * iPadOS is absent on purpose: React Native's `Platform.OS` reports `'ios'` on
 * iPad, and iPadOS shares Apple's 44pt minimum anyway.
 */
const touchTargets = {
  ios: 44,
  macos: 44,
  windows: 44,
  web: 44,
  android: 48,
} as const satisfies Record<TouchTargetPlatform, number>;

/** Fallback used when the platform is unknown or not listed in `touchTargets`. */
const DEFAULT_TOUCH_TARGET = 44;

/**
 * Resolve the minimum touch target size for a platform.
 *
 * In React Native, pass `Platform.OS`:
 * ```ts
 * import { Platform } from 'react-native';
 * import { minTouchTarget } from '@sudobility/design';
 *
 * const styles = StyleSheet.create({
 *   googleButton: { height: minTouchTarget(Platform.OS) }, // 44 on iOS, 48 on Android
 * });
 * ```
 *
 * @param platform - Platform identifier; anything unrecognized falls back to 44.
 * @returns Minimum height/width in dp/pt/px.
 */
function minTouchTarget(platform?: string): number {
  if (platform && Object.prototype.hasOwnProperty.call(touchTargets, platform)) {
    return touchTargets[platform as TouchTargetPlatform];
  }
  return DEFAULT_TOUCH_TARGET;
}

/**
 * Tailwind classes enforcing the web minimum touch target (44px).
 *
 * `min-h-*`/`min-w-*` rather than `h-*`/`w-*` so a wrapping label still grows.
 */
const touchTargetClasses = {
  minHeight: 'min-h-[44px]',
  minWidth: 'min-w-[44px]',
  min: 'min-h-[44px] min-w-[44px]',
} as const;

export { touchTargets, DEFAULT_TOUCH_TARGET, minTouchTarget, touchTargetClasses };

/**
 * Theme colours as colour strings
 *
 * For places that need a colour value rather than a class: React Native
 * props (`color`, `placeholderTextColor`, `trackColor`), SVG `fill`/`stroke`
 * attributes, canvas and chart libraries.
 */

import { getActiveTheme } from './configure';
import type { ThemeTokens } from './types';

/** A colour role of the theme (`primary`, `mutedForeground`, `border`, …). */
export type ThemeColorToken = Exclude<
  keyof ThemeTokens,
  'radius' | 'borderWidth' | 'shadowSm' | 'shadowMd' | 'shadowLg' | 'fontSans' | 'fontMono'
>;

/**
 * Convert a theme token's HSL channels (`'221.2 83.2% 53.3%'`) to a colour
 * string. Uses the comma form, which React Native parses as well as browsers.
 */
export function hslTokenToCss(channels: string, alpha?: number): string {
  const parts = channels.trim().split(/\s+/).join(', ');
  return alpha === undefined ? `hsl(${parts})` : `hsla(${parts}, ${alpha})`;
}

/**
 * The colour of `token` in the active theme, for light or dark mode, as a
 * colour string — or undefined when no theme is configured or the theme
 * leaves the token out (`well` is optional), so callers can fall back.
 */
export function getThemeColor(
  token: ThemeColorToken,
  mode: 'light' | 'dark' = 'light',
  alpha?: number
): string | undefined {
  const value = getActiveTheme()?.[mode][token];
  return typeof value === 'string' ? hslTokenToCss(value, alpha) : undefined;
}

/**
 * Navy Theme
 *
 * Deep navy ground, neon violet primary and ice-cyan accent — extracted from
 * the Sanitizer marketing site (`sanity-web`), whose palette was previously
 * held as hardcoded Tailwind config colors.
 *
 * Navy is a dark-only design: `light` and `dark` carry the same tokens so the
 * theme renders identically whether or not the `.dark` class is applied.
 */

import type { ThemeDefinition, ThemeTokens } from '../types';

/**
 * The design is dark-only, so one token set serves both modes.
 *
 * Source colors, all lifted verbatim from the site:
 *   #0B1020  page ground
 *   #151B30  card surface — the site renders it at 60% over the ground, so the
 *            token holds the *solid* value and callers keep the `/60` modifier
 *   #2A3350  hairline borders
 *   #7C5CFF  brand violet
 *   #3B2E88  brand indigo, the darker stop of the CTA gradient
 *   #8FE3FF  brand cyan
 */
const NAVY: ThemeTokens = {
  background: '225.7 48.8% 8.4%', // #0B1020
  // Pure white, because body copy is a white opacity ramp (/35 through /100)
  // rather than a set of discrete greys. Keeping the channel at 100% means
  // `text-foreground/70` resolves to exactly what `text-white/70` produced.
  foreground: '0 0% 100%',
  card: '226.7 39.1% 13.5%', // #151B30
  cardForeground: '0 0% 100%',
  popover: '226.7 39.1% 13.5%',
  popoverForeground: '0 0% 100%',
  primary: '251.8 100% 68%', // #7C5CFF
  primaryForeground: '0 0% 100%',
  // The gradient's darker stop. Paired with `primary` it reproduces the CTA
  // ramp: linear-gradient(135deg, secondary 0%, primary 100%).
  secondary: '248.7 49.5% 35.7%', // #3B2E88
  secondaryForeground: '0 0% 100%',
  muted: '226.7 39.1% 13.5%',
  // white/70 composited over the page ground, so design-system components that
  // reach for `text-muted-foreground` land on the site's dominant body grey.
  mutedForeground: '230 4.3% 72.5%', // #B6B7BC
  accent: '195 100% 78%', // #8FE3FF
  accentForeground: '225.7 48.8% 8.4%',
  // The site has no error/success/warning surfaces of its own, so these four
  // are composed to match the palette rather than extracted: fully saturated,
  // high-lightness neons that sit on the navy ground like the violet and cyan
  // do. Each clears WCAG AA against `background` used as their foreground.
  destructive: '348 100% 68%', // #FF5C7C
  destructiveForeground: '225.7 48.8% 8.4%',
  success: '152 90% 62%', // #47F5A4
  successForeground: '225.7 48.8% 8.4%',
  warning: '38 100% 66%', // #FFBF52
  warningForeground: '225.7 48.8% 8.4%',
  info: '195 100% 78%', // the cyan already reads as informational on the site
  infoForeground: '225.7 48.8% 8.4%',
  border: '225.8 31.1% 23.9%', // #2A3350
  input: '225.8 31.1% 23.9%',
  ring: '251.8 100% 68%',
  // Recessed plane for code wells, one step below the ground. The site drew
  // these with `bg-black/40` over a card; #0A0D18 is what that actually
  // composited to on screen, so this is the opaque equivalent of the rendered
  // result rather than of the arithmetic (the browser's rounding through two
  // alpha layers lands a step below the naive product).
  well: '227.1 41.2% 6.7%', // #0A0D18
  wellForeground: '0 0% 100%',
  // `rounded-lg` is the only radius step the Tailwind preset derives from this
  // value; xl/2xl/3xl/full keep their stock scale, which is what the site uses.
  radius: '0.5rem',
  borderWidth: '1px',
  shadowSm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
  shadowMd: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
  shadowLg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
  fontSans: "system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif",
  fontMono: "ui-monospace, SFMono-Regular, 'SF Mono', Menlo, monospace",
};

export const navyTheme: ThemeDefinition = {
  name: 'navy',
  displayName: 'Navy',
  description: 'Deep navy ground with neon violet and ice-cyan brand accents',
  light: { ...NAVY },
  dark: { ...NAVY },
};

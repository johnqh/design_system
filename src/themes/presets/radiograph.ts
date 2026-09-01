/**
 * Radiograph Theme
 *
 * A radiographic film plate: near-black ground, warm bone type, a cool
 * exposure blue and a hot amber flare. Extracted from the raidr landing page
 * (`raidr_web`), where the palette was held as hardcoded Tailwind config colors.
 *
 * Radiograph is a dark-only design: `light` and `dark` carry the same tokens so
 * the theme renders identically whether or not the `.dark` class is applied.
 * The source page inverts individual sections rather than the whole document —
 * it swaps `foreground` and `background` for a section (bone ground, film type),
 * which needs no second token set.
 */

import type { ThemeDefinition, ThemeTokens } from '../types';

/**
 * Source colors, all lifted verbatim from the page and all round-tripping
 * exactly through these HSL channels:
 *   #080D12  film     the ground; a radiograph is a negative, so it reads dark
 *   #101820  plate    the card surface a capture sits on
 *   #18232C  shelf    one step up from the plate
 *   #E9E5DB  bone     warm off-white type
 *   #6FA8C7  exposure cool blue, used for section eyebrows and labels
 *   #F2B441  flare    hot amber, the call to action and the focus ring
 */
const RADIOGRAPH: ThemeTokens = {
  background: '210 38.5% 5.1%', // #080D12 film
  foreground: '42.9 24.1% 88.6%', // #E9E5DB bone
  card: '210 33.3% 9.4%', // #101820 plate
  cardForeground: '42.9 24.1% 88.6%',
  popover: '210 33.3% 9.4%',
  popoverForeground: '42.9 24.1% 88.6%',
  primary: '39 87.2% 60.2%', // #F2B441 flare
  primaryForeground: '210 38.5% 5.1%', // film — the CTA is dark type on amber
  secondary: '207 29.4% 13.3%', // #18232C shelf
  secondaryForeground: '42.9 24.1% 88.6%',
  muted: '207 29.4% 13.3%',
  // bone at 60% composited over the film ground, so `text-muted-foreground`
  // lands on the page's dominant secondary type color.
  mutedForeground: '60 1.8% 55.3%', // #8F8F8B
  accent: '201.1 44% 60.8%', // #6FA8C7 exposure
  accentForeground: '210 38.5% 5.1%',
  // The page has no error/success surfaces of its own, so these are composed
  // rather than extracted. They stay in the filmic register — moderate
  // saturation, never neon — and each clears WCAG AA against `background` used
  // as their foreground. `warning` and `info` reuse flare and exposure, which
  // already carry those meanings on the page.
  destructive: '4 65% 60%', // #DB6057
  destructiveForeground: '210 38.5% 5.1%',
  success: '152 35% 55%', // #64B48F
  successForeground: '210 38.5% 5.1%',
  warning: '39 87.2% 60.2%',
  warningForeground: '210 38.5% 5.1%',
  info: '201.1 44% 60.8%',
  infoForeground: '210 38.5% 5.1%',
  // Hairlines on the page are drawn as the type colour at a low alpha rather
  // than as a solid rule. This is the opaque equivalent — bone at 10% over the
  // film ground — so `border-border` and `border-foreground/10` agree.
  border: '205.7 10.1% 13.5%', // #1F2326
  input: '205.7 10.1% 13.5%',
  ring: '39 87.2% 60.2%', // flare, matching the page's focus-visible outline
  // Nothing on the page sits below the ground, so this is the ground recessed
  // one step rather than an extracted surface.
  well: '210 38.5% 2.1%', // #030507
  wellForeground: '42.9 24.1% 88.6%',
  // `rounded-sm` is the only radius the page uses and it renders at 2px; the
  // Tailwind preset derives sm as `calc(var(--radius) - 4px)`, so 0.375rem
  // reproduces it exactly.
  radius: '0.375rem',
  borderWidth: '1px',
  shadowSm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
  shadowMd: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
  shadowLg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
  fontSans: '"IBM Plex Sans", system-ui, sans-serif',
  fontMono: '"IBM Plex Mono", ui-monospace, monospace',
};

export const radiographTheme: ThemeDefinition = {
  name: 'radiograph',
  displayName: 'Radiograph',
  description: 'Radiographic film — near-black ground, bone type, exposure blue and amber flare',
  light: { ...RADIOGRAPH },
  dark: { ...RADIOGRAPH },
};

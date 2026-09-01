/**
 * Solarized Theme
 *
 * Solarized (Ethan Schoonover) — precision light & dark sharing one accent set
 * Color tokens are HSL channels (no hsl() wrapper); consumed as hsl(var(--token)).
 */

import type { ThemeDefinition } from '../types';

const SHARED_STRUCTURAL = {
  radius: '0.375rem',
  borderWidth: '1px',
  shadowSm: '0 1px 2px rgb(0 0 0 / 0.20)',
  shadowMd: '0 2px 8px rgb(0 0 0 / 0.25)',
  shadowLg: '0 8px 24px rgb(0 0 0 / 0.30)',
  fontSans:
    "ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
  fontMono: 'Menlo, ui-monospace, SFMono-Regular, monospace',
};

export const solarizedTheme: ThemeDefinition = {
  name: 'solarized',
  displayName: 'Solarized',
  description: 'Solarized (Ethan Schoonover) — precision light & dark sharing one accent set',
  light: {
    background: '43.8 86.7% 94.1%',
    foreground: '196 12.9% 45.5%',
    card: '45.6 42.4% 88.4%',
    cardForeground: '194.5 14.1% 40.2%',
    popover: '45.6 42.4% 88.4%',
    popoverForeground: '194.5 14.1% 40.2%',
    primary: '204.8 69.4% 48.6%',
    primaryForeground: '43.8 86.7% 94.1%',
    secondary: '45.6 42.4% 88.4%',
    secondaryForeground: '194.5 14.1% 40.2%',
    muted: '45.6 42.4% 88.4%',
    mutedForeground: '180 6.9% 60.4%',
    accent: '175.5 58.6% 39.8%',
    accentForeground: '43.8 86.7% 94.1%',
    destructive: '1 71.2% 52.4%',
    destructiveForeground: '43.8 86.7% 94.1%',
    success: '67.8 100% 30%',
    successForeground: '43.8 86.7% 94.1%',
    warning: '45.4 100% 35.5%',
    warningForeground: '43.8 86.7% 94.1%',
    info: '204.8 69.4% 48.6%',
    infoForeground: '43.8 86.7% 94.1%',
    border: '45.6 42.4% 88.4%',
    input: '180 6.9% 60.4%',
    ring: '204.8 69.4% 48.6%',
    well: '43.8 86.7% 91.1%',
    wellForeground: '196 12.9% 45.5%',
    ...SHARED_STRUCTURAL,
  },
  dark: {
    background: '192.2 100% 10.6%',
    foreground: '186.3 8.3% 55.1%',
    card: '192.2 80.8% 14.3%',
    cardForeground: '180 6.9% 60.4%',
    popover: '192.2 80.8% 14.3%',
    popoverForeground: '180 6.9% 60.4%',
    primary: '204.8 69.4% 48.6%',
    primaryForeground: '43.8 86.7% 94.1%',
    secondary: '192.2 80.8% 14.3%',
    secondaryForeground: '180 6.9% 60.4%',
    muted: '192.2 80.8% 14.3%',
    mutedForeground: '196 12.9% 45.5%',
    accent: '175.5 58.6% 39.8%',
    accentForeground: '192.2 100% 10.6%',
    destructive: '1 71.2% 52.4%',
    destructiveForeground: '43.8 86.7% 94.1%',
    success: '67.8 100% 30%',
    successForeground: '145.7 63.6% 4.3%',
    warning: '45.4 100% 35.5%',
    warningForeground: '46.2 100% 5.1%',
    info: '204.8 69.4% 48.6%',
    infoForeground: '43.8 86.7% 94.1%',
    border: '192.2 80.8% 14.3%',
    input: '194.5 14.1% 40.2%',
    ring: '204.8 69.4% 48.6%',
    well: '192.2 100% 7.6%',
    wellForeground: '186.3 8.3% 55.1%',
    ...SHARED_STRUCTURAL,
  },
};

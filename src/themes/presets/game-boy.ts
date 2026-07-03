/**
 * Nintendo Game Boy Theme
 *
 * Original Game Boy (DMG-01) — 4-shade green LCD, pixel grid
 * Color tokens are HSL channels (no hsl() wrapper); consumed as hsl(var(--token)).
 */

import type { ThemeDefinition } from '../types';

const SHARED_STRUCTURAL = {
  radius: '0',
  borderWidth: '2px',
  shadowSm: '1px 1px 0 0 rgb(15 56 15 / 0.6)',
  shadowMd: '2px 2px 0 0 rgb(15 56 15 / 0.6)',
  shadowLg: '4px 4px 0 0 rgb(15 56 15 / 0.6)',
  fontSans: "'Early GameBoy', 'Pixel', ui-monospace, 'Courier New', monospace",
  fontMono: "'Early GameBoy', ui-monospace, monospace",
};

export const gameBoyTheme: ThemeDefinition = {
  name: 'game-boy',
  displayName: 'Nintendo Game Boy',
  description: 'Original Game Boy (DMG-01) — 4-shade green LCD, pixel grid',
  light: {
    background: '71.4 85.2% 39.8%',
    foreground: '120 57.7% 13.9%',
    card: '72.6 84% 36.7%',
    cardForeground: '120 57.7% 13.9%',
    popover: '72.6 84% 36.7%',
    popoverForeground: '120 57.7% 13.9%',
    primary: '120 57.7% 13.9%',
    primaryForeground: '71.4 85.2% 39.8%',
    secondary: '72.6 84% 36.7%',
    secondaryForeground: '120 57.7% 13.9%',
    muted: '72.6 84% 36.7%',
    mutedForeground: '120 34.2% 28.6%',
    accent: '120 34.2% 28.6%',
    accentForeground: '71.4 85.2% 39.8%',
    destructive: '120 57.7% 13.9%',
    destructiveForeground: '71.4 85.2% 39.8%',
    success: '120 34.2% 28.6%',
    successForeground: '71.4 85.2% 39.8%',
    warning: '120 34.2% 28.6%',
    warningForeground: '71.4 85.2% 39.8%',
    info: '120 34.2% 28.6%',
    infoForeground: '71.4 85.2% 39.8%',
    border: '120 57.7% 13.9%',
    input: '120 57.7% 13.9%',
    ring: '120 34.2% 28.6%',
    ...SHARED_STRUCTURAL,
  },
  dark: {
    background: '120 57.7% 13.9%',
    foreground: '71.4 85.2% 39.8%',
    card: '120 34.2% 28.6%',
    cardForeground: '71.4 85.2% 39.8%',
    popover: '120 34.2% 28.6%',
    popoverForeground: '71.4 85.2% 39.8%',
    primary: '71.4 85.2% 39.8%',
    primaryForeground: '120 57.7% 13.9%',
    secondary: '120 34.2% 28.6%',
    secondaryForeground: '71.4 85.2% 39.8%',
    muted: '120 34.2% 28.6%',
    mutedForeground: '72.6 84% 36.7%',
    accent: '72.6 84% 36.7%',
    accentForeground: '120 57.7% 13.9%',
    destructive: '71.4 85.2% 39.8%',
    destructiveForeground: '120 57.7% 13.9%',
    success: '72.6 84% 36.7%',
    successForeground: '120 57.7% 13.9%',
    warning: '72.6 84% 36.7%',
    warningForeground: '120 57.7% 13.9%',
    info: '72.6 84% 36.7%',
    infoForeground: '120 57.7% 13.9%',
    border: '71.4 85.2% 39.8%',
    input: '72.6 84% 36.7%',
    ring: '72.6 84% 36.7%',
    ...SHARED_STRUCTURAL,
  },
};

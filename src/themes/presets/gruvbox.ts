/**
 * Gruvbox Theme
 *
 * Gruvbox — retro-warm groove palette with signature orange (light & dark)
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
  fontMono: 'Hack, ui-monospace, SFMono-Regular, monospace',
};

export const gruvboxTheme: ThemeDefinition = {
  name: 'gruvbox',
  displayName: 'Gruvbox',
  description: 'Gruvbox — retro-warm groove palette with signature orange (light & dark)',
  light: {
    background: '48.5 86.7% 88.2%',
    foreground: '20 5.3% 22.4%',
    card: '43.2 58.8% 81%',
    cardForeground: '20 5.3% 22.4%',
    popover: '43.2 58.8% 81%',
    popoverForeground: '20 5.3% 22.4%',
    primary: '19.2 96.6% 31.4%',
    primaryForeground: '48.5 86.7% 88.2%',
    secondary: '40.4 38.2% 73.3%',
    secondaryForeground: '20 5.3% 22.4%',
    muted: '43.2 58.8% 81%',
    mutedForeground: '27.5 10.7% 37.7%',
    accent: '189.6 89% 43.1%',
    accentForeground: '48.5 86.7% 14.3%',
    destructive: '357.7 100% 30.8%',
    destructiveForeground: '48.5 86.7% 88.2%',
    success: '57.2 79.3% 22.7%',
    successForeground: '48.5 86.7% 88.2%',
    warning: '36.5 80.1% 29.2%',
    warningForeground: '48.5 86.7% 88.2%',
    info: '189.6 89% 24.9%',
    infoForeground: '48.5 86.7% 88.2%',
    border: '40.4 38.2% 73.3%',
    input: '38.6 24.1% 65.9%',
    ring: '19.2 96.6% 34.9%',
    well: '48.5 86.7% 85.2%',
    wellForeground: '20 5.3% 22.4%',
    ...SHARED_STRUCTURAL,
  },
  dark: {
    background: '0 0% 15.7%',
    foreground: '43.2 58.8% 81%',
    card: '20 5.3% 22.4%',
    cardForeground: '43.2 58.8% 81%',
    popover: '20 5.3% 22.4%',
    popoverForeground: '43.2 58.8% 81%',
    primary: '27 99.1% 63%',
    primaryForeground: '0 0% 15.7%',
    secondary: '21.8 7.4% 29.2%',
    secondaryForeground: '43.2 58.8% 81%',
    muted: '20 5.3% 22.4%',
    mutedForeground: '35 17.1% 61.5%',
    accent: '157.1 15.9% 34.9%',
    accentForeground: '0 0% 86.3%',
    destructive: '6.3 96.1% 70.5%',
    destructiveForeground: '3.8 66.7% 9.4%',
    success: '61.2 66.2% 44.1%',
    successForeground: '65 75% 6.3%',
    warning: '42 95.3% 58.2%',
    warningForeground: '45.7 100% 8.2%',
    info: '157.1 15.9% 59.7%',
    infoForeground: '168 29.4% 6.7%',
    border: '21.8 7.4% 29.2%',
    input: '26.7 9.7% 36.5%',
    ring: '27 99.1% 54.7%',
    well: '180 4.3% 12.4%',
    wellForeground: '43.2 58.8% 81%',
    ...SHARED_STRUCTURAL,
  },
};

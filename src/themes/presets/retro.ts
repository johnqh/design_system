/**
 * Retro Theme
 *
 * Warm, vintage aesthetic with cream backgrounds, earthy tones,
 * and serif typography. Inspired by mid-century design, old book covers,
 * and classic print layouts. Features warm brown-tinted shadows
 * and a rust orange primary color.
 */

import type { ThemeDefinition } from '../types';

const SHARED_STRUCTURAL = {
  radius: '0.75rem',
  borderWidth: '1px',
  shadowSm: '0 1px 2px rgb(120 53 15 / 0.08)',
  shadowMd: '0 4px 8px rgb(120 53 15 / 0.12)',
  shadowLg: '0 10px 20px rgb(120 53 15 / 0.15)',
  fontSans: 'ui-serif, Georgia, Cambria, "Times New Roman", Times, serif',
  fontMono: '"Courier New", Courier, monospace',
};

export const retroTheme: ThemeDefinition = {
  name: 'retro',
  displayName: 'Retro',
  description: 'Warm, vintage aesthetic with earthy tones and serif typography',
  light: {
    background: '48 100% 96%',
    foreground: '20 14% 20%',
    card: '40 60% 97%',
    cardForeground: '20 14% 20%',
    popover: '40 60% 97%',
    popoverForeground: '20 14% 20%',
    primary: '38 92% 44%',
    primaryForeground: '48 100% 96%',
    secondary: '140 20% 90%',
    secondaryForeground: '140 15% 25%',
    muted: '40 30% 92%',
    mutedForeground: '20 10% 50%',
    accent: '140 25% 42%',
    accentForeground: '48 100% 96%',
    destructive: '0 72% 51%',
    destructiveForeground: '48 100% 96%',
    success: '140 25% 42%',
    successForeground: '48 100% 96%',
    warning: '38 92% 44%',
    warningForeground: '20 14% 20%',
    info: '210 50% 45%',
    infoForeground: '48 100% 96%',
    border: '30 25% 82%',
    input: '30 25% 82%',
    ring: '38 92% 44%',
    ...SHARED_STRUCTURAL,
  },
  dark: {
    background: '20 14% 10%',
    foreground: '40 30% 90%',
    card: '20 14% 14%',
    cardForeground: '40 30% 90%',
    popover: '20 14% 14%',
    popoverForeground: '40 30% 90%',
    primary: '38 92% 50%',
    primaryForeground: '20 14% 10%',
    secondary: '140 15% 18%',
    secondaryForeground: '40 30% 90%',
    muted: '20 10% 18%',
    mutedForeground: '30 15% 55%',
    accent: '140 25% 50%',
    accentForeground: '20 14% 10%',
    destructive: '0 72% 40%',
    destructiveForeground: '40 30% 90%',
    success: '140 25% 50%',
    successForeground: '20 14% 10%',
    warning: '38 92% 50%',
    warningForeground: '20 14% 10%',
    info: '210 50% 55%',
    infoForeground: '20 14% 10%',
    border: '20 10% 22%',
    input: '20 10% 22%',
    ring: '38 92% 50%',
    ...SHARED_STRUCTURAL,
  },
};

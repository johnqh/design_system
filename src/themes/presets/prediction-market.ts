/**
 * Prediction Market Theme
 *
 * Inspired by Polymarket, Kalshi, Manifold.
 * Light-first, data-heavy, green/red outcome colors, clean informational design.
 */

import type { ThemeDefinition } from '../types';

const SHARED_STRUCTURAL = {
  radius: '0.5rem',
  borderWidth: '1px',
  shadowSm: '0 1px 2px rgb(0 0 0 / 0.05)',
  shadowMd: '0 4px 6px -1px rgb(0 0 0 / 0.08)',
  shadowLg: '0 10px 15px -3px rgb(0 0 0 / 0.08)',
  fontSans: 'Inter, ui-sans-serif, system-ui, -apple-system, sans-serif',
  fontMono: 'JetBrains Mono, ui-monospace, SFMono-Regular, monospace',
};

export const predictionMarketTheme: ThemeDefinition = {
  name: 'prediction-market',
  displayName: 'Prediction Market',
  description: 'Data-heavy, light-first design with green/red outcome indicators',
  light: {
    background: '0 0% 100%',
    foreground: '0 0% 9%',
    card: '0 0% 100%',
    cardForeground: '0 0% 9%',
    popover: '0 0% 100%',
    popoverForeground: '0 0% 9%',
    primary: '226 100% 59%',
    primaryForeground: '0 0% 100%',
    secondary: '0 0% 96%',
    secondaryForeground: '0 0% 9%',
    muted: '0 0% 96%',
    mutedForeground: '0 0% 45%',
    accent: '0 0% 96%',
    accentForeground: '0 0% 9%',
    destructive: '0 84% 60%',
    destructiveForeground: '0 0% 100%',
    success: '142 71% 45%',
    successForeground: '0 0% 100%',
    warning: '38 92% 50%',
    warningForeground: '0 0% 0%',
    info: '226 100% 59%',
    infoForeground: '0 0% 100%',
    border: '0 0% 90%',
    input: '0 0% 90%',
    ring: '226 100% 59%',
    ...SHARED_STRUCTURAL,
  },
  dark: {
    background: '0 0% 7%',
    foreground: '0 0% 95%',
    card: '0 0% 10%',
    cardForeground: '0 0% 95%',
    popover: '0 0% 10%',
    popoverForeground: '0 0% 95%',
    primary: '226 100% 64%',
    primaryForeground: '0 0% 100%',
    secondary: '0 0% 14%',
    secondaryForeground: '0 0% 95%',
    muted: '0 0% 14%',
    mutedForeground: '0 0% 55%',
    accent: '0 0% 14%',
    accentForeground: '0 0% 95%',
    destructive: '0 62.8% 30.6%',
    destructiveForeground: '0 0% 95%',
    success: '142 71% 45%',
    successForeground: '0 0% 100%',
    warning: '38 92% 50%',
    warningForeground: '0 0% 0%',
    info: '226 100% 64%',
    infoForeground: '0 0% 100%',
    border: '0 0% 16%',
    input: '0 0% 16%',
    ring: '226 100% 64%',
    ...SHARED_STRUCTURAL,
  },
  classOverrides: {
    button: {
      base: 'font-semibold',
    },
    badge: {
      base: 'font-semibold [font-variant-numeric:tabular-nums]',
    },
  },
};

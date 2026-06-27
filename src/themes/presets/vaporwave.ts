/**
 * Vaporwave Theme
 *
 * Retro-futuristic aesthetic with pastel pink, teal, and purple tones.
 * Inspired by 80s/90s nostalgia, early internet culture, and Japanese city pop.
 * Features soft gradients, gentle rounding, and purple-tinted shadows.
 */

import type { ThemeDefinition } from '../types';

const SHARED_STRUCTURAL = {
  radius: '0.75rem',
  borderWidth: '1px',
  shadowSm: '0 1px 3px rgb(139 92 246 / 0.1)',
  shadowMd: '0 4px 12px rgb(139 92 246 / 0.15)',
  shadowLg: '0 10px 30px rgb(139 92 246 / 0.2)',
  fontSans: 'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, sans-serif',
  fontMono: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
};

export const vaporwaveTheme: ThemeDefinition = {
  name: 'vaporwave',
  displayName: 'Vaporwave',
  description: 'Retro-futuristic pastel aesthetic with pink, teal, and purple tones',
  light: {
    background: '320 30% 97%',
    foreground: '270 50% 15%',
    card: '300 25% 98%',
    cardForeground: '270 50% 15%',
    popover: '300 25% 98%',
    popoverForeground: '270 50% 15%',
    primary: '298 90% 64%',
    primaryForeground: '0 0% 100%',
    secondary: '320 20% 93%',
    secondaryForeground: '270 30% 30%',
    muted: '320 20% 93%',
    mutedForeground: '270 15% 50%',
    accent: '173 80% 40%',
    accentForeground: '0 0% 100%',
    destructive: '340 82% 52%',
    destructiveForeground: '0 0% 100%',
    success: '173 80% 40%',
    successForeground: '0 0% 100%',
    warning: '38 92% 50%',
    warningForeground: '270 50% 15%',
    info: '298 90% 64%',
    infoForeground: '0 0% 100%',
    border: '300 20% 88%',
    input: '300 20% 88%',
    ring: '298 90% 64%',
    ...SHARED_STRUCTURAL,
  },
  dark: {
    background: '270 50% 8%',
    foreground: '300 20% 92%',
    card: '270 45% 12%',
    cardForeground: '300 20% 92%',
    popover: '270 45% 12%',
    popoverForeground: '300 20% 92%',
    primary: '298 90% 70%',
    primaryForeground: '270 50% 8%',
    secondary: '270 30% 18%',
    secondaryForeground: '300 20% 92%',
    muted: '270 30% 18%',
    mutedForeground: '270 15% 55%',
    accent: '173 80% 50%',
    accentForeground: '270 50% 8%',
    destructive: '340 82% 45%',
    destructiveForeground: '300 20% 92%',
    success: '173 80% 50%',
    successForeground: '270 50% 8%',
    warning: '38 92% 50%',
    warningForeground: '270 50% 8%',
    info: '298 90% 70%',
    infoForeground: '270 50% 8%',
    border: '270 30% 20%',
    input: '270 30% 20%',
    ring: '298 90% 70%',
    ...SHARED_STRUCTURAL,
  },
  classOverrides: {
    button: {
      base: 'bg-gradient-to-r hover:opacity-90',
    },
  },
};

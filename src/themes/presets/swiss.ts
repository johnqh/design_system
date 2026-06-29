/**
 * Swiss Theme
 *
 * Swiss/International typography style — precise, grid-based, Helvetica.
 * Pure black and white with red primary. No decorative elements.
 */

import type { ThemeDefinition } from '../types';

const SHARED_STRUCTURAL = {
  radius: '0',
  borderWidth: '1px',
  shadowSm: 'none',
  shadowMd: 'none',
  shadowLg: 'none',
  fontSans: 'Helvetica Neue, Helvetica, Arial, sans-serif',
  fontMono: 'SF Mono, Menlo, Monaco, monospace',
};

export const swissTheme: ThemeDefinition = {
  name: 'swiss',
  displayName: 'Swiss',
  description: 'Swiss/International typography style with precise, minimal design',
  light: {
    background: '0 0% 100%',
    foreground: '0 0% 0%',
    card: '0 0% 100%',
    cardForeground: '0 0% 0%',
    popover: '0 0% 100%',
    popoverForeground: '0 0% 0%',
    primary: '0 84% 50%',
    primaryForeground: '0 0% 100%',
    secondary: '0 0% 96%',
    secondaryForeground: '0 0% 0%',
    muted: '0 0% 96%',
    mutedForeground: '0 0% 45%',
    accent: '0 0% 96%',
    accentForeground: '0 0% 0%',
    destructive: '0 84% 50%',
    destructiveForeground: '0 0% 100%',
    success: '142 76% 36%',
    successForeground: '0 0% 100%',
    warning: '38 92% 50%',
    warningForeground: '0 0% 0%',
    info: '0 0% 0%',
    infoForeground: '0 0% 100%',
    border: '0 0% 80%',
    input: '0 0% 80%',
    ring: '0 84% 50%',
    ...SHARED_STRUCTURAL,
  },
  dark: {
    background: '0 0% 0%',
    foreground: '0 0% 100%',
    card: '0 0% 6%',
    cardForeground: '0 0% 100%',
    popover: '0 0% 6%',
    popoverForeground: '0 0% 100%',
    primary: '0 84% 50%',
    primaryForeground: '0 0% 100%',
    secondary: '0 0% 12%',
    secondaryForeground: '0 0% 100%',
    muted: '0 0% 12%',
    mutedForeground: '0 0% 60%',
    accent: '0 0% 12%',
    accentForeground: '0 0% 100%',
    destructive: '0 84% 50%',
    destructiveForeground: '0 0% 100%',
    success: '142 76% 36%',
    successForeground: '0 0% 100%',
    warning: '38 92% 50%',
    warningForeground: '0 0% 0%',
    info: '0 0% 100%',
    infoForeground: '0 0% 0%',
    border: '0 0% 20%',
    input: '0 0% 20%',
    ring: '0 84% 50%',
    ...SHARED_STRUCTURAL,
  },
  classOverrides: {
    button: {
      base: 'font-medium uppercase tracking-[0.2em]',
    },
    card: {
      base: 'border shadow-none',
    },
    input: {
      base: 'rounded-none shadow-none uppercase tracking-[0.08em]',
    },
    badge: {
      base: 'rounded-none uppercase tracking-[0.16em] text-[0.68rem]',
    },
    alert: {
      base: 'rounded-none border-l-4 border-l-primary shadow-none',
    },
  },
};

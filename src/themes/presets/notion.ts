/**
 * Notion Theme
 *
 * Notion-like — warm, content-focused, minimal chrome.
 * Warm tones, thin borders, system fonts, barely-visible shadows.
 */

import type { ThemeDefinition } from '../types';

const SHARED_STRUCTURAL = {
  radius: '0.375rem',
  borderWidth: '1px',
  shadowSm: '0 1px 2px rgb(0 0 0 / 0.04)',
  shadowMd: '0 2px 4px rgb(0 0 0 / 0.06)',
  shadowLg: '0 4px 8px rgb(0 0 0 / 0.08)',
  fontSans: 'ui-sans-serif, -apple-system, BlinkMacSystemFont, sans-serif',
  fontMono: 'SFMono-Regular, Menlo, Consolas, monospace',
};

export const notionTheme: ThemeDefinition = {
  name: 'notion',
  displayName: 'Notion',
  description: 'Warm, content-focused design with minimal chrome',
  light: {
    background: '0 0% 100%',
    foreground: '24 10% 10%',
    card: '0 0% 100%',
    cardForeground: '24 10% 10%',
    popover: '0 0% 100%',
    popoverForeground: '24 10% 10%',
    primary: '213 62% 48%',
    primaryForeground: '0 0% 100%',
    secondary: '40 20% 95%',
    secondaryForeground: '24 10% 20%',
    muted: '40 29% 96%',
    mutedForeground: '24 5% 45%',
    accent: '40 29% 96%',
    accentForeground: '24 10% 20%',
    destructive: '0 84% 60%',
    destructiveForeground: '0 0% 100%',
    success: '142 71% 45%',
    successForeground: '0 0% 100%',
    warning: '38 92% 50%',
    warningForeground: '24 10% 10%',
    info: '213 62% 48%',
    infoForeground: '0 0% 100%',
    border: '30 10% 90%',
    input: '30 10% 90%',
    ring: '213 62% 48%',
    ...SHARED_STRUCTURAL,
  },
  dark: {
    background: '24 8% 12%',
    foreground: '30 15% 90%',
    card: '24 8% 15%',
    cardForeground: '30 15% 90%',
    popover: '24 8% 15%',
    popoverForeground: '30 15% 90%',
    primary: '213 58% 60%',
    primaryForeground: '0 0% 100%',
    secondary: '24 8% 20%',
    secondaryForeground: '30 15% 85%',
    muted: '24 8% 20%',
    mutedForeground: '30 10% 55%',
    accent: '24 10% 22%',
    accentForeground: '30 15% 85%',
    destructive: '0 63% 31%',
    destructiveForeground: '0 0% 100%',
    success: '142 71% 45%',
    successForeground: '0 0% 100%',
    warning: '38 92% 50%',
    warningForeground: '0 0% 0%',
    info: '213 58% 60%',
    infoForeground: '0 0% 100%',
    border: '24 8% 22%',
    input: '24 8% 22%',
    ring: '213 58% 60%',
    ...SHARED_STRUCTURAL,
  },
  classOverrides: {
    card: {
      base: 'border border-border/50',
    },
  },
};

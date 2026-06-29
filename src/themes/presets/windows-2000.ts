/**
 * Windows 2000 Theme
 *
 * Late-classic Windows interface with soft gray chrome, navy selection tones,
 * Tahoma-era typography, and raised/sunken controls.
 */

import type { ThemeDefinition } from '../types';

const SHARED_STRUCTURAL = {
  radius: '0',
  borderWidth: '1px',
  shadowSm: 'none',
  shadowMd: 'none',
  shadowLg: 'none',
  fontSans: 'Tahoma, Verdana, "MS Sans Serif", Arial, sans-serif',
  fontMono: '"Lucida Console", "Courier New", monospace',
};

export const windows2000Theme: ThemeDefinition = {
  name: 'windows-2000',
  displayName: 'Windows 2000',
  description: 'Windows 2000 style with beveled 3D controls and business-gray chrome',
  light: {
    background: '210 17% 84%',
    foreground: '210 10% 12%',
    card: '210 14% 87%',
    cardForeground: '210 10% 12%',
    popover: '210 14% 87%',
    popoverForeground: '210 10% 12%',
    primary: '214 74% 40%',
    primaryForeground: '0 0% 100%',
    secondary: '210 12% 92%',
    secondaryForeground: '210 10% 12%',
    muted: '210 12% 80%',
    mutedForeground: '210 10% 35%',
    accent: '214 74% 40%',
    accentForeground: '0 0% 100%',
    destructive: '0 70% 47%',
    destructiveForeground: '0 0% 100%',
    success: '130 50% 38%',
    successForeground: '0 0% 100%',
    warning: '42 100% 50%',
    warningForeground: '0 0% 0%',
    info: '214 74% 40%',
    infoForeground: '0 0% 100%',
    border: '210 7% 47%',
    input: '210 7% 47%',
    ring: '214 74% 40%',
    ...SHARED_STRUCTURAL,
  },
  dark: {
    background: '214 13% 24%',
    foreground: '210 18% 92%',
    card: '214 12% 28%',
    cardForeground: '210 18% 92%',
    popover: '214 12% 28%',
    popoverForeground: '210 18% 92%',
    primary: '214 68% 52%',
    primaryForeground: '0 0% 100%',
    secondary: '214 10% 36%',
    secondaryForeground: '210 18% 92%',
    muted: '214 10% 30%',
    mutedForeground: '210 10% 72%',
    accent: '214 68% 52%',
    accentForeground: '0 0% 100%',
    destructive: '0 62% 52%',
    destructiveForeground: '0 0% 100%',
    success: '130 45% 45%',
    successForeground: '0 0% 100%',
    warning: '42 100% 58%',
    warningForeground: '0 0% 0%',
    info: '214 68% 52%',
    infoForeground: '0 0% 100%',
    border: '214 10% 52%',
    input: '214 10% 52%',
    ring: '214 68% 52%',
    ...SHARED_STRUCTURAL,
  },
  classOverrides: {
    button: {
      base: 'rounded-none border border-[hsl(var(--border))] bg-secondary text-secondary-foreground font-medium shadow-[inset_1px_1px_0_hsl(0_0%_100%/_0.9),inset_-1px_-1px_0_hsl(210_10%_42%/_0.95)] active:shadow-[inset_1px_1px_0_hsl(210_10%_42%/_0.95),inset_-1px_-1px_0_hsl(0_0%_100%/_0.9)] active:bg-muted',
    },
    card: {
      base: 'rounded-none border border-[hsl(var(--border))] bg-card shadow-[inset_1px_1px_0_hsl(0_0%_100%/_0.6),inset_-1px_-1px_0_hsl(210_10%_42%/_0.85)]',
    },
    input: {
      base: 'rounded-none border border-[hsl(var(--border))] bg-white text-black shadow-[inset_1px_1px_0_hsl(210_10%_42%/_0.8),inset_-1px_-1px_0_hsl(0_0%_100%/_0.85)] focus:ring-0',
    },
    badge: {
      base: 'rounded-none border border-[hsl(var(--border))] bg-secondary px-2 shadow-[inset_1px_1px_0_hsl(0_0%_100%/_0.6),inset_-1px_-1px_0_hsl(210_10%_42%/_0.85)]',
    },
    alert: {
      base: 'rounded-none border border-[hsl(var(--border))] bg-card shadow-[inset_1px_1px_0_hsl(0_0%_100%/_0.6),inset_-1px_-1px_0_hsl(210_10%_42%/_0.85)]',
    },
  },
};

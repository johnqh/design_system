/**
 * Gaming / Esports Theme
 *
 * Inspired by Steam, Discord, Twitch, Epic Games.
 * Dark, immersive, bold colors, sharp corners, glow effects.
 */

import type { ThemeDefinition } from '../types';

const SHARED_STRUCTURAL = {
  radius: '0.25rem',
  borderWidth: '1px',
  shadowSm: '0 1px 2px rgb(0 0 0 / 0.2)',
  shadowMd: '0 4px 12px rgb(0 0 0 / 0.3)',
  shadowLg: '0 0 20px hsl(var(--primary) / 0.3)',
  fontSans: 'Poppins, ui-sans-serif, system-ui, -apple-system, sans-serif',
  fontMono: 'JetBrains Mono, ui-monospace, SFMono-Regular, monospace',
};

export const gamingTheme: ThemeDefinition = {
  name: 'gaming',
  displayName: 'Gaming',
  description: 'Bold, immersive dark design with glow effects and sharp corners',
  light: {
    background: '0 0% 96%',
    foreground: '210 10% 15%',
    card: '0 0% 100%',
    cardForeground: '210 10% 15%',
    popover: '0 0% 100%',
    popoverForeground: '210 10% 15%',
    primary: '276 100% 64%',
    primaryForeground: '0 0% 100%',
    secondary: '220 13% 91%',
    secondaryForeground: '210 10% 15%',
    muted: '220 13% 91%',
    mutedForeground: '220 9% 46%',
    accent: '231 84% 65%',
    accentForeground: '0 0% 100%',
    destructive: '0 84% 60%',
    destructiveForeground: '0 0% 100%',
    success: '142 71% 45%',
    successForeground: '0 0% 100%',
    warning: '38 92% 50%',
    warningForeground: '0 0% 0%',
    info: '231 84% 65%',
    infoForeground: '0 0% 100%',
    border: '220 13% 87%',
    input: '220 13% 87%',
    ring: '276 100% 64%',
    ...SHARED_STRUCTURAL,
  },
  dark: {
    background: '210 10% 15%',
    foreground: '0 0% 95%',
    card: '220 13% 18%',
    cardForeground: '0 0% 95%',
    popover: '220 13% 18%',
    popoverForeground: '0 0% 95%',
    primary: '276 100% 64%',
    primaryForeground: '0 0% 100%',
    secondary: '220 13% 22%',
    secondaryForeground: '0 0% 95%',
    muted: '220 13% 22%',
    mutedForeground: '220 9% 55%',
    accent: '231 84% 65%',
    accentForeground: '0 0% 100%',
    destructive: '0 62.8% 30.6%',
    destructiveForeground: '0 0% 95%',
    success: '142 71% 45%',
    successForeground: '0 0% 100%',
    warning: '38 92% 50%',
    warningForeground: '0 0% 0%',
    info: '231 84% 65%',
    infoForeground: '0 0% 100%',
    border: '220 13% 24%',
    input: '220 13% 24%',
    ring: '276 100% 64%',
    ...SHARED_STRUCTURAL,
  },
  classOverrides: {
    button: {
      base: 'font-bold uppercase tracking-wide shadow-[0_0_15px_hsl(var(--primary)/0.4)] hover:shadow-[0_0_25px_hsl(var(--primary)/0.6)] hover:scale-105 transition-all',
    },
    card: {
      base: 'hover:shadow-[0_0_20px_hsl(var(--primary)/0.3)] transition-shadow',
    },
    badge: {
      base: 'font-bold uppercase text-[0.7rem] tracking-wide',
    },
  },
};

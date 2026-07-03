/**
 * Theme System
 *
 * Provides multi-style support for the design system.
 *
 * Usage:
 * 1. Import a theme CSS file in your app's global styles (sets CSS custom properties)
 * 2. Call configureTheme() at startup for themes with class overrides
 *
 * ```ts
 * import { configureTheme, cyberpunk, generateThemeCSS } from '@sudobility/design/themes';
 *
 * // Option A: Generate CSS and inject it
 * const css = generateThemeCSS(cyberpunk);
 *
 * // Option B: Import pre-built CSS file
 * // import '@sudobility/design/themes/cyberpunk.css';
 *
 * // Enable class overrides (for structural differences)
 * configureTheme(cyberpunk);
 * ```
 */

// Types
export type { ThemeTokens, ThemeDefinition, ThemeClassOverrides, ThemeName } from './types';

// Configuration
export { configureTheme, getActiveTheme, getActiveThemeName, getClassOverride } from './configure';

// CSS Generation
export { generateThemeCSS } from './css-generator';

// Tailwind Presets
export { createTailwindPreset, createNativeWindPreset } from './tailwind-preset';

// Theme Presets
export { defaultTheme } from './presets/default';
export { neoBrutalismTheme } from './presets/neo-brutalism';
export { glassmorphismTheme } from './presets/glassmorphism';
export { cyberpunkTheme } from './presets/cyberpunk';
export { vaporwaveTheme } from './presets/vaporwave';
export { retroTheme } from './presets/retro';
export { y2kTheme } from './presets/y2k';
export { swissTheme } from './presets/swiss';
export { linearTheme } from './presets/linear';
export { notionTheme } from './presets/notion';

export { web3Theme } from './presets/web3';
export { gamingTheme } from './presets/gaming';
export { defiTheme } from './presets/defi';
export { predictionMarketTheme } from './presets/prediction-market';
export { gamblingTheme } from './presets/gambling';
export { terminalTheme } from './presets/terminal';
export { windows31Theme } from './presets/windows-3-1';
export { windows2000Theme } from './presets/windows-2000';

// Real-world design system presets
export { materialTheme } from './presets/material';
export { fluentTheme } from './presets/fluent';
export { carbonTheme } from './presets/carbon';
export { polarisTheme } from './presets/polaris';
export { primerTheme } from './presets/primer';
export { atlassianTheme } from './presets/atlassian';
export { spectrumTheme } from './presets/spectrum';
export { baseWebTheme } from './presets/base-web';
export { lightningTheme } from './presets/lightning';
export { antDesignTheme } from './presets/ant-design';
export { astryxTheme } from './presets/astryx';
export { appleTheme } from './presets/apple';
export { govukTheme } from './presets/govuk';
export { uswdsTheme } from './presets/uswds';

// Retro computer design systems
export { classicMacTheme } from './presets/classic-mac';
export { commodore64Theme } from './presets/commodore-64';
export { gameBoyTheme } from './presets/game-boy';
export { amigaTheme } from './presets/amiga';
export { nextstepTheme } from './presets/nextstep';

// Game console design systems
export { playstationTheme } from './presets/playstation';
export { xboxTheme } from './presets/xbox';
export { nintendoTheme } from './presets/nintendo';
export { steamTheme } from './presets/steam';

// Color-scheme design systems
export { nordTheme } from './presets/nord';
export { draculaTheme } from './presets/dracula';
export { solarizedTheme } from './presets/solarized';
export { catppuccinTheme } from './presets/catppuccin';
export { gruvboxTheme } from './presets/gruvbox';

// All themes as a record for iteration
export { themes } from './registry';

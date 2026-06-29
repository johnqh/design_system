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

// All themes as a record for iteration
export { themes } from './registry';

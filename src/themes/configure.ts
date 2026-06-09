/**
 * Theme Configuration
 *
 * Module-level state for the active theme. Call `configureTheme()` once
 * at app startup (before rendering) to activate a theme's class overrides.
 *
 * CSS custom properties are handled separately via theme CSS files.
 * This module only manages the JS-level class overrides for structural
 * differences that can't be expressed with CSS vars alone.
 */

import type { ThemeDefinition, ThemeClassOverrides } from './types';

let activeTheme: ThemeDefinition | null = null;
let isNative = false;

/**
 * Set the active theme. Call once at app startup before any component renders.
 * This enables class overrides for themes with structural differences
 * (e.g., neo-brutalism thick borders, glassmorphism backdrop-blur).
 */
export function configureTheme(theme: ThemeDefinition, options?: { native?: boolean }): void {
  activeTheme = theme;
  isNative = options?.native ?? false;
}

/** Get the currently active theme, or null if none configured. */
export function getActiveTheme(): ThemeDefinition | null {
  return activeTheme;
}

/** Get the active theme's name, or 'default' if none configured. */
export function getActiveThemeName(): string {
  return activeTheme?.name ?? 'default';
}

/**
 * Get a class override for a component from the active theme.
 * Returns undefined if no theme is configured or no override exists.
 */
export function getClassOverride(
  component: keyof ThemeClassOverrides,
  key: string
): string | undefined {
  if (!activeTheme) return undefined;
  const overrides = isNative ? activeTheme.nativeClassOverrides : activeTheme.classOverrides;
  if (!overrides) return undefined;
  const componentOverrides = overrides[component];
  if (!componentOverrides) return undefined;
  return (componentOverrides as Record<string, string | undefined>)[key];
}

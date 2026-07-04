/**
 * CSS Generator
 *
 * Generates CSS custom property declarations from a ThemeDefinition.
 * Output is a complete CSS block with :root (light) and .dark selectors.
 */

import type { ThemeDefinition, ThemeTokens } from './types';

function tokenToCSS(tokens: ThemeTokens): string {
  return [
    `  --background: ${tokens.background};`,
    `  --foreground: ${tokens.foreground};`,
    `  --card: ${tokens.card};`,
    `  --card-foreground: ${tokens.cardForeground};`,
    `  --popover: ${tokens.popover};`,
    `  --popover-foreground: ${tokens.popoverForeground};`,
    `  --primary: ${tokens.primary};`,
    `  --primary-foreground: ${tokens.primaryForeground};`,
    `  --secondary: ${tokens.secondary};`,
    `  --secondary-foreground: ${tokens.secondaryForeground};`,
    `  --muted: ${tokens.muted};`,
    `  --muted-foreground: ${tokens.mutedForeground};`,
    `  --accent: ${tokens.accent};`,
    `  --accent-foreground: ${tokens.accentForeground};`,
    `  --destructive: ${tokens.destructive};`,
    `  --destructive-foreground: ${tokens.destructiveForeground};`,
    `  --success: ${tokens.success};`,
    `  --success-foreground: ${tokens.successForeground};`,
    `  --warning: ${tokens.warning};`,
    `  --warning-foreground: ${tokens.warningForeground};`,
    `  --info: ${tokens.info};`,
    `  --info-foreground: ${tokens.infoForeground};`,
    `  --border: ${tokens.border};`,
    `  --input: ${tokens.input};`,
    `  --ring: ${tokens.ring};`,
    `  --radius: ${tokens.radius};`,
    `  --border-width: ${tokens.borderWidth};`,
    `  --shadow-sm: ${tokens.shadowSm};`,
    `  --shadow-md: ${tokens.shadowMd};`,
    `  --shadow-lg: ${tokens.shadowLg};`,
    `  --font-sans: ${tokens.fontSans};`,
    `  --font-mono: ${tokens.fontMono};`,
  ].join('\n');
}

/**
 * Base element styling owned by the design system so every consuming app gets a
 * themed base surface without redefining it locally. The body follows the active
 * theme's semantic tokens (background/foreground/font), and the values flip with
 * light/dark because --background etc. are redefined under .dark above.
 */
const BASE_CSS = `body {
  background-color: hsl(var(--background));
  color: hsl(var(--foreground));
  font-family: var(--font-sans);
}`;

/**
 * Generate a complete CSS block from a theme definition.
 * Includes :root (light mode), .dark selectors, and the base body surface.
 */
export function generateThemeCSS(theme: ThemeDefinition): string {
  return `:root {\n${tokenToCSS(theme.light)}\n}\n\n.dark {\n${tokenToCSS(theme.dark)}\n}\n\n${BASE_CSS}\n`;
}

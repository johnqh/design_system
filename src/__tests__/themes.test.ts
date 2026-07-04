/**
 * Theme system coverage: presets, registry, css-generator, tailwind-preset, configure.
 *
 * NOTE: configureTheme() mutates module-level state. Vitest isolates modules per
 * test file, so this file owns that state. The null-state assertions run first,
 * before any configureTheme() call.
 */
import { describe, it, expect } from 'vitest';
import {
  themes,
  generateThemeCSS,
  createTailwindPreset,
  createNativeWindPreset,
  configureTheme,
  getActiveTheme,
  getActiveThemeName,
  getClassOverride,
  defaultTheme,
  neoBrutalismTheme,
  glassmorphismTheme,
  type ThemeName,
  type ThemeTokens,
} from '../themes';

const TOKEN_KEYS: (keyof ThemeTokens)[] = [
  'background',
  'foreground',
  'card',
  'cardForeground',
  'popover',
  'popoverForeground',
  'primary',
  'primaryForeground',
  'secondary',
  'secondaryForeground',
  'muted',
  'mutedForeground',
  'accent',
  'accentForeground',
  'destructive',
  'destructiveForeground',
  'success',
  'successForeground',
  'warning',
  'warningForeground',
  'info',
  'infoForeground',
  'border',
  'input',
  'ring',
  'radius',
  'borderWidth',
  'shadowSm',
  'shadowMd',
  'shadowLg',
  'fontSans',
  'fontMono',
];

const themeEntries = Object.entries(themes) as [ThemeName, (typeof themes)[ThemeName]][];

describe('theme registry & presets', () => {
  it('registers every theme with a matching name', () => {
    expect(themeEntries.length).toBeGreaterThanOrEqual(32);
    for (const [key, theme] of themeEntries) {
      expect(theme.name).toBe(key);
      expect(theme.displayName.length).toBeGreaterThan(0);
    }
  });

  it('every preset defines all light & dark tokens', () => {
    for (const [, theme] of themeEntries) {
      for (const mode of ['light', 'dark'] as const) {
        for (const k of TOKEN_KEYS) {
          expect(theme[mode][k], `${theme.name}.${mode}.${k}`).toBeDefined();
          expect(typeof theme[mode][k]).toBe('string');
        }
      }
    }
  });

  it('generates CSS with :root and .dark blocks for every theme', () => {
    for (const [, theme] of themeEntries) {
      const css = generateThemeCSS(theme);
      expect(css).toContain(':root {');
      expect(css).toContain('.dark {');
      expect(css).toContain('--primary:');
      expect(css).toContain('--font-sans:');
      // Base body surface is owned by the design system so apps inherit it.
      expect(css).toContain('body {');
      expect(css).toContain('background-color: hsl(var(--background));');
      expect(css).toContain('color: hsl(var(--foreground));');
    }
  });

  it('builds Tailwind + NativeWind presets for every theme', () => {
    for (const [, theme] of themeEntries) {
      const tw = createTailwindPreset(theme);
      expect(tw.theme.extend.colors.primary.DEFAULT).toContain('var(--primary)');
      const nw = createNativeWindPreset(theme);
      expect(nw.theme.extend.colors.primary.DEFAULT).toContain('hsl(');
      expect(nw.theme.extend.colors.primary.DEFAULT).toContain(theme.light.primary);
    }
  });

  it('createTailwindPreset works with no argument', () => {
    const tw = createTailwindPreset();
    expect(tw.theme.extend.colors.background).toContain('var(--background)');
  });
});

describe('configureTheme / getActiveTheme / getClassOverride', () => {
  it('reports no active theme before configuration', () => {
    expect(getActiveTheme()).toBeNull();
    expect(getActiveThemeName()).toBe('default');
    expect(getClassOverride('button', 'base')).toBeUndefined();
  });

  it('activates a theme and exposes its class overrides', () => {
    configureTheme(neoBrutalismTheme);
    expect(getActiveTheme()).toBe(neoBrutalismTheme);
    expect(getActiveThemeName()).toBe('neo-brutalism');
    // neo-brutalism overrides button/card/input...
    expect(getClassOverride('button', 'base')).toBeTruthy();
    // ...but not badge
    expect(getClassOverride('badge', 'base')).toBeUndefined();
  });

  it('returns undefined for a theme without any overrides', () => {
    configureTheme(defaultTheme);
    expect(getClassOverride('button', 'base')).toBeUndefined();
    expect(getClassOverride('card', 'base')).toBeUndefined();
  });

  it('uses nativeClassOverrides when native option is set', () => {
    configureTheme(glassmorphismTheme, { native: true });
    // glassmorphism defines nativeClassOverrides for card
    expect(getClassOverride('card', 'base')).toBeTruthy();
    // web override present too but native path returns the native variant
    configureTheme(glassmorphismTheme, { native: false });
    expect(getClassOverride('card', 'base')).toContain('backdrop-blur');
  });
});

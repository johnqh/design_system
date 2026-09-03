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
  navyTheme,
  radiographTheme,
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

describe('well (recessed surface) role', () => {
  // `well` is optional on ThemeTokens so themes authored before the role
  // existed stay valid, but every preset shipped here is expected to define it
  // deliberately rather than lean on the fallback.
  it('every preset defines a recessed well in both modes', () => {
    for (const [, theme] of themeEntries) {
      for (const mode of ['light', 'dark'] as const) {
        expect(theme[mode].well, `${theme.name}.${mode}.well`).toBeDefined();
        expect(theme[mode].wellForeground, `${theme.name}.${mode}.wellForeground`).toBeDefined();
      }
    }
  });

  it('reads as a distinct plane from the page background', () => {
    const lightness = (hsl: string) => Number(hsl.split(' ')[2].replace('%', ''));
    for (const [, theme] of themeEntries) {
      for (const mode of ['light', 'dark'] as const) {
        const delta = lightness(theme[mode].well!) - lightness(theme[mode].background);
        // Direction is not fixed: a ground already at pure black can only be
        // lifted, so what matters is that the plane is separable at all.
        expect(Math.abs(delta), `${theme.name}.${mode} well vs background`).toBeGreaterThanOrEqual(
          1.5
        );
        expect(lightness(theme[mode].well!)).toBeGreaterThanOrEqual(0);
        expect(lightness(theme[mode].well!)).toBeLessThanOrEqual(100);
      }
    }
  });

  it('emits well custom properties for every theme', () => {
    for (const [, theme] of themeEntries) {
      const css = generateThemeCSS(theme);
      expect(css).toContain(`--well: ${theme.light.well};`);
      expect(css).toContain(`--well-foreground: ${theme.light.wellForeground};`);
    }
  });

  it('falls back to the page background when a theme omits well', () => {
    // A theme authored before the role existed: the keys are absent entirely,
    // not set to undefined.
    const strip = (t: ThemeTokens): ThemeTokens => {
      const copy = { ...t };
      delete copy.well;
      delete copy.wellForeground;
      return copy;
    };
    const legacy = {
      ...defaultTheme,
      light: strip(defaultTheme.light),
      dark: strip(defaultTheme.dark),
    };
    const css = generateThemeCSS(legacy);
    expect(css).toContain(`--well: ${defaultTheme.light.background};`);
    expect(css).toContain(`--well-foreground: ${defaultTheme.light.foreground};`);

    const nw = createNativeWindPreset(legacy);
    expect(nw.theme.extend.colors.well.DEFAULT).toContain(defaultTheme.light.background);
  });

  it('exposes well through both Tailwind projections', () => {
    expect(createTailwindPreset().theme.extend.colors.well.DEFAULT).toBe(
      'hsl(var(--well) / <alpha-value>)'
    );
    const nw = createNativeWindPreset(navyTheme);
    expect(nw.theme.extend.colors.well.DEFAULT).toContain(navyTheme.light.well!);
  });
});

describe('radiograph preset', () => {
  it('is dark-only: light and dark carry identical tokens', () => {
    expect(radiographTheme.light).toEqual(radiographTheme.dark);
  });

  it('keeps the source palette intact', () => {
    const t = radiographTheme.light;
    expect(t.background).toBe('210 38.5% 5.1%'); // #080D12 film
    expect(t.foreground).toBe('42.9 24.1% 88.6%'); // #E9E5DB bone
    expect(t.card).toBe('210 33.3% 9.4%'); // #101820 plate
    expect(t.muted).toBe('207 29.4% 13.3%'); // #18232C shelf
    expect(t.primary).toBe('39 87.2% 60.2%'); // #F2B441 flare
    expect(t.accent).toBe('201.1 44% 60.8%'); // #6FA8C7 exposure
  });

  it('reproduces rounded-sm at the 2px the page renders', () => {
    // The preset derives sm as calc(var(--radius) - 4px); 0.375rem is 6px.
    expect(radiographTheme.light.radius).toBe('0.375rem');
    expect(radiographTheme.light.borderWidth).toBe('1px');
  });

  it('ties the focus ring to flare, as the page does', () => {
    expect(radiographTheme.light.ring).toBe(radiographTheme.light.primary);
  });

  it('inverted sections work by swapping foreground and background', () => {
    // The page flips individual sections rather than the document, so the two
    // roles have to be a legible pair in both directions.
    const t = radiographTheme.light;
    expect(t.primaryForeground).toBe(t.background);
    expect(t.accentForeground).toBe(t.background);
    expect(t.cardForeground).toBe(t.foreground);
  });
});

describe('navy preset', () => {
  it('is dark-only: light and dark carry identical tokens', () => {
    expect(navyTheme.light).toEqual(navyTheme.dark);
  });

  it('anchors foreground at pure white so the opacity ramp is exact', () => {
    // sanity-web renders body copy as text-white/35 .. /100 rather than as
    // discrete greys; only a 100%-lightness channel makes text-foreground/70
    // resolve to the same color text-white/70 did.
    expect(navyTheme.light.foreground).toBe('0 0% 100%');
  });

  it('keeps the source palette intact', () => {
    const t = navyTheme.light;
    expect(t.background).toBe('225.7 48.8% 8.4%'); // #0B1020
    expect(t.card).toBe('226.7 39.1% 13.5%'); // #151B30 — callers apply /60
    expect(t.border).toBe('225.8 31.1% 23.9%'); // #2A3350
    expect(t.primary).toBe('251.8 100% 68%'); // #7C5CFF
    expect(t.secondary).toBe('248.7 49.5% 35.7%'); // #3B2E88, the gradient's dark stop
    expect(t.accent).toBe('195 100% 78%'); // #8FE3FF
    expect(t.well).toBe('227.1 41.2% 6.7%'); // #0A0D18, the rendered composite
  });

  it('leaves rounded-lg at the scale the site already uses', () => {
    expect(navyTheme.light.radius).toBe('0.5rem');
    expect(navyTheme.light.borderWidth).toBe('1px');
  });

  it('ships no classOverrides, so shared components keep their shape', () => {
    // A gradient button override would repaint building_blocks' top bar and
    // footer, which is exactly what the extraction must not change.
    expect(navyTheme.classOverrides).toBeUndefined();
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

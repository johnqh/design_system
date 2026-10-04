/**
 * With a theme active, nothing the package exports may style with the fixed
 * Tailwind palette (`bg-blue-600`, `text-gray-900`, `from-purple-500`, …):
 * every colour must come from the theme's tokens, or a theme's primary,
 * surfaces and text are ignored wherever that export is used.
 *
 * Every export of the web entry is walked — properties, getters, and every
 * function called with each variant name in use — under every preset, in
 * both web and native mode.
 */
import { describe, it, expect, afterAll } from 'vitest';
import * as design from '../index';
import { configureTheme } from '../themes/configure';
import { themes } from '../themes/registry';
import type { ThemeDefinition } from '../themes/types';
import { collectStrings } from './_walk';

const PALETTE =
  /(?:^|\s)(?:[^\s:]+:)*(?:bg|text|border(?:-[trblxyse])?|divide|ring|ring-offset|outline|from|via|to|fill|stroke|placeholder|shadow|decoration|accent|caret)-(?:(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-\d{2,3}|white|black)(?:\/\d+)?(?=\s|$)/g;

/** Classes allowed under a theme wherever they appear. */
const ALLOWED_CLASS = [
  // Scrims behind modals, drawers and sheets: they only dim what is behind.
  /^bg-black(?:\/\d+)?$/,
];

/**
 * The classes a theme supplies itself, in its class overrides — its own
 * structural signature (Windows bevels, neo-brutalist black borders), chosen
 * by the theme rather than left over from the legacy palette.
 */
function ownClasses(theme: ThemeDefinition): Set<string> {
  const text = JSON.stringify([theme.classOverrides ?? {}, theme.nativeClassOverrides ?? {}]);
  return new Set(
    text
      .replace(/[{}[\],"]/g, ' ')
      .split(/\s+/)
      .filter(Boolean)
  );
}

/** Exports allowed to keep the palette, by access path. */
const ALLOWED_PATH = [
  // Blockchain badges: the chain's brand colour, deliberately not themed.
  /^colors\.component\.badge\.(?:ethereum|solana|polygon|bitcoin|binance|cardano|avalanche|arbitrum)\./,
  /^variants\.badge\.(?:ethereum|solana)\(/,
  // Builds classes from the palette names its caller passes in.
  /^buildColorClass\(/,
];

/**
 * Not walked: `configureTheme` changes the theme mid-run; `getActiveTheme`
 * answers with the theme's own data; the capitalised names are aliases of
 * `colors`, `designTokens`, `textVariants` and `variants`, walked under those.
 */
const SKIP = new Set([
  'configureTheme',
  'getActiveTheme',
  'Colors',
  'Tokens',
  'Typography',
  'Variants',
]);

function paletteLeaks(theme: ThemeDefinition): string[] {
  const own = ownClasses(theme);
  const leaks: string[] = [];
  for (const [path, value] of collectStrings(design as Record<string, unknown>, SKIP)) {
    if (ALLOWED_PATH.some((re) => re.test(path))) continue;
    const found = (value.match(PALETTE) ?? [])
      .map((m) => m.trim())
      .filter((cls) => !own.has(cls))
      .map((cls) => cls.replace(/^(?:[^\s:]+:)*/, ''))
      .filter((cls) => !ALLOWED_CLASS.some((re) => re.test(cls)));
    if (found.length) leaks.push(`${path}: ${[...new Set(found)].join(' ')}`);
  }
  return leaks;
}

afterAll(() => configureTheme(null as unknown as ThemeDefinition));

describe.each(Object.entries(themes))('with the %s theme active', (_name, theme) => {
  it('no export emits fixed palette classes (web)', () => {
    configureTheme(theme);
    expect(paletteLeaks(theme)).toEqual([]);
  });

  it('no export emits fixed palette classes (native)', () => {
    configureTheme(theme, { native: true });
    expect(paletteLeaks(theme)).toEqual([]);
  });

  it('getThemeColor answers with the theme’s own colours', () => {
    configureTheme(theme);
    const [h, s, l] = theme.light.primary.trim().split(/\s+/);
    expect(design.getThemeColor('primary')).toBe(`hsl(${h}, ${s}, ${l})`);
    const [dh, ds, dl] = theme.dark.primary.trim().split(/\s+/);
    expect(design.getThemeColor('primary', 'dark', 0.5)).toBe(`hsla(${dh}, ${ds}, ${dl}, 0.5)`);
  });
});

describe('the walk itself', () => {
  it('reaches the helpers this test exists for', () => {
    configureTheme(themes.swiss);
    const paths = [...collectStrings(design as Record<string, unknown>, SKIP).keys()];
    for (const expected of [
      'buttonVariant(primary)',
      'inputVariant(default)',
      'cardVariant(bordered)',
      'textVariant(sm,medium,muted)',
      'focusRing',
      'GRADIENTS.buttons.primary',
      'GRADIENT_CLASSES.heroButton',
      'statusIndicatorColors.info',
      'sectionBadgeColors.light.container',
      'UI_CONSTANTS.card.border',
      'SEMANTIC_COLOR_MAP.primary',
      'textVariants.body.sm(undefined)',
      'variants.button.gradient.primary(undefined)',
    ]) {
      expect(paths).toContain(expected);
    }
  });

  it('catches a palette class when one is emitted', () => {
    expect(
      'x bg-blue-600 hover:text-gray-900 to-purple-600/50 ring-offset-white'.match(PALETTE)
    ).toHaveLength(4);
    // White text is flagged too: under a theme it belongs to a surface's foreground.
    expect('bg-primary text-white bg-black/50'.match(PALETTE)).toEqual([
      ' text-white',
      ' bg-black/50',
    ]);
  });
});

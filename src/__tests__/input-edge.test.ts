/**
 * A text field has an edge, in every variant, themed or not, on every
 * platform.
 *
 * It did not. The legacy classes named a border *colour* with no width, and
 * the semantic ones named no border at all and leaned on `bg-muted` to part
 * the field from the page. On the web something else usually supplied a line;
 * on React Native nothing does, and where a theme's `muted` sits beside its
 * `background` — Swiss has them half a percent apart — a field was the same
 * colour as the page with nothing around it. It could not be told from the
 * text beside it.
 *
 * `border` on its own is the width. Asserted as a whole token, because
 * `border-input` and `border-gray-300` contain the word and draw nothing.
 */
import { afterEach, describe, expect, it } from 'vitest';
import { variants } from '../core/variants';
import { configureTheme } from '../themes/configure';
import { themes } from '../themes';
import type { ThemeDefinition } from '../themes/types';

const INPUTS = Object.entries(variants.input) as Array<[string, () => string]>;

const tokens = (classes: string): string[] => classes.split(/\s+/).filter(Boolean);

/** Whether the classes draw a line: a width, from the base or from the theme. */
const hasEdge = (classes: string): boolean =>
  tokens(classes).some((token) => /^border(-[xytblr])?(-\d+|-\[.+\])?$/.test(token));

afterEach(() => configureTheme(null as unknown as ThemeDefinition));

describe('an input has an edge', () => {
  it.each(INPUTS)('%s, with no theme', (_name, variant) => {
    configureTheme(null as unknown as ThemeDefinition);
    expect(tokens(variant())).toContain('border');
  });

  describe.each(Object.entries(themes))('%s', (_themeName, theme) => {
    it.each(INPUTS)('%s, on the web', (_name, variant) => {
      configureTheme(theme);
      expect(hasEdge(variant())).toBe(true);
    });

    it.each(INPUTS)('%s, on React Native', (_name, variant) => {
      // Native reads `nativeClassOverrides`, which most themes do not
      // define — so there the base classes are all a field has.
      configureTheme(theme, { native: true });
      expect(hasEdge(variant())).toBe(true);
    });
  });

  it('takes its colour from the theme, and from the error when there is one', () => {
    configureTheme(themes.swiss, { native: true });
    expect(tokens(variants.input.default())).toContain('border-input');
    expect(tokens(variants.input.error())).toContain('border-destructive');
    expect(tokens(variants.input.error())).not.toContain('border-input');
  });
});

/**
 * Every theme must keep its surfaces distinguishable.
 *
 * `muted`, `secondary` and `accent` are the tokens a component reaches for when
 * it wants to sit APART from the page — a recessed panel, a secondary button,
 * a hover state. Give one of them the same value as `background` and it stops
 * existing: `bg-muted` paints nothing, and `hover:bg-accent` is a hover state
 * that never appears.
 *
 * Six presets shipped that way, so this is a guard rather than a one-off fix.
 * It fails on the value, not on a screenshot, which is why it can catch the
 * next preset before anybody looks at it.
 */
import { describe, it, expect } from 'vitest';
import { themes } from '../themes/registry';
import type { ThemeColors } from '../themes/types';

/** Tokens that exist to contrast with the page. */
const SURFACES = ['muted', 'secondary', 'accent'] as const;

const entries = Object.entries(themes);

describe('theme surfaces', () => {
  it('has themes to check', () => {
    expect(entries.length).toBeGreaterThan(10);
  });

  for (const [name, theme] of entries) {
    for (const mode of ['light', 'dark'] as const) {
      it(`${name}/${mode}: muted, secondary and accent differ from background`, () => {
        const scheme = theme[mode] as unknown as ThemeColors & Record<string, string>;
        const background = scheme.background;
        const collapsed = SURFACES.filter((token) => scheme[token] === background);
        expect(collapsed, `${collapsed.join(', ')} === background (${background})`).toEqual([]);
      });
    }
  }

  // The other half of the same rule: a raised surface needs to read against the
  // page too. Kept separate so a failure says which kind of contrast is missing.
  for (const [name, theme] of entries) {
    for (const mode of ['light', 'dark'] as const) {
      it(`${name}/${mode}: card differs from background`, () => {
        const scheme = theme[mode] as unknown as Record<string, string>;
        expect(scheme.card).not.toBe(scheme.background);
      });
    }
  }

  // And the recessed plane. `well` is optional in the type — the CSS generator
  // falls back to `background` — but a theme that ships it and lets it collapse
  // onto the page silently flattens every sidebar and master list that uses it.
  for (const [name, theme] of entries) {
    for (const mode of ['light', 'dark'] as const) {
      it(`${name}/${mode}: well differs from background when defined`, () => {
        const scheme = theme[mode] as unknown as Record<string, string>;
        if (scheme.well === undefined) return;
        expect(scheme.well).not.toBe(scheme.background);
      });
    }
  }
});

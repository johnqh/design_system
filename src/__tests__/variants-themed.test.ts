/**
 * Exercises every variant / typography / ui function WITH an active theme,
 * covering the semantic branches of themed()/tc() and the class-override paths.
 * Vitest isolates modules per file, so configuring a theme here does not affect
 * the no-theme test files.
 */
import { describe, it, expect } from 'vitest';
import { variants } from '../core/variants';
import { textVariants } from '../core/typography';
import { ui } from '../index';
import { configureTheme } from '../themes/configure';
import { defaultTheme, neoBrutalismTheme, type ThemeDefinition } from '../themes';
import { callAllArgs, touchUi } from './_walk';

// Theme that overrides ALL five components — exercises the override-present
// branch for badge & alert (no built-in theme overrides those).
const fullOverride: ThemeDefinition = {
  ...defaultTheme,
  name: 'test-full-override',
  displayName: 'Test Full Override',
  classOverrides: {
    button: { base: 'ov-button' },
    card: { base: 'ov-card' },
    input: { base: 'ov-input' },
    badge: { base: 'ov-badge' },
    alert: { base: 'ov-alert' },
  },
};

describe('exhaustive variant invocation (themed)', () => {
  it('default theme: semantic classes, no overrides', () => {
    configureTheme(defaultTheme);
    expect(callAllArgs(variants)).toBeGreaterThan(500);
    expect(callAllArgs(textVariants)).toBeGreaterThan(50);
    touchUi(ui as unknown as Record<string, unknown>);
    expect(variants.button.primary.default()).toContain('bg-primary');
  });

  it('neo-brutalism: appends button/card/input overrides', () => {
    configureTheme(neoBrutalismTheme);
    callAllArgs(variants);
    expect(variants.button.primary.default()).toContain('border-foreground');
  });

  it('full-override theme: appends badge & alert overrides', () => {
    configureTheme(fullOverride);
    callAllArgs(variants);
    expect(variants.badge.default()).toContain('ov-badge');
    expect(variants.badge.small('primary')).toContain('ov-badge');
    expect(variants.badge.large('zzz')).toContain('ov-badge');
    expect(variants.alert.info()).toContain('ov-alert');
  });
});

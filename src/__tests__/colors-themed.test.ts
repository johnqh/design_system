/**
 * Themed-branch coverage for tokens/colors:
 * - componentColors getters return the semantic set when a theme is active
 *   (colors.test.ts covers the legacy/no-theme side)
 * - getColorClasses states + missing-variant warning
 * - buildColorClass with and without optional border/state args
 */
import { describe, it, expect, vi } from 'vitest';
import { colors, getColorClasses, buildColorClass } from '../tokens/colors';
import { configureTheme } from '../themes/configure';
import { defaultTheme } from '../themes';

describe('colors with an active theme', () => {
  it('component getters return semantic (theme-aware) classes', () => {
    configureTheme(defaultTheme);
    expect(colors.component.button.primary.base).toContain('bg-primary');
    expect(colors.component.card.default.base).toContain('bg-card');
    expect(colors.component.badge.primary.base).toContain('text-primary');
    expect(colors.component.input.default.base).toContain('bg-muted');
    expect(colors.component.alert.info.base).toContain('bg-info');
  });

  it('getColorClasses merges requested states and warns on unknown variant', () => {
    const cls = getColorClasses('button', 'primary', ['focus', 'hover', 'disabled', 'active']);
    expect(cls).toContain('bg-primary');
    const warn = vi.spyOn(console, 'warn').mockImplementation(() => {});
    expect(getColorClasses('button', 'does-not-exist')).toBe('');
    expect(warn).toHaveBeenCalled();
    warn.mockRestore();
  });
});

describe('buildColorClass', () => {
  it('handles the minimal form (no border, no states)', () => {
    expect(buildColorClass('blue-100', 'blue-900')).toBe('bg-blue-100 text-blue-900');
  });

  it('handles every optional branch (border + hover/focus/dark)', () => {
    const cls = buildColorClass('blue-100', 'blue-900', 'blue-300', {
      hover: { background: 'blue-200', text: 'blue-800', border: 'blue-400' },
      focus: { ring: 'blue-500' },
      dark: { background: 'blue-900', text: 'blue-100', border: 'blue-700' },
    });
    expect(cls).toContain('border-blue-300');
    expect(cls).toContain('hover:bg-blue-200');
    expect(cls).toContain('hover:text-blue-800');
    expect(cls).toContain('hover:border-blue-400');
    expect(cls).toContain('focus:ring-blue-500');
    expect(cls).toContain('dark:bg-blue-900');
    expect(cls).toContain('dark:text-blue-100');
    expect(cls).toContain('dark:border-blue-700');
  });

  it('handles partial state objects (empty hover/dark, no focus)', () => {
    const cls = buildColorClass('gray-50', 'gray-900', undefined, { hover: {}, dark: {} });
    expect(cls).toBe('bg-gray-50 text-gray-900');
  });
});

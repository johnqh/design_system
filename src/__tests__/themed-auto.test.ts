/**
 * Coverage for toSemantic()/themedAuto() and the now-theme-aware advanced
 * component variants (table, modal, navigation, loading, …).
 *
 * Vitest isolates modules per file; the no-theme assertions run before any
 * configureTheme() call in this file.
 */
import { describe, it, expect } from 'vitest';
import { variants, toSemantic, themedAuto } from '../core/variants';
import { configureTheme } from '../themes/configure';
import { defaultTheme } from '../themes';

describe('toSemantic — palette → token mapping', () => {
  it('maps surfaces/text/borders and drops dark: variants', () => {
    expect(
      toSemantic('bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 text-gray-900')
    ).toBe('bg-card border-border text-foreground');
  });

  it('preserves variant prefixes + opacity and maps state tints', () => {
    expect(toSemantic('bg-gray-50 hover:bg-gray-100 text-gray-500')).toBe(
      'bg-muted hover:bg-muted text-muted-foreground'
    );
    expect(toSemantic('bg-blue-50 hover:bg-blue-100')).toBe('bg-primary/10 hover:bg-primary/15');
    expect(toSemantic('focus:ring-blue-500 border-blue-500 before:bg-blue-600')).toBe(
      'focus:ring-ring border-ring before:bg-primary'
    );
  });

  it('maps text-white to the surface foreground on solid brand backgrounds', () => {
    expect(toSemantic('bg-blue-600 text-white hover:bg-blue-700')).toBe(
      'bg-primary text-primary-foreground hover:bg-primary'
    );
    expect(toSemantic('bg-red-600 text-white')).toBe('bg-destructive text-destructive-foreground');
    // opacity/tinted brand bg keeps text-white untouched (not a solid surface)
    expect(toSemantic('bg-primary/10 text-white')).toBe('bg-primary/10 text-white');
  });

  it('passes layout, scrims and unmapped utilities through unchanged', () => {
    expect(toSemantic('flex items-center gap-2 bg-black/50 rounded-lg')).toBe(
      'flex items-center gap-2 bg-black/50 rounded-lg'
    );
  });
});

describe('advanced variants respond to the active theme', () => {
  it('emit legacy palette classes with no theme configured', () => {
    expect(themedAuto('bg-white text-gray-900')).toBe('bg-white text-gray-900');
    expect(variants.table.container()).toContain('bg-white');
    expect(variants.modal.container.default()).toContain('dark:bg-gray-800');
  });

  it('emit semantic tokens once a theme is active', () => {
    configureTheme(defaultTheme);
    const table = variants.table.container();
    expect(table).toContain('bg-card');
    expect(table).toContain('border-border');
    expect(table).not.toContain('bg-white');
    expect(table).not.toContain('dark:');

    expect(variants.table.body.rowSelected()).toContain('bg-primary/10');
    expect(variants.modal.container.default()).toContain('bg-card');
    expect(variants.navigation.breadcrumb.separator()).toContain('text-muted-foreground');
    expect(variants.loading.spinner.default()).toContain('border-t-primary');
    expect(themedAuto('bg-white')).toBe('bg-card');
  });
});

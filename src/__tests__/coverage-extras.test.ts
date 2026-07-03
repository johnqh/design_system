/**
 * Fills remaining branch gaps in theme-utils and simple-variants.
 */
import { describe, it, expect } from 'vitest';
import {
  withOpacity,
  responsive,
  themeColor,
  getSemanticColor,
  gradient,
  spacing,
  animation,
} from '../utilities/theme-utils';
import { SimpleVariants } from '../core/simple-variants';

describe('theme-utils', () => {
  it('withOpacity handles hsl, hex, and passthrough', () => {
    expect(withOpacity('hsl(0 0% 0%)', 0.5)).toBe('hsl(0 0% 0% / 0.5)');
    expect(withOpacity('#ff8800', 0.5)).toBe('rgba(255, 136, 0, 0.5)');
    expect(withOpacity('red', 0.5)).toBe('red');
  });

  it('responsive appends breakpoint variants', () => {
    expect(responsive('block')).toBe('block');
    expect(responsive('block', { md: 'flex', lg: 'grid' })).toBe('block md:flex lg:grid');
  });

  it('themeColor / gradient / animation build class strings', () => {
    expect(themeColor('text-black', 'text-white')).toBe('text-black dark:text-white');
    expect(gradient('a', 'b')).toBe('bg-gradient-to-r from-a to-b');
    expect(gradient('a', 'b', 'to-l')).toBe('bg-gradient-to-l from-a to-b');
    expect(animation()).toContain('duration-200');
    expect(animation('300ms', 'ease-in')).toBe('transition-all duration-300 ease-in');
  });

  it('getSemanticColor covers every colorName × shade branch', () => {
    expect(getSemanticColor('primary')).toBe('#111827');
    expect(getSemanticColor('primary', 'dark')).toBe('#ffffff');
    expect(getSemanticColor('secondary')).toBe('#4b5563');
    expect(getSemanticColor('secondary', 'dark')).toBe('#9ca3af');
    expect(getSemanticColor('other')).toBe('#111827');
    expect(getSemanticColor('other', 'dark')).toBe('#ffffff');
  });

  it('spacing handles numbers and passthrough strings', () => {
    expect(spacing(4)).toBe('1rem');
    expect(spacing('2rem')).toBe('2rem');
  });
});

describe('SimpleVariants defensive branches', () => {
  it('constructs, resolves, and reports availability for a valid config', () => {
    const sv = new SimpleVariants({ button: { primary: 'bg-blue', default: 'bg-gray' } });
    expect(sv.get('button', 'primary')).toBe('bg-blue');
    expect(sv.get('button.primary')).toBe('bg-blue');
    expect(sv.has('button', 'primary')).toBe(true);
    expect(sv.has('button', 'nope')).toBe(false);
    // missing variant routes through getFallback + getAvailableVariants
    expect(typeof sv.get('button', 'missing')).toBe('string');
  });

  it('null config is coerced to {} by the constructor', () => {
    // constructor does `designSystemVariants || {}`, so this is safe
    const bad = new SimpleVariants(null as never);
    expect(bad.has('a', 'b')).toBe(false);
    expect(bad.get('a', 'b')).toBe('');
  });

  it('exercises defensive catch/null branches with a degenerate internal state', () => {
    const sv = new SimpleVariants({ button: { default: 'd' } });
    // Force the internal store to null to drive the try/catch + null guards
    // that the constructor's `|| {}` coercion otherwise makes unreachable.
    (sv as unknown as { variants: unknown }).variants = null;
    expect(sv.has('a', 'b')).toBe(false); // has() catch
    expect(() => sv.get('a', 'b')).not.toThrow(); // get() catch + getAvailableVariants catch
    // validateConfiguration()'s null-config branch
    (sv as unknown as { validateConfiguration: () => void }).validateConfiguration();
  });
});

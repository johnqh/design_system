/**
 * Coverage for the React Native entry point and its clsx-only cn().
 */
import { describe, it, expect } from 'vitest';
import * as native from '../index.native';
import { cn as nativeCn } from '../utilities/utils.native';

describe('index.native', () => {
  it('re-exports the core surface', () => {
    expect(native.colors).toBeDefined();
    expect(native.designTokens).toBeDefined();
    expect(native.variants).toBeDefined();
    expect(typeof native.cn).toBe('function');
    expect(typeof native.configureTheme).toBe('function');
    expect(typeof native.getSemanticColor).toBe('function');
  });

  it('native cn merges via clsx (no tailwind-merge)', () => {
    expect(nativeCn('a', { b: true, c: false }, ['d'])).toBe('a b d');
    // clsx-only keeps conflicting classes (unlike web tailwind-merge)
    expect(native.cn('p-2', 'p-4')).toBe('p-2 p-4');
  });
});

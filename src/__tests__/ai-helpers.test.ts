/**
 * Full branch coverage for the (deprecated) AI helper utilities.
 */
import { describe, it, expect } from 'vitest';
import {
  SEMANTIC_COLOR_MAP,
  UI_PATTERNS,
  SIZE_SCALES,
  getSemanticColor,
  applyUIPattern,
  createSizedComponent,
  createComponentWithIntent,
  validateVariantConfig,
  safeResolveVariant,
  getVariantSuggestions,
  analyzeVariantUsage,
} from '../utilities/ai-helpers';

describe('ai-helpers constants & simple getters', () => {
  it('exposes maps and resolves semantic color / patterns / sizes', () => {
    expect(Object.keys(SEMANTIC_COLOR_MAP).length).toBeGreaterThan(0);
    expect(Object.keys(UI_PATTERNS).length).toBeGreaterThan(0);
    expect(getSemanticColor('error')).toBe(SEMANTIC_COLOR_MAP.error);
    expect(applyUIPattern('centeredContainer')).toContain('mx-auto');
    expect(applyUIPattern('clickable', 'p-6')).toContain('p-6');
    expect(createSizedComponent('sm', 'rounded')).toContain(SIZE_SCALES.sm.height);
  });
});

describe('createComponentWithIntent', () => {
  it('includes every option when all provided', () => {
    const cls = createComponentWithIntent({
      intent: 'primary',
      size: 'lg',
      pattern: 'clickable',
      additional: 'rounded-md',
    });
    expect(cls).toContain('rounded-md');
    expect(cls).toContain(SIZE_SCALES.lg.height);
  });
  it('omits every option when none provided', () => {
    expect(createComponentWithIntent({})).toBe('');
  });
});

describe('validateVariantConfig', () => {
  it('valid config passes', () => {
    const r = validateVariantConfig({ button: { default: () => 'x' } });
    expect(r.isValid).toBe(true);
    expect(r.errors).toHaveLength(0);
  });
  it('flags disallowed components, missing defaults, and bad types', () => {
    const r = validateVariantConfig(
      { button: { primary: () => 'x' }, weird: { default: 123 as never } },
      { requireDefault: true, checkTypes: true, allowedComponents: ['button'] }
    );
    expect(r.warnings.some((w) => w.includes('weird'))).toBe(true); // not allowed
    expect(r.errors.some((e) => e.includes("missing required 'default'"))).toBe(true); // button
    expect(r.errors.some((e) => e.includes('Invalid variant type'))).toBe(true); // weird.default=123
    expect(r.isValid).toBe(false);
  });
});

describe('safeResolveVariant', () => {
  const config = {
    button: { default: () => 'btn-default', primary: 'btn-primary' },
    fn: () => 'fn-classes',
    str: 'str-classes' as never,
  };
  it('resolves object variant (function and string)', () => {
    expect(safeResolveVariant(config, 'button', 'default').classes).toBe('btn-default');
    expect(safeResolveVariant(config, 'button', 'primary').classes).toBe('btn-primary');
  });
  it('resolves function and string component configs', () => {
    expect(safeResolveVariant(config, 'fn').classes).toBe('fn-classes');
    expect(safeResolveVariant(config, 'str').classes).toBe('str-classes');
  });
  it('falls back to default variant when requested variant missing', () => {
    const r = safeResolveVariant(config, 'button', 'nope');
    expect(r.classes).toBe('btn-default');
    expect(r.usedFallback).toBe(true);
  });
  it('missing component: uses fallback option', () => {
    const r = safeResolveVariant(config, 'ghost', 'x', { fallback: () => 'fb' });
    expect(r.classes).toBe('fb');
    expect(r.usedFallback).toBe(true);
  });
  it('missing component: strict throws (caught, warnings recorded)', () => {
    const r = safeResolveVariant(config, 'ghost', 'x', { strict: true });
    expect(r.warnings?.length).toBeGreaterThan(0);
  });
  it('missing variant with no default: fallback option', () => {
    const r = safeResolveVariant({ card: { primary: () => 'p' } }, 'card', 'nope', {
      fallback: () => 'fb2',
    });
    expect(r.classes).toBe('fb2');
  });
  it('missing variant with no default: strict throws (caught)', () => {
    const r = safeResolveVariant({ card: { primary: () => 'p' } }, 'card', 'nope', {
      strict: true,
    });
    expect(r.warnings?.some((w) => w.includes('not found'))).toBe(true);
  });
  it('missing component with neither fallback nor strict returns empty', () => {
    const r = safeResolveVariant(config, 'ghost', 'x');
    expect(r.classes).toBe('');
  });
  it('recovers via fallback when a variant function throws', () => {
    const throwing = {
      boom: {
        default: () => {
          throw new Error('kaboom');
        },
      },
    };
    const r = safeResolveVariant(throwing, 'boom', 'default', { fallback: () => 'safe' });
    expect(r.classes).toBe('safe');
    expect(r.usedFallback).toBe(true);
  });
});

describe('getVariantSuggestions & analyzeVariantUsage', () => {
  it('suggests matching variant names, [] for non-object', () => {
    const config = { button: { default: () => '', primary: () => '', danger: () => '' } };
    expect(getVariantSuggestions(config, 'button', 'da')).toEqual(['danger']);
    expect(getVariantSuggestions(config, 'button')).toEqual(['danger', 'default', 'primary']);
    expect(getVariantSuggestions({ x: 'str' as never }, 'x')).toEqual([]);
    expect(getVariantSuggestions(config, 'missing')).toEqual([]);
  });
  it('analyzes counts, missing defaults, and duplicate patterns', () => {
    const config = {
      a: { default: () => 'same', primary: () => 'same' }, // duplicate pattern
      b: { primary: () => 'unique' }, // missing default
    };
    const r = analyzeVariantUsage(config);
    expect(r.componentCount).toBe(2);
    expect(r.variantCount).toBe(3);
    expect(r.missingDefaults).toContain('b');
    expect(r.duplicatePatterns.length).toBeGreaterThan(0);
    expect(r.optimizationSuggestions.length).toBeGreaterThan(0);
  });

  it('handles string variant values and non-object components', () => {
    const r = analyzeVariantUsage({
      a: { default: 'plain-string' } as never, // String(variantValue) branch
      b: 'not-an-object' as never, // non-object component branch
    });
    expect(r.componentCount).toBe(2);
    expect(r.variantCount).toBe(1);
  });

  it('a clean config yields no optimization suggestions', () => {
    const r = analyzeVariantUsage({
      a: { default: () => 'one' },
      b: { default: () => 'two' },
    });
    expect(r.missingDefaults).toHaveLength(0);
    expect(r.duplicatePatterns).toHaveLength(0);
    expect(r.optimizationSuggestions).toHaveLength(0);
  });
});

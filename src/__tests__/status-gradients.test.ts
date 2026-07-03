/**
 * Coverage for status-colors and gradients utilities.
 */
import { describe, it, expect } from 'vitest';
import {
  statusIndicatorColors,
  getStatusIndicatorColor,
  cardVariantColors,
  getCardVariantColors,
  calloutVariantColors,
  getCalloutVariantColors,
  sectionBadgeColors,
  getSectionBadgeColors,
} from '../utilities/status-colors';
import { GRADIENTS, GRADIENT_CLASSES, getGradient, combineGradient } from '../tokens/gradients';

describe('status-colors getters cover every key', () => {
  it('status indicators', () => {
    for (const k of Object.keys(statusIndicatorColors) as (keyof typeof statusIndicatorColors)[]) {
      expect(getStatusIndicatorColor(k)).toBe(statusIndicatorColors[k]);
    }
  });
  it('card variants', () => {
    for (const k of Object.keys(cardVariantColors) as (keyof typeof cardVariantColors)[]) {
      expect(getCardVariantColors(k)).toBe(cardVariantColors[k]);
    }
  });
  it('callout variants', () => {
    for (const k of Object.keys(calloutVariantColors) as (keyof typeof calloutVariantColors)[]) {
      expect(getCalloutVariantColors(k).background).toBeTruthy();
    }
  });
  it('section badges', () => {
    for (const k of Object.keys(sectionBadgeColors) as (keyof typeof sectionBadgeColors)[]) {
      expect(getSectionBadgeColors(k).icon).toBeTruthy();
    }
  });
});

describe('gradients', () => {
  it('getGradient resolves known variants and empty-strings unknown ones', () => {
    expect(getGradient('buttons', 'primary')).toBe(GRADIENTS.buttons.primary);
    expect(getGradient('backgrounds', 'nonexistent')).toBe('');
  });
  it('combineGradient trims when no additional classes', () => {
    expect(combineGradient('base')).toBe('base');
    expect(combineGradient('base', 'extra')).toBe('base extra');
  });
  it('GRADIENT_CLASSES compose base gradients', () => {
    expect(GRADIENT_CLASSES.primaryButton).toContain(GRADIENTS.buttons.primary);
    expect(GRADIENT_CLASSES.gradientText).toContain('bg-clip-text');
  });
});

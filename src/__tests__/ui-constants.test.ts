import { describe, it, expect } from 'vitest';
import { UI_CONSTANTS, UI_PATTERNS, getUIConstant, combineUI } from '../utilities/ui-constants';

describe('ui-constants', () => {
  describe('UI_CONSTANTS', () => {
    it('should export layout constants', () => {
      expect(UI_CONSTANTS.layout).toBeDefined();
      expect(UI_CONSTANTS.layout.container).toBeDefined();
      expect(UI_CONSTANTS.layout.section).toBeDefined();
    });

    it('should export typography constants', () => {
      expect(UI_CONSTANTS.typography).toBeDefined();
      expect(UI_CONSTANTS.typography.hero).toBeDefined();
      expect(UI_CONSTANTS.typography.body).toBeDefined();
    });

    it('should export spacing constants', () => {
      expect(UI_CONSTANTS.spacing).toBeDefined();
      expect(UI_CONSTANTS.spacing.sectionGap).toBeDefined();
      expect(UI_CONSTANTS.spacing.cardGap).toBeDefined();
    });

    it('should export animation constants', () => {
      expect(UI_CONSTANTS.animation).toBeDefined();
      expect(UI_CONSTANTS.animation.fast).toBeDefined();
      expect(UI_CONSTANTS.animation.normal).toBeDefined();
    });

    it('should export focus constants', () => {
      expect(UI_CONSTANTS.focus).toBeDefined();
      expect(UI_CONSTANTS.focus.ring).toBeDefined();
      expect(UI_CONSTANTS.focus.ringInset).toBeDefined();
    });
  });

  describe('UI_PATTERNS', () => {
    it('should export section patterns', () => {
      expect(UI_PATTERNS.section).toBeDefined();
      expect(UI_PATTERNS.sectionCentered).toBeDefined();
    });

    it('should export card patterns', () => {
      expect(UI_PATTERNS.interactiveCard).toBeDefined();
      expect(UI_PATTERNS.primaryButton).toBeDefined();
    });

    it('should export text patterns', () => {
      expect(UI_PATTERNS.heroText).toBeDefined();
      expect(UI_PATTERNS.featureGrid).toBeDefined();
    });

    it('should export component patterns', () => {
      expect(UI_PATTERNS.iconContainer).toBeDefined();
    });
  });

  describe('getUIConstant', () => {
    it('should retrieve nested constants by path', () => {
      const result = getUIConstant('layout.container');
      expect(result).toBe(UI_CONSTANTS.layout.container);
    });

    it('should retrieve typography constants', () => {
      const result = getUIConstant('typography.hero');
      expect(result).toBe(UI_CONSTANTS.typography.hero);
    });

    it('should retrieve spacing constants', () => {
      const result = getUIConstant('spacing.cardGap');
      expect(result).toBe(UI_CONSTANTS.spacing.cardGap);
    });

    it('should retrieve animation constants', () => {
      const result = getUIConstant('animation.fast');
      expect(result).toBe(String(UI_CONSTANTS.animation.fast));
    });

    it('should return empty string for invalid path', () => {
      const result = getUIConstant('invalid.path');
      expect(result).toBe('');
    });

    it('should return empty string for undefined path', () => {
      const result = getUIConstant('layout.nonexistent');
      expect(result).toBe('');
    });

    it('should handle deep nested paths', () => {
      const result = getUIConstant('focus.ring');
      expect(result).toBe(UI_CONSTANTS.focus.ring);
    });
  });

  describe('combineUI', () => {
    it('should combine multiple UI classes', () => {
      const result = combineUI('flex', 'items-center', 'gap-4');
      expect(result).toBe('flex items-center gap-4');
    });

    it('should filter out falsy values', () => {
      const result = combineUI('flex', undefined, 'items-center', null, false, 'gap-4');
      expect(result).toBe('flex items-center gap-4');
    });

    it('should handle empty input', () => {
      const result = combineUI();
      expect(result).toBe('');
    });

    it('should handle all falsy values', () => {
      const result = combineUI(undefined, null, false, '');
      expect(result).toBe('');
    });

    it('should handle mixed truthy and falsy values', () => {
      const isActive = true;
      const isDisabled = false;
      const result = combineUI(
        'btn',
        isActive && 'active',
        isDisabled && 'disabled',
        'btn-primary'
      );
      expect(result).toBe('btn active btn-primary');
    });

    it('should handle conditional classes with boolean logic', () => {
      const showBorder = true;
      const hasError = false;
      const result = combineUI('input', showBorder && 'border', hasError && 'border-red-500');
      expect(result).toBe('input border');
    });

    it('should not trim whitespace (simple join operation)', () => {
      const result = combineUI('  flex  ', '  items-center  ', '  gap-4  ');
      expect(result).toBe('  flex     items-center     gap-4  ');
    });
  });
});

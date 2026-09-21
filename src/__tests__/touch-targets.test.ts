import { describe, it, expect } from 'vitest';
import {
  touchTargets,
  DEFAULT_TOUCH_TARGET,
  minTouchTarget,
  touchTargetClasses,
} from '../tokens/touch-targets';

describe('touch-targets', () => {
  describe('touchTargets', () => {
    it('uses Apple’s 44pt minimum on Apple platforms', () => {
      expect(touchTargets.ios).toBe(44);
      expect(touchTargets.macos).toBe(44);
    });

    it('uses Material Design’s 48dp minimum on Android', () => {
      expect(touchTargets.android).toBe(48);
    });

    it('uses 44px on web and windows', () => {
      expect(touchTargets.web).toBe(44);
      expect(touchTargets.windows).toBe(44);
    });
  });

  describe('minTouchTarget', () => {
    it('resolves each known platform', () => {
      expect(minTouchTarget('ios')).toBe(44);
      expect(minTouchTarget('android')).toBe(48);
      expect(minTouchTarget('macos')).toBe(44);
      expect(minTouchTarget('windows')).toBe(44);
      expect(minTouchTarget('web')).toBe(44);
    });

    it('falls back to 44 for unknown or missing platforms', () => {
      expect(minTouchTarget('tvos')).toBe(DEFAULT_TOUCH_TARGET);
      expect(minTouchTarget('')).toBe(DEFAULT_TOUCH_TARGET);
      expect(minTouchTarget(undefined)).toBe(DEFAULT_TOUCH_TARGET);
      expect(DEFAULT_TOUCH_TARGET).toBe(44);
    });

    it('does not resolve inherited Object.prototype keys', () => {
      expect(minTouchTarget('toString')).toBe(DEFAULT_TOUCH_TARGET);
      expect(minTouchTarget('constructor')).toBe(DEFAULT_TOUCH_TARGET);
    });
  });

  describe('touchTargetClasses', () => {
    it('exposes Tailwind classes matching the web token', () => {
      expect(touchTargetClasses.minHeight).toBe(`min-h-[${touchTargets.web}px]`);
      expect(touchTargetClasses.minWidth).toBe(`min-w-[${touchTargets.web}px]`);
      expect(touchTargetClasses.min).toBe(
        `${touchTargetClasses.minHeight} ${touchTargetClasses.minWidth}`
      );
    });
  });
});

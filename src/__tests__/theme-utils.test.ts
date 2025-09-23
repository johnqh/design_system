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

describe('theme-utils', () => {
  describe('withOpacity', () => {
    it('should add opacity to hex colors', () => {
      const result = withOpacity('#ff0000', 0.8);
      expect(result).toBe('rgba(255, 0, 0, 0.8)');
    });

    it('should handle HSL colors', () => {
      const result = withOpacity('hsl(120, 100%, 50%)', 0.5);
      expect(result).toBe('hsl(120, 100%, 50% / 0.5)');
    });

    it('should return original color for unsupported formats', () => {
      expect(withOpacity('red', 0.5)).toBe('red');
      expect(withOpacity('blue', 1)).toBe('blue');
    });
  });

  describe('responsive', () => {
    it('should create responsive classes', () => {
      const result = responsive('text-base', { md: 'text-lg', lg: 'text-xl' });
      expect(result).toBe('text-base md:text-lg lg:text-xl');
    });

    it('should handle empty breakpoints', () => {
      const result = responsive('text-base', {});
      expect(result).toBe('text-base');
    });

    it('should handle single breakpoint', () => {
      const result = responsive('hidden', { lg: 'block' });
      expect(result).toBe('hidden lg:block');
    });

    it('should handle all breakpoints', () => {
      const result = responsive('text-sm', {
        sm: 'text-base',
        md: 'text-lg',
        lg: 'text-xl',
        xl: 'text-2xl',
        '2xl': 'text-3xl',
      });
      expect(result).toBe('text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl');
    });
  });

  describe('themeColor', () => {
    it('should create theme-aware color classes', () => {
      const result = themeColor('bg-white', 'bg-gray-900');
      expect(result).toBe('bg-white dark:bg-gray-900');
    });

    it('should handle complex color classes', () => {
      const result = themeColor('text-gray-900 bg-white', 'text-white bg-gray-900');
      expect(result).toBe('text-gray-900 bg-white dark:text-white bg-gray-900');
    });
  });

  describe('getSemanticColor', () => {
    it('should return primary color', () => {
      const result = getSemanticColor('primary');
      expect(result).toBe('#111827');
    });

    it('should handle different shades', () => {
      expect(getSemanticColor('primary', 'dark')).toBe('#ffffff');
      expect(getSemanticColor('secondary', 'light')).toBe('#4b5563');
    });

    it('should default to light shade', () => {
      const result = getSemanticColor('success');
      expect(result).toBe('#111827');
    });
  });

  describe('gradient', () => {
    it('should create gradient classes', () => {
      const result = gradient('red-500', 'blue-500');
      expect(result).toBe('bg-gradient-to-r from-red-500 to-blue-500');
    });

    it('should handle custom direction', () => {
      const result = gradient('purple-400', 'pink-400', 'to-br');
      expect(result).toBe('bg-gradient-to-br from-purple-400 to-pink-400');
    });

    it('should handle different color formats', () => {
      const result = gradient('#ff0000', '#0000ff', 'to-t');
      expect(result).toBe('bg-gradient-to-t from-#ff0000 to-#0000ff');
    });
  });

  describe('spacing', () => {
    it('should handle string spacing values', () => {
      expect(spacing('4')).toBe('4');
      expect(spacing('8')).toBe('8');
      expect(spacing('12')).toBe('12');
    });

    it('should handle number spacing values', () => {
      expect(spacing(4)).toBe('1rem');
      expect(spacing(8)).toBe('2rem');
      expect(spacing(16)).toBe('4rem');
    });

    it('should handle edge cases', () => {
      expect(spacing('0')).toBe('0');
      expect(spacing(0)).toBe('0rem');
    });
  });

  describe('animation', () => {
    it('should create CSS animation property', () => {
      const result = animation();
      expect(result).toBe('transition-all duration-200 ease-out');
    });

    it('should handle custom duration', () => {
      const result = animation('300ms');
      expect(result).toBe('transition-all duration-300 ease-out');
    });

    it('should handle custom duration and easing', () => {
      const result = animation('150ms', 'ease-in');
      expect(result).toBe('transition-all duration-150 ease-in');
    });

    it('should handle different time units', () => {
      expect(animation('1s')).toBe('transition-all duration-1s ease-out');
      expect(animation('0.5s')).toBe('transition-all duration-0.5s ease-out');
    });
  });
});

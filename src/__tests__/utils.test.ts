import { describe, it, expect } from 'vitest';
import { cn } from '../utilities/utils';

describe('utils', () => {
  describe('cn', () => {
    it('should merge classes correctly', () => {
      const result = cn('btn', 'btn-primary');
      expect(result).toBe('btn btn-primary');
    });

    it('should handle conditional classes', () => {
      const isActive = true;
      const isDisabled = false;
      const result = cn('btn', isActive && 'active', isDisabled && 'disabled');
      expect(result).toBe('btn active');
    });

    it('should merge conflicting classes with tailwind-merge', () => {
      const result = cn('bg-red-500', 'bg-blue-500');
      expect(result).toBe('bg-blue-500');
    });

    it('should handle arrays of classes', () => {
      const result = cn(['btn', 'btn-primary'], 'active');
      expect(result).toBe('btn btn-primary active');
    });

    it('should handle empty inputs', () => {
      const result = cn();
      expect(result).toBe('');
    });

    it('should handle undefined and null values', () => {
      const result = cn('btn', undefined, null, 'active');
      expect(result).toBe('btn active');
    });

    it('should handle objects with boolean values', () => {
      const result = cn({
        btn: true,
        active: true,
        disabled: false,
      });
      expect(result).toBe('btn active');
    });
  });
});

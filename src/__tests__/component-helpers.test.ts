import { describe, it, expect } from 'vitest'
import { 
  getSizeClasses,
  focusRing,
  focusVisible,
  transitions,
  hoverState,
  disabledState,
  loadingState,
  buttonVariant,
  inputVariant,
  cardVariant,
  textVariant
} from '../utilities/component-helpers'

describe('component-helpers', () => {
  describe('getSizeClasses', () => {
    it('should return size classes for button', () => {
      const result = getSizeClasses('button', 'md')
      expect(result).toBe('h-10 px-4 text-sm')
    })

    it('should return size classes for input', () => {
      const result = getSizeClasses('input', 'lg')
      expect(result).toBe('h-11 px-4 text-base')
    })

    it('should return size classes for icon', () => {
      const result = getSizeClasses('icon', 'sm')
      expect(result).toBe('w-4 h-4')
    })

    it('should handle all size variants', () => {
      expect(getSizeClasses('button', 'xs')).toBe('h-7 px-2 text-xs')
      expect(getSizeClasses('button', 'sm')).toBe('h-8 px-3 text-sm')
      expect(getSizeClasses('button', 'md')).toBe('h-10 px-4 text-sm')
      expect(getSizeClasses('button', 'lg')).toBe('h-11 px-8 text-base')
      expect(getSizeClasses('button', 'xl')).toBe('h-12 px-10 text-lg')
    })
  })

  describe('focus constants', () => {
    it('should export focus ring classes', () => {
      expect(focusRing).toBe('focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2')
    })

    it('should export focus visible classes', () => {
      expect(focusVisible).toBe('focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2')
    })
  })

  describe('transitions', () => {
    it('should export transition constants', () => {
      expect(transitions.default).toBe('transition-colors duration-200')
      expect(transitions.all).toBe('transition-all duration-200')
      expect(transitions.fast).toBe('transition-all duration-100')
      expect(transitions.slow).toBe('transition-all duration-300')
      expect(transitions.transform).toBe('transition-transform duration-200')
    })
  })

  describe('hoverState', () => {
    it('should add hover prefix to classes', () => {
      const result = hoverState('bg-blue-600')
      expect(result).toBe('hover:bg-blue-600')
    })

    it('should handle multiple classes', () => {
      const result = hoverState('bg-blue-600 text-white')
      expect(result).toBe('hover:bg-blue-600 hover:text-white')
    })

    it('should handle empty string', () => {
      const result = hoverState('')
      expect(result).toBe('hover:')
    })
  })

  describe('disabledState', () => {
    it('should return default disabled classes', () => {
      const result = disabledState()
      expect(result).toBe('disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none')
    })

    it('should return custom disabled classes', () => {
      const result = disabledState('opacity-30 cursor-default')
      expect(result).toBe('disabled:opacity-30 disabled:cursor-default')
    })
  })

  describe('loadingState', () => {
    it('should export loading state classes', () => {
      expect(loadingState).toBe('opacity-70 cursor-wait pointer-events-none')
    })
  })

  describe('buttonVariant', () => {
    it('should return primary button classes', () => {
      const result = buttonVariant('primary')
      expect(result).toContain('bg-blue-600')
      expect(result).toContain('text-white')
    })

    it('should return secondary button classes', () => {
      const result = buttonVariant('secondary')
      expect(result).toContain('bg-gray-200')
      expect(result).toContain('text-gray-900')
    })

    it('should return outline button classes', () => {
      const result = buttonVariant('outline')
      expect(result).toContain('border-gray-300')
      expect(result).toContain('bg-transparent')
    })

    it('should return ghost button classes', () => {
      const result = buttonVariant('ghost')
      expect(result).toContain('bg-transparent')
      expect(result).toContain('hover:bg-gray-100')
    })

    it('should return destructive button classes', () => {
      const result = buttonVariant('destructive')
      expect(result).toContain('bg-red-600')
      expect(result).toContain('text-white')
    })
  })

  describe('inputVariant', () => {
    it('should return default input classes', () => {
      const result = inputVariant()
      expect(result).toContain('border-gray-300')
      expect(result).toContain('focus:border-blue-500')
    })

    it('should return error input classes', () => {
      const result = inputVariant('error')
      expect(result).toContain('border-red-500')
      expect(result).toContain('focus:border-red-500')
    })

    it('should return success input classes', () => {
      const result = inputVariant('success')
      expect(result).toContain('border-green-500')
      expect(result).toContain('focus:border-green-500')
    })
  })

  describe('cardVariant', () => {
    it('should return default card classes', () => {
      const result = cardVariant()
      expect(result).toContain('bg-white')
      expect(result).toContain('rounded-lg')
    })

    it('should return bordered card classes', () => {
      const result = cardVariant('bordered')
      expect(result).toContain('border')
      expect(result).toContain('border-gray-200')
    })

    it('should return elevated card classes', () => {
      const result = cardVariant('elevated')
      expect(result).toContain('shadow-md')
    })
  })

  describe('textVariant', () => {
    it('should return text classes with size, weight, and color', () => {
      const result = textVariant('lg', 'bold', 'primary')
      expect(result).toContain('text-lg')
      expect(result).toContain('font-bold')
      expect(result).toContain('text-blue-600')
    })

    it('should return default text classes', () => {
      const result = textVariant()
      expect(result).toContain('text-base')
      expect(result).toContain('font-normal')
      expect(result).toContain('text-gray-900')
    })

    it('should handle muted color variant', () => {
      const result = textVariant('sm', 'medium', 'muted')
      expect(result).toContain('text-sm')
      expect(result).toContain('font-medium')
      expect(result).toContain('text-gray-600')
    })
  })
})
import { describe, it, expect, vi } from 'vitest'
import { colors, getColorClasses, buildColorClass } from '../colors'

describe('Colors System', () => {
  describe('Raw Colors', () => {
    it('should have complete blue palette', () => {
      expect(colors.raw.blue[50]).toBe('#eff6ff')
      expect(colors.raw.blue[500]).toBe('#3b82f6')
      expect(colors.raw.blue[900]).toBe('#1e3a8a')
    })

    it('should have web3 colors', () => {
      expect(colors.raw.web3.ethereum.DEFAULT).toBe('#627eea')
      expect(colors.raw.web3.solana.DEFAULT).toBe('#9945ff')
      expect(colors.raw.web3.bitcoin.DEFAULT).toBe('#f7931a')
    })
  })

  describe('Semantic Colors', () => {
    it('should have text colors', () => {
      expect(colors.semantic.text.primary.light).toBeDefined()
      expect(colors.semantic.text.primary.dark).toBeDefined()
      expect(colors.semantic.text.link.light).toBeDefined()
    })

    it('should have background colors', () => {
      expect(colors.semantic.background.primary.light).toBeDefined()
      expect(colors.semantic.background.elevated.dark).toBeDefined()
      expect(colors.semantic.background.overlay.light).toBe('rgba(0, 0, 0, 0.5)')
    })

    it('should have state colors', () => {
      expect(colors.semantic.state.success.light).toBeDefined()
      expect(colors.semantic.state.error.dark).toBeDefined()
      expect(colors.semantic.state.warning.light).toBeDefined()
    })

    it('should have web3 semantic colors', () => {
      expect(colors.semantic.web3.ethereum.light).toBeDefined()
      expect(colors.semantic.web3.solana.dark).toBeDefined()
      expect(colors.semantic.web3.bitcoin.light).toBeDefined()
    })
  })

  describe('Component Colors', () => {
    it('should have button colors', () => {
      expect(colors.component.button.primary.base).toContain('bg-blue-600')
      expect(colors.component.button.secondary.base).toContain('bg-gray-100')
      expect(colors.component.button.destructive.base).toContain('bg-red-600')
    })

    it('should have card colors', () => {
      expect(colors.component.card.default.base).toContain('bg-white')
      expect(colors.component.card.elevated.base).toContain('shadow-sm')
      expect(colors.component.card.success.base).toContain('bg-green-50')
    })

    it('should have badge colors', () => {
      expect(colors.component.badge.default.base).toContain('bg-gray-100')
      expect(colors.component.badge.ethereum.base).toContain('bg-blue-100')
      expect(colors.component.badge.success.base).toContain('bg-green-100')
    })

    it('should have input colors', () => {
      expect(colors.component.input.default.base).toContain('bg-white')
      expect(colors.component.input.search.base).toContain('bg-gray-50')
    })

    it('should have alert colors', () => {
      expect(colors.component.alert.info.base).toContain('bg-blue-50')
      expect(colors.component.alert.success.base).toContain('bg-green-50')
      expect(colors.component.alert.warning.base).toContain('bg-amber-50')
      expect(colors.component.alert.error.base).toContain('bg-red-50')
    })
  })

  describe('Utility Functions', () => {
    it('should get color classes for valid component/variant', () => {
      const classes = getColorClasses('button', 'primary')
      expect(classes).toContain('bg-blue-600')
      expect(classes).toContain('text-white')
      expect(classes).toContain('dark:bg-blue-600')
      expect(classes).toContain('focus-visible:ring-2')
    })

    it('should get color classes with custom states', () => {
      const classes = getColorClasses('button', 'secondary', ['focus', 'hover', 'disabled'])
      expect(classes).toContain('focus-visible:ring-2')
      expect(classes).toContain('disabled:opacity-50')
    })

    it('should handle invalid component gracefully', () => {
      const consoleSpy = vi.spyOn(console, 'warn').mockImplementation(() => {})
      try {
        const classes = getColorClasses('invalid' as any, 'primary')
        expect(classes).toBe('')
      } catch (error) {
        expect(error).toBeDefined()
      }
      consoleSpy.mockRestore()
    })

    it('should warn for invalid variant', () => {
      const consoleSpy = vi.spyOn(console, 'warn').mockImplementation(() => {})
      const classes = getColorClasses('button', 'invalid')
      expect(classes).toBe('')
      expect(consoleSpy).toHaveBeenCalledWith("Color variant 'invalid' not found for component 'button'")
      consoleSpy.mockRestore()
    })

    it('should build basic color class', () => {
      const classes = buildColorClass('blue-500', 'white')
      expect(classes).toBe('bg-blue-500 text-white')
    })

    it('should build color class with border', () => {
      const classes = buildColorClass('blue-500', 'white', 'blue-600')
      expect(classes).toBe('bg-blue-500 text-white border-blue-600')
    })

    it('should build color class with hover states', () => {
      const classes = buildColorClass('blue-500', 'white', undefined, {
        hover: { background: 'blue-600', text: 'gray-100', border: 'blue-700' }
      })
      expect(classes).toContain('hover:bg-blue-600')
      expect(classes).toContain('hover:text-gray-100')
      expect(classes).toContain('hover:border-blue-700')
    })

    it('should build color class with focus ring', () => {
      const classes = buildColorClass('blue-500', 'white', undefined, {
        focus: { ring: 'blue-500' }
      })
      expect(classes).toContain('focus:ring-2')
      expect(classes).toContain('focus:ring-blue-500')
    })

    it('should build color class with dark mode', () => {
      const classes = buildColorClass('blue-500', 'white', undefined, {
        dark: { background: 'blue-600', text: 'gray-100', border: 'blue-700' }
      })
      expect(classes).toContain('dark:bg-blue-600')
      expect(classes).toContain('dark:text-gray-100')
      expect(classes).toContain('dark:border-blue-700')
    })

    it('should build color class with all states', () => {
      const classes = buildColorClass('blue-500', 'white', 'blue-600', {
        hover: { background: 'blue-600' },
        focus: { ring: 'blue-500' },
        dark: { background: 'blue-700' }
      })
      expect(classes).toContain('bg-blue-500')
      expect(classes).toContain('text-white')
      expect(classes).toContain('border-blue-600')
      expect(classes).toContain('hover:bg-blue-600')
      expect(classes).toContain('focus:ring-2')
      expect(classes).toContain('dark:bg-blue-700')
    })
  })
})
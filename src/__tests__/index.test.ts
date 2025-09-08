import { describe, it, expect } from 'vitest'
import { colors, designTokens, textVariants, variants, ui } from '../index'

describe('Design System Exports', () => {
  it('should export colors', () => {
    expect(colors).toBeDefined()
    expect(colors.semantic).toBeDefined()
    expect(colors.component).toBeDefined()
  })

  it('should export design tokens', () => {
    expect(designTokens).toBeDefined()
    expect(designTokens.spacing).toBeDefined()
    expect(designTokens.typography).toBeDefined()
  })

  it('should export text variants', () => {
    expect(textVariants).toBeDefined()
    expect(Object.keys(textVariants).length).toBeGreaterThan(0)
  })

  it('should export variants', () => {
    expect(variants).toBeDefined()
    expect(Object.keys(variants).length).toBeGreaterThan(0)
  })

  it('should export ui utilities', () => {
    expect(ui).toBeDefined()
    expect(ui.layout).toBeDefined()
    expect(ui.text).toBeDefined()
  })
})

describe('Design Tokens', () => {
  it('should have consistent spacing scale', () => {
    expect(designTokens.spacing.xs).toBe('p-1')
    expect(designTokens.spacing.sm).toBe('p-2')
    expect(designTokens.spacing.md).toBe('p-4')
    expect(designTokens.spacing.lg).toBe('p-6')
  })

  it('should have typography scale', () => {
    expect(designTokens.typography.size.xs).toBe('text-xs')
    expect(designTokens.typography.size.sm).toBe('text-sm')
    expect(designTokens.typography.size.base).toBe('text-base')
  })

  it('should have animation durations', () => {
    expect(designTokens.animation.fast).toBe('duration-150')
    expect(designTokens.animation.normal).toBe('duration-200')
    expect(designTokens.animation.slow).toBe('duration-300')
  })
})

describe('Colors', () => {
  it('should have semantic colors', () => {
    expect(colors.semantic.text.primary).toBeDefined()
    expect(colors.semantic.background.primary).toBeDefined()
    expect(colors.semantic.border.primary).toBeDefined()
  })

  it('should have component colors', () => {
    expect(colors.component.button.primary).toBeDefined()
    expect(colors.component.card.default).toBeDefined()
    expect(colors.component.badge.default).toBeDefined()
  })

  it('should have utility functions', () => {
    expect(colors.utils.getColorClasses).toBeDefined()
    expect(colors.utils.buildColorClass).toBeDefined()
    expect(typeof colors.utils.getColorClasses).toBe('function')
  })
})
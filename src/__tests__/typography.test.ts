import { describe, it, expect } from 'vitest'
import { textVariants, createTextStyle, combineTextStyles, createResponsiveText } from '../core/typography'

describe('Typography System', () => {
  describe('Heading Variants', () => {
    it('should generate standard heading variants', () => {
      expect(textVariants.heading.h1()).toContain('text-4xl')
      expect(textVariants.heading.h1()).toContain('font-bold')
      expect(textVariants.heading.h1()).toContain('text-gray-900')

      expect(textVariants.heading.h2()).toContain('text-3xl')
      expect(textVariants.heading.h3()).toContain('text-2xl')
      expect(textVariants.heading.h4()).toContain('text-xl')
      expect(textVariants.heading.h5()).toContain('text-lg')
      expect(textVariants.heading.h6()).toContain('text-base')
    })

    it('should generate display heading variants', () => {
      expect(textVariants.heading.display.hero()).toContain('text-8xl')
      expect(textVariants.heading.display.xl()).toContain('text-7xl')
      expect(textVariants.heading.display.lg()).toContain('text-6xl')
      expect(textVariants.heading.display.md()).toContain('text-5xl')
      expect(textVariants.heading.display.sm()).toContain('text-4xl')
    })

    it('should generate responsive heading variants', () => {
      const h1 = textVariants.heading.responsive.h1()
      expect(h1).toContain('text-2xl')
      expect(h1).toContain('sm:text-3xl')
      expect(h1).toContain('md:text-4xl')
      expect(h1).toContain('lg:text-5xl')

      const display = textVariants.heading.responsive.display()
      expect(display).toContain('xl:text-8xl')
    })
  })

  describe('Body Text Variants', () => {
    it('should generate body text sizes', () => {
      expect(textVariants.body.xl()).toContain('text-lg')
      expect(textVariants.body.lg()).toContain('text-base')
      expect(textVariants.body.md()).toContain('text-base')
      expect(textVariants.body.sm()).toContain('text-sm')
      expect(textVariants.body.xs()).toContain('text-xs')
    })

    it('should generate strong body variants', () => {
      expect(textVariants.body.strong.lg()).toContain('font-semibold')
      expect(textVariants.body.strong.lg()).toContain('text-gray-900')
    })

    it('should generate emphasized body variants', () => {
      expect(textVariants.body.emphasis.md()).toContain('font-medium')
      expect(textVariants.body.emphasis.md()).toContain('text-gray-900')
    })

    it('should generate muted body variants', () => {
      expect(textVariants.body.muted.lg()).toContain('text-gray-600')
      expect(textVariants.body.muted.sm()).toContain('dark:text-gray-400')
    })
  })

  describe('Specialized Text', () => {
    it('should generate caption variants', () => {
      expect(textVariants.caption.default()).toContain('text-xs')
      expect(textVariants.caption.emphasis()).toContain('font-medium')
      expect(textVariants.caption.uppercase()).toContain('uppercase')
      expect(textVariants.caption.uppercase()).toContain('tracking-wider')
    })

    it('should generate lead text variants', () => {
      expect(textVariants.lead.lg()).toContain('text-xl')
      expect(textVariants.lead.md()).toContain('text-lg')
      expect(textVariants.lead.sm()).toContain('text-base')
      expect(textVariants.lead.lg()).toContain('leading-relaxed')
    })

    it('should generate link variants', () => {
      expect(textVariants.link.default()).toContain('underline')
      expect(textVariants.link.default()).toContain('text-blue-600')
      expect(textVariants.link.subtle()).toContain('no-underline')
      expect(textVariants.link.muted()).toContain('text-gray-600')
      expect(textVariants.link.external()).toContain('inline-flex')
    })

    it('should generate code variants', () => {
      expect(textVariants.code.inline()).toContain('font-mono')
      expect(textVariants.code.inline()).toContain('px-1.5')
      expect(textVariants.code.block()).toContain('p-4')
      expect(textVariants.code.small()).toContain('text-xs')
    })

    it('should generate label variants', () => {
      expect(textVariants.label.default()).toContain('font-medium')
      expect(textVariants.label.required()).toContain("after:content-['*']")
      expect(textVariants.label.optional()).toContain('text-gray-600')
      expect(textVariants.label.helper()).toContain('text-gray-500')
      expect(textVariants.label.error()).toContain('text-red-600')
      expect(textVariants.label.success()).toContain('text-green-600')
    })
  })

  describe('Web3 Typography', () => {
    it('should generate web3 text variants', () => {
      expect(textVariants.web3.address()).toContain('font-mono')
      expect(textVariants.web3.address()).toContain('break-all')
      expect(textVariants.web3.addressShort()).toContain('font-mono')
      expect(textVariants.web3.hash()).toContain('text-xs')
      expect(textVariants.web3.amount()).toContain('font-medium')
      expect(textVariants.web3.chain()).toContain('font-medium')
      expect(textVariants.web3.symbol()).toContain('uppercase')
    })
  })

  describe('Utility Classes', () => {
    it('should generate truncation utilities', () => {
      expect(textVariants.truncate.line()).toContain('text-ellipsis')
      expect(textVariants.truncate.line()).toContain('whitespace-nowrap')
      expect(textVariants.truncate.lines2()).toBe('line-clamp-2')
      expect(textVariants.truncate.lines3()).toBe('line-clamp-3')
      expect(textVariants.truncate.lines4()).toBe('line-clamp-4')
    })

    it('should generate selection styles', () => {
      expect(textVariants.selection.default()).toContain('selection:bg-blue-200')
      expect(textVariants.selection.brand()).toContain('selection:bg-purple-200')
    })
  })

  describe('Utility Functions', () => {
    it('should create text style with defaults', () => {
      const style = createTextStyle()
      expect(style).toContain('font-sans')
      expect(style).toContain('text-base')
      expect(style).toContain('font-normal')
      expect(style).toContain('text-gray-900')
    })

    it('should create text style with custom parameters', () => {
      const style = createTextStyle('display', 'h1', 'bold', 'text-blue-600')
      expect(style).toContain('font-sans')
      expect(style).toContain('text-4xl')
      expect(style).toContain('font-bold')
      expect(style).toContain('text-blue-600')
    })

    it('should create text style with all options', () => {
      const style = createTextStyle('mono', 'body', 'medium', 'text-green-600', {
        leading: 'loose',
        tracking: 'wide',
        transform: 'uppercase',
        decoration: 'underline'
      })
      expect(style).toContain('font-mono')
      expect(style).toContain('text-base')
      expect(style).toContain('font-medium')
      expect(style).toContain('leading-loose')
      expect(style).toContain('tracking-wide')
      expect(style).toContain('uppercase')
      expect(style).toContain('underline')
      expect(style).toContain('text-green-600')
    })

    it('should combine text styles', () => {
      const combined = combineTextStyles('text-lg', 'font-bold', '', 'text-blue-600')
      expect(combined).toBe('text-lg font-bold text-blue-600')
    })

    it('should combine multiple text styles', () => {
      const combined = combineTextStyles('font-sans', 'text-xl', 'font-semibold', 'leading-tight')
      expect(combined).toBe('font-sans text-xl font-semibold leading-tight')
    })

    it('should create responsive text with some breakpoints', () => {
      const responsive = createResponsiveText('text-base', {
        sm: 'text-lg',
        lg: 'text-xl'
      })
      expect(responsive).toContain('text-base')
      expect(responsive).toContain('sm:text-lg')
      expect(responsive).toContain('lg:text-xl')
      expect(responsive).not.toContain('md:')
    })

    it('should create responsive text with all breakpoints', () => {
      const responsive = createResponsiveText('text-sm', {
        sm: 'text-base',
        md: 'text-lg',
        lg: 'text-xl',
        xl: 'text-2xl',
        '2xl': 'text-3xl'
      })
      expect(responsive).toContain('text-sm')
      expect(responsive).toContain('sm:text-base')
      expect(responsive).toContain('md:text-lg')
      expect(responsive).toContain('lg:text-xl')
      expect(responsive).toContain('xl:text-2xl')
      expect(responsive).toContain('2xl:text-3xl')
    })
  })
})
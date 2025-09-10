import { describe, it, expect, vi } from 'vitest'
import { 
  colors, 
  designTokens, 
  textVariants, 
  variants, 
  ui,
  getColorClasses,
  buildColorClass,
  createTextStyle,
  combineTextStyles,
  createResponsiveText
} from '../index'

describe('Colors System', () => {
  describe('Utility Functions', () => {
    it('should get color classes for button primary', () => {
      const classes = getColorClasses('button', 'primary')
      expect(classes).toContain('bg-blue-600')
      expect(classes).toContain('text-white')
      expect(classes).toContain('dark:bg-blue-600')
    })

    it('should get color classes for button with custom states', () => {
      const classes = getColorClasses('button', 'primary', ['focus', 'hover', 'disabled'])
      expect(classes).toContain('focus-visible:ring-2')
      expect(classes).toContain('disabled:opacity-50')
    })

    it('should warn for invalid component/variant combination', () => {
      const consoleSpy = vi.spyOn(console, 'warn').mockImplementation(() => {})
      const classes = getColorClasses('button', 'invalid')
      expect(classes).toBe('')
      expect(consoleSpy).toHaveBeenCalledWith("Color variant 'invalid' not found for component 'button'")
      consoleSpy.mockRestore()
    })

    it('should build custom color class', () => {
      const classes = buildColorClass('blue-500', 'white', 'blue-600')
      expect(classes).toContain('bg-blue-500')
      expect(classes).toContain('text-white')
      expect(classes).toContain('border-blue-600')
    })

    it('should build color class with hover states', () => {
      const classes = buildColorClass('blue-500', 'white', undefined, {
        hover: { background: 'blue-600', text: 'gray-100' }
      })
      expect(classes).toContain('hover:bg-blue-600')
      expect(classes).toContain('hover:text-gray-100')
    })

    it('should build color class with focus states', () => {
      const classes = buildColorClass('blue-500', 'white', undefined, {
        focus: { ring: 'blue-500' }
      })
      expect(classes).toContain('focus:ring-2')
      expect(classes).toContain('focus:ring-blue-500')
    })

    it('should build color class with dark mode states', () => {
      const classes = buildColorClass('blue-500', 'white', undefined, {
        dark: { background: 'blue-600', text: 'gray-100', border: 'blue-700' }
      })
      expect(classes).toContain('dark:bg-blue-600')
      expect(classes).toContain('dark:text-gray-100')
      expect(classes).toContain('dark:border-blue-700')
    })
  })

  describe('Color Structure', () => {
    it('should have all required color sections', () => {
      expect(colors.raw).toBeDefined()
      expect(colors.semantic).toBeDefined()
      expect(colors.component).toBeDefined()
      expect(colors.utils).toBeDefined()
    })

    it('should have utility functions available', () => {
      expect(colors.utils.getColorClasses).toBeDefined()
      expect(colors.utils.buildColorClass).toBeDefined()
      expect(typeof colors.utils.getColorClasses).toBe('function')
      expect(typeof colors.utils.buildColorClass).toBe('function')
    })
  })
})

describe('Typography System', () => {
  describe('Text Variants', () => {
    it('should generate heading variants', () => {
      expect(textVariants.heading.h1()).toContain('text-4xl')
      expect(textVariants.heading.h2()).toContain('text-3xl')
      expect(textVariants.heading.h3()).toContain('text-2xl')
    })

    it('should generate body text variants', () => {
      expect(textVariants.body.lg()).toContain('text-base')
      expect(textVariants.body.sm()).toContain('text-sm')
      expect(textVariants.body.xs()).toContain('text-xs')
    })

    it('should generate display headings', () => {
      expect(textVariants.heading.display.hero()).toContain('text-8xl')
      expect(textVariants.heading.display.xl()).toContain('text-7xl')
      expect(textVariants.heading.display.lg()).toContain('text-6xl')
    })

    it('should generate responsive headings', () => {
      expect(textVariants.heading.responsive.h1()).toContain('text-2xl')
      expect(textVariants.heading.responsive.h1()).toContain('sm:text-3xl')
      expect(textVariants.heading.responsive.h1()).toContain('md:text-4xl')
    })

    it('should generate strong body variants', () => {
      expect(textVariants.body.strong.lg()).toContain('font-semibold')
      expect(textVariants.body.emphasis.md()).toContain('font-medium')
      expect(textVariants.body.muted.sm()).toContain('text-gray-600')
    })

    it('should generate link variants', () => {
      expect(textVariants.link.default()).toContain('underline')
      expect(textVariants.link.subtle()).toContain('no-underline')
      expect(textVariants.link.muted()).toContain('text-gray-600')
      expect(textVariants.link.external()).toContain('inline-flex')
    })

    it('should generate code variants', () => {
      expect(textVariants.code.inline()).toContain('font-mono')
      expect(textVariants.code.block()).toContain('p-4')
      expect(textVariants.code.small()).toContain('text-xs')
    })

    it('should generate label variants', () => {
      expect(textVariants.label.default()).toContain('font-medium')
      expect(textVariants.label.required()).toContain("after:content-['*']")
      expect(textVariants.label.error()).toContain('text-red-600')
    })

    it('should generate web3 specific variants', () => {
      expect(textVariants.web3.address()).toContain('font-mono')
      expect(textVariants.web3.amount()).toContain('font-medium')
      expect(textVariants.web3.symbol()).toContain('uppercase')
    })

    it('should generate truncation utilities', () => {
      expect(textVariants.truncate.line()).toContain('text-ellipsis')
      expect(textVariants.truncate.lines2()).toContain('line-clamp-2')
      expect(textVariants.truncate.lines3()).toContain('line-clamp-3')
    })
  })

  describe('Typography Utility Functions', () => {
    it('should create custom text style with defaults', () => {
      const style = createTextStyle()
      expect(style).toContain('font-sans')
      expect(style).toContain('text-base')
      expect(style).toContain('font-normal')
    })

    it('should create custom text style with parameters', () => {
      const style = createTextStyle('display', 'h1', 'bold', 'text-blue-600')
      expect(style).toContain('font-sans')
      expect(style).toContain('text-4xl')
      expect(style).toContain('font-bold')
      expect(style).toContain('text-blue-600')
    })

    it('should create text style with options', () => {
      const style = createTextStyle('body', 'body', 'normal', 'text-gray-900', {
        leading: 'loose',
        tracking: 'wide',
        transform: 'uppercase',
        decoration: 'underline'
      })
      expect(style).toContain('leading-loose')
      expect(style).toContain('tracking-wide')
      expect(style).toContain('uppercase')
      expect(style).toContain('underline')
    })

    it('should combine text styles', () => {
      const combined = combineTextStyles('text-lg', 'font-bold', '', 'text-blue-600')
      expect(combined).toBe('text-lg font-bold text-blue-600')
    })

    it('should create responsive text styles', () => {
      const responsive = createResponsiveText('text-base', {
        sm: 'text-lg',
        md: 'text-xl',
        lg: 'text-2xl'
      })
      expect(responsive).toContain('text-base')
      expect(responsive).toContain('sm:text-lg')
      expect(responsive).toContain('md:text-xl')
      expect(responsive).toContain('lg:text-2xl')
    })

    it('should create responsive text with all breakpoints', () => {
      const responsive = createResponsiveText('text-sm', {
        sm: 'text-base',
        md: 'text-lg',
        lg: 'text-xl',
        xl: 'text-2xl',
        '2xl': 'text-3xl'
      })
      expect(responsive).toContain('2xl:text-3xl')
    })
  })
})

describe('Component Variants', () => {
  describe('Button Variants', () => {
    it('should generate primary button variants', () => {
      expect(variants.button.primary.default()).toContain('bg-blue-600')
      expect(variants.button.primary.small()).toContain('px-3')
      expect(variants.button.primary.large()).toContain('px-6')
    })

    it('should generate secondary button variants', () => {
      expect(variants.button.secondary.default()).toContain('bg-gray-100')
      expect(variants.button.secondary.small()).toContain('text-xs')
    })

    it('should generate outline button variants', () => {
      expect(variants.button.outline.default()).toContain('border')
      expect(variants.button.outline.default()).toContain('bg-transparent')
    })

    it('should generate destructive button variants', () => {
      expect(variants.button.destructive.default()).toContain('bg-red-600')
      expect(variants.button.destructive.outline()).toContain('text-red-600')
    })

    it('should generate ghost button variants', () => {
      expect(variants.button.ghost.default()).toContain('bg-transparent')
      expect(variants.button.ghost.icon()).toContain('h-10 w-10')
    })

    it('should generate link button variants', () => {
      expect(variants.button.link.default()).toContain('underline-offset-4')
      expect(variants.button.link.muted()).toContain('text-gray-600')
    })

    it('should generate gradient button variants', () => {
      expect(variants.button.gradient.primary()).toContain('bg-gradient-to-r')
      expect(variants.button.gradient.success()).toContain('from-green-500')
    })

    it('should generate web3 button variants', () => {
      expect(variants.button.web3.wallet()).toContain('border')
      expect(variants.button.web3.connect()).toContain('bg-gradient-to-r')
      expect(variants.button.web3.disconnect()).toContain('text-red-600')
    })
  })

  describe('Card Variants', () => {
    it('should generate default card variants', () => {
      expect(variants.card.default.base()).toContain('bg-white')
      expect(variants.card.default.padded()).toContain('p-6')
      expect(variants.card.default.interactive()).toContain('cursor-pointer')
    })

    it('should generate elevated card variants', () => {
      expect(variants.card.elevated.base()).toContain('shadow-sm')
      expect(variants.card.elevated.interactive()).toContain('hover:shadow-lg')
    })

    it('should generate state card variants', () => {
      expect(variants.card.state.success()).toContain('bg-green-50')
      expect(variants.card.state.error()).toContain('bg-red-50')
      expect(variants.card.state.warning()).toContain('bg-amber-50')
      expect(variants.card.state.info()).toContain('bg-blue-50')
    })
  })

  describe('Badge Variants', () => {
    it('should generate basic badge variants', () => {
      expect(variants.badge.default()).toContain('bg-gray-100')
      expect(variants.badge.primary()).toContain('bg-blue-100')
      expect(variants.badge.success()).toContain('bg-green-100')
      expect(variants.badge.warning()).toContain('bg-amber-100')
      expect(variants.badge.error()).toContain('bg-red-100')
    })

    it('should generate web3 badge variants', () => {
      expect(variants.badge.ethereum()).toContain('bg-blue-100')
      expect(variants.badge.solana()).toContain('bg-purple-100')
    })
  })
})

describe('UI Utilities', () => {
  it('should have layout utilities', () => {
    expect(ui.layout).toBeDefined()
    expect(ui.layout.container).toBeDefined()
    expect(ui.layout.section).toBeDefined()
    expect(ui.layout.grid).toBeDefined()
    expect(ui.layout.flex).toBeDefined()
  })

  it('should have text utilities', () => {
    expect(ui.text).toBeDefined()
    expect(ui.text.h1).toBeDefined()
    expect(ui.text.body).toBeDefined()
    expect(ui.text.link).toBeDefined()
    expect(ui.text.code).toBeDefined()
  })

  it('should have interactive utilities', () => {
    expect(ui.states).toBeDefined()
    expect(ui.states.focus).toBeDefined()
    expect(ui.states.hover).toBeDefined()
    expect(ui.states.disabled).toBeDefined()
  })

  it('should have web3 utilities', () => {
    expect(ui.web3).toBeDefined()
    expect(ui.web3.walletButton).toBeDefined()
    expect(ui.web3.chainBadge).toBeDefined()
  })
})

describe('Design Tokens Completeness', () => {
  it('should have complete spacing tokens', () => {
    expect(designTokens.spacing.xs).toBe('p-1')
    expect(designTokens.spacing.sm).toBe('p-2')
    expect(designTokens.spacing.md).toBe('p-4')
    expect(designTokens.spacing.lg).toBe('p-6')
    expect(designTokens.spacing.xl).toBe('p-8')
    expect(designTokens.spacing['2xl']).toBe('p-12')
  })

  it('should have complete typography tokens', () => {
    expect(designTokens.typography.family.sans).toBe('font-sans')
    expect(designTokens.typography.size.base).toBe('text-base')
    expect(designTokens.typography.weight.bold).toBe('font-bold')
    expect(designTokens.typography.leading.normal).toBe('leading-normal')
  })

  it('should have animation tokens', () => {
    expect(designTokens.animation.fast).toBe('duration-150')
    expect(designTokens.animation.normal).toBe('duration-200')
    expect(designTokens.animation.slow).toBe('duration-300')
  })

  it('should have z-index tokens', () => {
    expect(designTokens.zIndex.modal).toBe('z-60')
    expect(designTokens.zIndex.tooltip).toBe('z-100')
    expect(designTokens.zIndex.overlay).toBe('z-50')
  })
})

describe('Main Index Exports', () => {
  it('should export all main objects', () => {
    expect(colors).toBeDefined()
    expect(designTokens).toBeDefined()
    expect(textVariants).toBeDefined()
    expect(variants).toBeDefined()
    expect(ui).toBeDefined()
  })

  it('should export utility functions', () => {
    expect(getColorClasses).toBeDefined()
    expect(buildColorClass).toBeDefined()
    expect(createTextStyle).toBeDefined()
    expect(combineTextStyles).toBeDefined()
    expect(createResponsiveText).toBeDefined()
  })

  it('should export capitalized aliases', async () => {
    const indexModule = await import('../index')
    expect(indexModule.Colors).toBeDefined()
    expect(indexModule.Tokens).toBeDefined()
    expect(indexModule.Typography).toBeDefined()
    expect(indexModule.Variants).toBeDefined()
  })

  it('should export utility functions', () => {
    expect(getColorClasses).toBeDefined()
    expect(buildColorClass).toBeDefined()
    expect(createTextStyle).toBeDefined()
    expect(combineTextStyles).toBeDefined()
    expect(createResponsiveText).toBeDefined()
    expect(typeof getColorClasses).toBe('function')
    expect(typeof buildColorClass).toBe('function')
    expect(typeof createTextStyle).toBe('function')
    expect(typeof combineTextStyles).toBe('function')
    expect(typeof createResponsiveText).toBe('function')
  })
})
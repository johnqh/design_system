import { describe, it, expect } from 'vitest'
import { variants } from '../variants'

describe('Component Variants', () => {
  describe('Button Variants', () => {
    describe('Primary Buttons', () => {
      it('should generate primary button variants', () => {
        expect(variants.button.primary.default()).toContain('bg-blue-600')
        expect(variants.button.primary.default()).toContain('text-white')
        expect(variants.button.primary.default()).toContain('hover:bg-blue-700')
        expect(variants.button.primary.default()).toContain('focus-visible:ring-2')
        expect(variants.button.primary.default()).toContain('disabled:opacity-50')
      })

      it('should generate primary button sizes', () => {
        expect(variants.button.primary.small()).toContain('px-3')
        expect(variants.button.primary.small()).toContain('py-1.5')
        expect(variants.button.primary.small()).toContain('text-xs')
        expect(variants.button.primary.small()).toContain('h-8')

        expect(variants.button.primary.large()).toContain('px-6')
        expect(variants.button.primary.large()).toContain('py-3')
        expect(variants.button.primary.large()).toContain('text-base')
        expect(variants.button.primary.large()).toContain('h-12')
      })

      it('should generate primary button with icon', () => {
        expect(variants.button.primary.withIcon()).toContain('gap-2')
      })

      it('should generate full width primary button', () => {
        expect(variants.button.primary.fullWidth()).toContain('w-full')
        expect(variants.button.primary.fullWidth()).toContain('flex')
      })
    })

    describe('Secondary Buttons', () => {
      it('should generate secondary button variants', () => {
        expect(variants.button.secondary.default()).toContain('bg-gray-100')
        expect(variants.button.secondary.default()).toContain('text-gray-900')
        expect(variants.button.secondary.default()).toContain('hover:bg-gray-200')
      })

      it('should generate secondary button sizes', () => {
        expect(variants.button.secondary.small()).toContain('h-8')
        expect(variants.button.secondary.large()).toContain('h-12')
      })
    })

    describe('Outline Buttons', () => {
      it('should generate outline button variants', () => {
        expect(variants.button.outline.default()).toContain('bg-transparent')
        expect(variants.button.outline.default()).toContain('border')
        expect(variants.button.outline.default()).toContain('border-gray-300')
        expect(variants.button.outline.default()).toContain('hover:bg-gray-50')
      })
    })

    describe('Destructive Buttons', () => {
      it('should generate destructive button variants', () => {
        expect(variants.button.destructive.default()).toContain('bg-red-600')
        expect(variants.button.destructive.default()).toContain('text-white')
        
        expect(variants.button.destructive.outline()).toContain('text-red-600')
        expect(variants.button.destructive.outline()).toContain('border-red-300')
      })
    })

    describe('Ghost Buttons', () => {
      it('should generate ghost button variants', () => {
        expect(variants.button.ghost.default()).toContain('bg-transparent')
        expect(variants.button.ghost.default()).toContain('hover:bg-gray-100')

        expect(variants.button.ghost.icon()).toContain('h-10')
        expect(variants.button.ghost.icon()).toContain('w-10')
      })
    })

    describe('Link Buttons', () => {
      it('should generate link button variants', () => {
        expect(variants.button.link.default()).toContain('text-blue-600')
        expect(variants.button.link.default()).toContain('underline-offset-4')
        expect(variants.button.link.default()).toContain('hover:underline')
        
        expect(variants.button.link.muted()).toContain('text-gray-600')
      })
    })

    describe('Gradient Buttons', () => {
      it('should generate gradient button variants', () => {
        expect(variants.button.gradient.primary()).toContain('bg-gradient-to-r')
        expect(variants.button.gradient.primary()).toContain('from-blue-600')
        expect(variants.button.gradient.primary()).toContain('to-purple-600')
        
        expect(variants.button.gradient.success()).toContain('from-green-500')
        expect(variants.button.gradient.success()).toContain('to-emerald-600')
      })
    })

    describe('Web3 Buttons', () => {
      it('should generate web3 button variants', () => {
        expect(variants.button.web3.wallet()).toContain('border')
        expect(variants.button.web3.wallet()).toContain('gap-2')
        
        expect(variants.button.web3.connect()).toContain('bg-gradient-to-r')
        expect(variants.button.web3.connect()).toContain('gap-2')
        
        expect(variants.button.web3.disconnect()).toContain('text-red-600')
        expect(variants.button.web3.disconnect()).toContain('border-red-300')
      })
    })
  })

  describe('Card Variants', () => {
    describe('Default Cards', () => {
      it('should generate default card variants', () => {
        expect(variants.card.default.base()).toContain('bg-white')
        expect(variants.card.default.base()).toContain('border')
        expect(variants.card.default.base()).toContain('rounded-lg')
        
        expect(variants.card.default.padded()).toContain('p-6')
        
        expect(variants.card.default.interactive()).toContain('cursor-pointer')
        expect(variants.card.default.interactive()).toContain('hover:shadow-md')
      })
    })

    describe('Elevated Cards', () => {
      it('should generate elevated card variants', () => {
        expect(variants.card.elevated.base()).toContain('shadow-sm')
        
        expect(variants.card.elevated.interactive()).toContain('hover:shadow-lg')
      })
    })

    describe('State Cards', () => {
      it('should generate state card variants', () => {
        expect(variants.card.state.success()).toContain('bg-green-50')
        expect(variants.card.state.success()).toContain('border-green-200')
        expect(variants.card.state.success()).toContain('text-green-800')
        
        expect(variants.card.state.warning()).toContain('bg-amber-50')
        expect(variants.card.state.warning()).toContain('border-amber-200')
        
        expect(variants.card.state.error()).toContain('bg-red-50')
        expect(variants.card.state.error()).toContain('border-red-200')
        
        expect(variants.card.state.info()).toContain('bg-blue-50')
        expect(variants.card.state.info()).toContain('border-blue-200')
      })
    })
  })

  describe('Badge Variants', () => {
    it('should generate basic badge variants', () => {
      expect(variants.badge.default()).toContain('bg-gray-100')
      expect(variants.badge.default()).toContain('text-gray-800')
      expect(variants.badge.default()).toContain('px-2.5')
      expect(variants.badge.default()).toContain('py-0.5')
      expect(variants.badge.default()).toContain('rounded-full')
      expect(variants.badge.default()).toContain('text-xs')
      
      expect(variants.badge.primary()).toContain('bg-blue-100')
      expect(variants.badge.success()).toContain('bg-green-100')
      expect(variants.badge.warning()).toContain('bg-amber-100')
      expect(variants.badge.error()).toContain('bg-red-100')
    })

    it('should generate web3 badge variants', () => {
      expect(variants.badge.ethereum()).toContain('bg-blue-100')
      expect(variants.badge.solana()).toContain('bg-purple-100')
    })

    it('should generate badge size variants', () => {
      expect(variants.badge.small()).toContain('px-2')
      expect(variants.badge.small()).toContain('py-0.5')
      expect(variants.badge.small()).toContain('text-xs')
      
      expect(variants.badge.small('primary')).toContain('bg-blue-100')
      expect(variants.badge.small('success')).toContain('bg-green-100')
      expect(variants.badge.small('warning')).toContain('bg-amber-100')
      expect(variants.badge.small('error')).toContain('bg-red-100')
      expect(variants.badge.small('invalid')).toContain('bg-gray-100')

      expect(variants.badge.large()).toContain('px-3')
      expect(variants.badge.large()).toContain('py-1')
      expect(variants.badge.large()).toContain('text-sm')
      
      expect(variants.badge.large('primary')).toContain('bg-blue-100')
      expect(variants.badge.large('success')).toContain('bg-green-100')
    })
  })

  // Note: Only testing variants that actually exist in the variants.ts file
  // Other UI utilities are tested in the ui object from index.ts
})
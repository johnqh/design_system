import { describe, it, expect } from 'vitest';
import { ui } from '../index';

describe('UI Utilities', () => {
  describe('Layout Utilities', () => {
    it('should have container variants', () => {
      expect(ui.layout.container).toContain('max-w-7xl');
      expect(ui.layout.container).toContain('mx-auto');
      expect(ui.layout.container).toContain('px-4');

      expect(ui.layout.containerSmall).toContain('max-w-3xl');
      expect(ui.layout.containerLarge).toContain('max-w-full');
    });

    it('should have section variants', () => {
      expect(ui.layout.section).toContain('py-8');
      expect(ui.layout.sectionSmall).toContain('py-6');
    });

    it('should have flex variants', () => {
      expect(ui.layout.flex).toContain('flex');
      expect(ui.layout.flex).toContain('items-center');
      expect(ui.layout.flex).toContain('justify-between');

      expect(ui.layout.flexCenter).toContain('justify-center');
      expect(ui.layout.flexCol).toContain('flex-col');
    });

    it('should have grid variants', () => {
      expect(ui.layout.grid).toContain('grid');
      expect(ui.layout.grid).toContain('gap-6');
      expect(ui.layout.gridMd).toContain('md:grid-cols-2');
      expect(ui.layout.gridLg).toContain('lg:grid-cols-3');
    });
  });

  describe('Background Utilities', () => {
    it('should have background variants', () => {
      expect(ui.background.surface).toContain('bg-white');
      expect(ui.background.surface).toContain('dark:bg-gray-800');
      expect(ui.background.subtle).toContain('bg-gray-50');
      expect(ui.background.muted).toContain('bg-gray-100');
      expect(ui.background.overlay).toContain('bg-black/50');
    });
  });

  describe('Border Utilities', () => {
    it('should have border variants', () => {
      expect(ui.border.default).toContain('border-gray-200');
      expect(ui.border.default).toContain('dark:border-gray-700');
      expect(ui.border.subtle).toContain('border-gray-100');
      expect(ui.border.radius).toBe('rounded-lg');
      expect(ui.border.radiusSm).toBe('rounded-md');
      expect(ui.border.radiusFull).toBe('rounded-full');
    });
  });

  describe('Shadow Utilities', () => {
    it('should have shadow variants', () => {
      expect(ui.shadow.sm).toBe('shadow-sm');
      expect(ui.shadow.md).toBe('shadow-md');
      expect(ui.shadow.lg).toBe('shadow-lg');
      expect(ui.shadow.xl).toBe('shadow-xl');
    });
  });

  describe('Spacing Utilities', () => {
    it('should have card spacing', () => {
      expect(ui.spacing.card.sm).toBe('p-4');
      expect(ui.spacing.card.md).toBe('p-6');
      expect(ui.spacing.card.lg).toBe('p-8');
    });

    it('should have section spacing', () => {
      expect(ui.spacing.section.sm).toBe('py-6 px-4');
      expect(ui.spacing.section.md).toBe('py-8 px-6');
      expect(ui.spacing.section.lg).toBe('py-12 px-8');
    });
  });

  describe('Text Utilities', () => {
    it('should have heading variants', () => {
      expect(ui.text.h1).toContain('text-3xl');
      expect(ui.text.h1).toContain('font-bold');
      expect(ui.text.h2).toContain('text-2xl');
      expect(ui.text.h3).toContain('text-xl');
      expect(ui.text.h4).toContain('text-lg');
      expect(ui.text.h5).toContain('text-base');
      expect(ui.text.h6).toContain('text-base');
    });

    it('should have display text variants', () => {
      expect(ui.text.display).toContain('text-4xl');
      expect(ui.text.display).toContain('font-extrabold');
      expect(ui.text.hero).toContain('text-6xl');
      expect(ui.text.hero).toContain('font-black');
    });

    it('should have body text variants', () => {
      expect(ui.text.body).toContain('text-base');
      expect(ui.text.body).toContain('font-normal');
      expect(ui.text.bodyLarge).toContain('text-lg');
      expect(ui.text.bodySmall).toContain('text-sm');
    });

    it('should have specialized text variants', () => {
      expect(ui.text.lead).toContain('text-xl');
      expect(ui.text.leadLarge).toContain('text-2xl');
      expect(ui.text.caption).toContain('text-sm');
      expect(ui.text.label).toContain('font-medium');
      expect(ui.text.helper).toContain('text-gray-500');
    });

    it('should have link variants', () => {
      expect(ui.text.link).toContain('text-blue-600');
      expect(ui.text.link).toContain('underline');
      expect(ui.text.linkSubtle).toContain('no-underline');
      expect(ui.text.linkMuted).toContain('text-gray-600');
    });

    it('should have code variants', () => {
      expect(ui.text.code).toContain('font-mono');
      expect(ui.text.code).toContain('bg-gray-100');
      expect(ui.text.codeBlock).toContain('p-4');
      expect(ui.text.codeBlock).toContain('rounded-lg');
    });

    it('should have status text variants', () => {
      expect(ui.text.success).toContain('text-green-700');
      expect(ui.text.warning).toContain('text-amber-700');
      expect(ui.text.error).toContain('text-red-700');
      expect(ui.text.info).toContain('text-blue-700');
    });

    it('should have emphasis variants', () => {
      expect(ui.text.emphasis).toContain('font-medium');
      expect(ui.text.strong).toContain('font-semibold');
      expect(ui.text.muted).toContain('text-gray-500');
      expect(ui.text.uppercase).toContain('uppercase');
      expect(ui.text.uppercase).toContain('tracking-wider');
    });
  });

  describe('Transition Utilities', () => {
    it('should have transition variants', () => {
      expect(ui.transition.default).toBe('transition-colors duration-200');
      expect(ui.transition.all).toBe('transition-all duration-200');
      expect(ui.transition.fast).toBe('transition-all duration-150');
      expect(ui.transition.slow).toBe('transition-all duration-300');
      expect(ui.transition.transform).toBe('transition-transform duration-200');
    });
  });

  describe('State Utilities', () => {
    it('should have interactive states', () => {
      expect(ui.states.hover).toContain('hover:opacity-80');
      expect(ui.states.focus).toContain('focus:ring-2');
      expect(ui.states.focus).toContain('focus:ring-blue-500');
      expect(ui.states.disabled).toContain('disabled:opacity-50');
      expect(ui.states.disabled).toContain('disabled:cursor-not-allowed');
      expect(ui.states.loading).toBe('animate-pulse');
    });
  });

  describe('Web3 Utilities', () => {
    it('should have wallet button utility', () => {
      expect(ui.web3.walletButton).toContain('bg-white');
      expect(ui.web3.walletButton).toContain('border');
      expect(ui.web3.walletButton).toContain('gap-2');
      expect(ui.web3.walletButton).toContain('rounded-lg');
    });

    it('should have chain badge function', () => {
      const ethereumBadge = ui.web3.chainBadge('ethereum');
      expect(ethereumBadge).toContain('bg-blue-100');
      expect(ethereumBadge).toContain('text-blue-800');

      const solanaBadge = ui.web3.chainBadge('solana');
      expect(solanaBadge).toContain('bg-purple-100');
      expect(solanaBadge).toContain('text-purple-800');
    });

    it('should have address text utility', () => {
      expect(ui.web3.addressText).toContain('font-mono');
      expect(ui.web3.addressText).toContain('text-sm');
    });
  });
});

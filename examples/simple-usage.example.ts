/**
 * Simple Usage Example - No React Dependencies
 * Platform-agnostic variant usage
 */

import { variants as designSystemVariants } from '../src/index';
import { createQuickVariants } from '../src/simple-variants';

// Setup variant resolver
const v = createQuickVariants(designSystemVariants);

// Simple usage examples
const primaryButton = v.button('primary');
const secondaryAlert = v.alert('secondary');
const defaultInput = v.input('default');

// With sizes
const smallButton = v.button('primary', 'sm');
const largeButton = v.button('secondary', 'lg');

// Nested variants
const gradientButton = v.nested('button.gradient.primary');
const webThreeButton = v.nested('button.web3.connect');

// Generic access
const customBadge = v.get('badge', 'outline');
const dotNotation = v.get('button.primary');

// Export examples for testing
export {
  primaryButton,
  secondaryAlert,
  defaultInput,
  smallButton,
  largeButton,
  gradientButton,
  webThreeButton,
  customBadge,
  dotNotation,
};
/**
 * @johnqh/design-system
 * 
 * A platform-agnostic design system providing colors, typography, spacing,
 * and component variants for consistent UI across web and React Native.
 * 
 * @version 1.0.0
 * @author John Q Huang
 * @license MIT
 */

// Export core design tokens
export * from './colors';
export * from './tokens';
export * from './typography';
export * from './variants';

// Re-export commonly used functions and types
export { colors } from './colors';
export { designTokens, spacing, radius, typography, animation, zIndex, breakpoints, shadows } from './tokens';
export { textVariants, headingVariants, bodyVariants, specializedVariants } from './typography';
export { variants, buttonVariants, cardVariants, badgeVariants, inputVariants } from './variants';

// Export utility types
export type {
  TextStyle,
  ResponsiveTextStyle,
} from './typography';

export type {
  ComponentVariant,
  SizeVariant,
} from './variants';

// Default export with organized structure
import { colors } from './colors';
import { designTokens } from './tokens';
import { textVariants } from './typography';
import { variants } from './variants';

export default {
  colors,
  tokens: designTokens,
  typography: textVariants,
  variants,
  
  // Version information
  version: '1.0.0',
  
  // Platform compatibility
  platforms: ['web', 'react-native'] as const,
  
  // Utilities
  utils: {
    // Color utilities
    getSemanticColor: (colorName: string, theme: 'light' | 'dark' = 'light') => {
      if (colorName === 'primary') return theme === 'dark' ? '#ffffff' : '#111827';
      if (colorName === 'secondary') return theme === 'dark' ? '#9ca3af' : '#4b5563';
      return theme === 'dark' ? '#ffffff' : '#111827';
    },
    
    // Spacing utilities
    getSpacing: (size: keyof typeof designTokens.spacing) => designTokens.spacing[size],
    
    // Typography utilities
    getFontSize: (size: keyof typeof designTokens.typography.size) => designTokens.typography.size[size],
  },
};
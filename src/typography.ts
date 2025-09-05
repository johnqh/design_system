/**
 * Platform-Agnostic Typography Variants
 * 
 * Pre-built text style configurations that combine font families, sizes, weights,
 * and other typography properties into ready-to-use text styles.
 * 
 * These variants return structured data that can be used by platform-specific
 * components to generate appropriate styles (CSS for web, StyleSheet for React Native).
 */

import { typography } from './tokens';

// =============================================================================
// TYPE DEFINITIONS
// =============================================================================

export interface TextStyle {
  fontFamily: string;
  fontSize: number;
  fontWeight: number;
  lineHeight: number;
  letterSpacing: number;
  textTransform?: 'none' | 'uppercase' | 'lowercase' | 'capitalize';
  textDecoration?: 'none' | 'underline' | 'line-through';
  color?: string;
}

export interface ResponsiveTextStyle {
  base: TextStyle;
  sm?: Partial<TextStyle>;
  md?: Partial<TextStyle>;
  lg?: Partial<TextStyle>;
  xl?: Partial<TextStyle>;
  '2xl'?: Partial<TextStyle>;
}

// =============================================================================
// HEADING VARIANTS
// =============================================================================

export const headingVariants = {
  // Display headings (hero sections, landing pages)
  display: {
    hero: {
      fontSize: typography.semantic.hero,
      fontWeight: typography.weight.display,
      lineHeight: typography.leading.display,
      letterSpacing: typography.tracking.heading,
    },
    xl: {
      fontSize: 96,
      fontWeight: typography.weight.display,
      lineHeight: typography.leading.display,
      letterSpacing: typography.tracking.heading,
    },
    lg: {
      fontSize: 72,
      fontWeight: typography.weight.bold,
      lineHeight: typography.leading.display,
      letterSpacing: typography.tracking.heading,
    },
    md: {
      fontSize: typography.semantic.display,
      fontWeight: typography.weight.bold,
      lineHeight: typography.leading.tight,
      letterSpacing: typography.tracking.heading,
    },
    sm: {
      fontSize: typography.semantic.h1,
      fontWeight: typography.weight.bold,
      lineHeight: typography.leading.tight,
      letterSpacing: typography.tracking.heading,
    },
  },

  // Standard headings (H1-H6)
  h1: {
    fontSize: typography.semantic.h1,
    fontWeight: typography.weight.heading,
    lineHeight: typography.leading.heading,
    letterSpacing: typography.tracking.heading,
  },
  h2: {
    fontSize: typography.semantic.h2,
    fontWeight: typography.weight.heading,
    lineHeight: typography.leading.heading,
    letterSpacing: typography.tracking.heading,
  },
  h3: {
    fontSize: typography.semantic.h3,
    fontWeight: typography.weight.heading,
    lineHeight: typography.leading.heading,
    letterSpacing: typography.tracking.heading,
  },
  h4: {
    fontSize: typography.semantic.h4,
    fontWeight: typography.weight.semibold,
    lineHeight: typography.leading.heading,
    letterSpacing: typography.tracking.heading,
  },
  h5: {
    fontSize: typography.semantic.h5,
    fontWeight: typography.weight.semibold,
    lineHeight: typography.leading.heading,
    letterSpacing: typography.tracking.heading,
  },
  h6: {
    fontSize: typography.semantic.h6,
    fontWeight: typography.weight.semibold,
    lineHeight: typography.leading.heading,
    letterSpacing: typography.tracking.heading,
  },

  // Responsive headings
  responsive: {
    h1: {
      base: {
        fontSize: typography.size['2xl'],
        fontWeight: typography.weight.heading,
        lineHeight: typography.leading.heading,
        letterSpacing: typography.tracking.heading,
      },
      sm: { fontSize: typography.size['3xl'] },
      md: { fontSize: typography.size['4xl'] },
      lg: { fontSize: typography.size['5xl'] },
    } as ResponsiveTextStyle,
    h2: {
      base: {
        fontSize: typography.size.xl,
        fontWeight: typography.weight.heading,
        lineHeight: typography.leading.heading,
        letterSpacing: typography.tracking.heading,
      },
      sm: { fontSize: typography.size['2xl'] },
      md: { fontSize: typography.size['3xl'] },
      lg: { fontSize: typography.size['4xl'] },
    } as ResponsiveTextStyle,
    h3: {
      base: {
        fontSize: typography.size.lg,
        fontWeight: typography.weight.semibold,
        lineHeight: typography.leading.heading,
        letterSpacing: typography.tracking.heading,
      },
      sm: { fontSize: typography.size.xl },
      md: { fontSize: typography.size['2xl'] },
      lg: { fontSize: typography.size['3xl'] },
    } as ResponsiveTextStyle,
  },
} as const;

// =============================================================================
// BODY TEXT VARIANTS
// =============================================================================

export const bodyVariants = {
  // Standard body text
  xl: {
    fontSize: typography.semantic.bodyLarge,
    fontWeight: typography.weight.body,
    lineHeight: typography.leading.body,
    letterSpacing: typography.tracking.body,
  },
  lg: {
    fontSize: typography.semantic.body,
    fontWeight: typography.weight.body,
    lineHeight: typography.leading.body,
    letterSpacing: typography.tracking.body,
  },
  md: {
    fontSize: typography.semantic.body,
    fontWeight: typography.weight.body,
    lineHeight: typography.leading.body,
    letterSpacing: typography.tracking.body,
  },
  sm: {
    fontSize: typography.semantic.small,
    fontWeight: typography.weight.body,
    lineHeight: typography.leading.body,
    letterSpacing: typography.tracking.body,
  },
  xs: {
    fontSize: typography.semantic.caption,
    fontWeight: typography.weight.body,
    lineHeight: typography.leading.body,
    letterSpacing: typography.tracking.body,
  },

  // Emphasized variants
  strong: {
    xl: {
      fontSize: typography.semantic.bodyLarge,
      fontWeight: typography.weight.strong,
      lineHeight: typography.leading.body,
      letterSpacing: typography.tracking.body,
    },
    lg: {
      fontSize: typography.semantic.body,
      fontWeight: typography.weight.strong,
      lineHeight: typography.leading.body,
      letterSpacing: typography.tracking.body,
    },
    md: {
      fontSize: typography.semantic.body,
      fontWeight: typography.weight.strong,
      lineHeight: typography.leading.body,
      letterSpacing: typography.tracking.body,
    },
    sm: {
      fontSize: typography.semantic.small,
      fontWeight: typography.weight.strong,
      lineHeight: typography.leading.body,
      letterSpacing: typography.tracking.body,
    },
  },

  emphasis: {
    xl: {
      fontSize: typography.semantic.bodyLarge,
      fontWeight: typography.weight.emphasis,
      lineHeight: typography.leading.body,
      letterSpacing: typography.tracking.body,
    },
    lg: {
      fontSize: typography.semantic.body,
      fontWeight: typography.weight.emphasis,
      lineHeight: typography.leading.body,
      letterSpacing: typography.tracking.body,
    },
    md: {
      fontSize: typography.semantic.body,
      fontWeight: typography.weight.emphasis,
      lineHeight: typography.leading.body,
      letterSpacing: typography.tracking.body,
    },
    sm: {
      fontSize: typography.semantic.small,
      fontWeight: typography.weight.emphasis,
      lineHeight: typography.leading.body,
      letterSpacing: typography.tracking.body,
    },
  },
} as const;

// =============================================================================
// SPECIALIZED TEXT VARIANTS
// =============================================================================

export const specializedVariants = {
  // Caption text
  caption: {
    default: {
      fontSize: typography.semantic.caption,
      fontWeight: typography.weight.body,
      lineHeight: typography.leading.caption,
      letterSpacing: typography.tracking.caption,
    },
    emphasis: {
      fontSize: typography.semantic.caption,
      fontWeight: typography.weight.emphasis,
      lineHeight: typography.leading.caption,
      letterSpacing: typography.tracking.caption,
    },
    uppercase: {
      fontSize: typography.semantic.caption,
      fontWeight: typography.weight.emphasis,
      lineHeight: typography.leading.caption,
      letterSpacing: typography.tracking.uppercase,
      textTransform: 'uppercase' as const,
    },
  },

  // Lead text (introduction paragraphs)
  lead: {
    lg: {
      fontSize: typography.size.xl,
      fontWeight: typography.weight.body,
      lineHeight: typography.leading.relaxed,
      letterSpacing: typography.tracking.body,
    },
    md: {
      fontSize: typography.semantic.bodyLarge,
      fontWeight: typography.weight.body,
      lineHeight: typography.leading.relaxed,
      letterSpacing: typography.tracking.body,
    },
    sm: {
      fontSize: typography.semantic.body,
      fontWeight: typography.weight.body,
      lineHeight: typography.leading.relaxed,
      letterSpacing: typography.tracking.body,
    },
  },

  // Links
  link: {
    default: {
      fontSize: typography.semantic.body,
      fontWeight: typography.weight.body,
      lineHeight: typography.leading.body,
      letterSpacing: typography.tracking.body,
      textDecoration: 'underline' as const,
    },
    subtle: {
      fontSize: typography.semantic.body,
      fontWeight: typography.weight.body,
      lineHeight: typography.leading.body,
      letterSpacing: typography.tracking.body,
      textDecoration: 'none' as const,
    },
  },

  // Code and monospace text
  code: {
    inline: {
      fontSize: typography.size.sm,
      fontWeight: typography.weight.medium,
      lineHeight: typography.leading.normal,
      letterSpacing: typography.tracking.normal,
    },
    block: {
      fontSize: typography.size.sm,
      fontWeight: typography.weight.body,
      lineHeight: typography.leading.relaxed,
      letterSpacing: typography.tracking.normal,
    },
    small: {
      fontSize: typography.size.xs,
      fontWeight: typography.weight.medium,
      lineHeight: typography.leading.normal,
      letterSpacing: typography.tracking.normal,
    },
  },

  // UI Labels
  label: {
    default: {
      fontSize: typography.size.sm,
      fontWeight: typography.weight.emphasis,
      lineHeight: typography.leading.normal,
      letterSpacing: typography.tracking.normal,
    },
    helper: {
      fontSize: typography.size.sm,
      fontWeight: typography.weight.body,
      lineHeight: typography.leading.normal,
      letterSpacing: typography.tracking.normal,
    },
  },

  // Web3 specific
  web3: {
    address: {
      fontSize: typography.size.sm,
      fontWeight: typography.weight.body,
      lineHeight: typography.leading.normal,
      letterSpacing: typography.tracking.normal,
    },
    hash: {
      fontSize: typography.size.xs,
      fontWeight: typography.weight.body,
      lineHeight: typography.leading.normal,
      letterSpacing: typography.tracking.normal,
    },
    amount: {
      fontSize: typography.size.base,
      fontWeight: typography.weight.emphasis,
      lineHeight: typography.leading.normal,
      letterSpacing: typography.tracking.normal,
    },
    symbol: {
      fontSize: typography.size.sm,
      fontWeight: typography.weight.bold,
      lineHeight: typography.leading.normal,
      letterSpacing: typography.tracking.normal,
      textTransform: 'uppercase' as const,
    },
  },
} as const;

// =============================================================================
// UTILITY FUNCTIONS
// =============================================================================

/**
 * Create a custom text style with specified properties
 */
export function createTextStyle(options: {
  fontSize?: number;
  fontWeight?: number;
  lineHeight?: number;
  letterSpacing?: number;
  textTransform?: TextStyle['textTransform'];
  textDecoration?: TextStyle['textDecoration'];
}): TextStyle {
  return {
    fontFamily: '', // Platform-specific
    fontSize: options.fontSize ?? typography.semantic.body,
    fontWeight: options.fontWeight ?? typography.weight.body,
    lineHeight: options.lineHeight ?? typography.leading.body,
    letterSpacing: options.letterSpacing ?? typography.tracking.body,
    textTransform: options.textTransform,
    textDecoration: options.textDecoration,
  };
}

/**
 * Merge multiple text styles
 */
export function mergeTextStyles(...styles: Partial<TextStyle>[]): TextStyle {
  return styles.reduce(
    (result, style) => ({ ...result, ...style }),
    {
      fontFamily: '',
      fontSize: typography.semantic.body,
      fontWeight: typography.weight.body,
      lineHeight: typography.leading.body,
      letterSpacing: typography.tracking.body,
    }
  ) as TextStyle;
}

// =============================================================================
// MAIN EXPORT
// =============================================================================

export const textVariants = {
  heading: headingVariants,
  body: bodyVariants,
  specialized: specializedVariants,
  
  // Utility functions
  create: createTextStyle,
  merge: mergeTextStyles,
} as const;

export default textVariants;
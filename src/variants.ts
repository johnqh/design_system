/**
 * Platform-Agnostic Component Variants
 * 
 * Defines the available variants and their semantic meanings for UI components.
 * This provides the structure and configuration that platform-specific implementations
 * can use to generate appropriate styles.
 */

import { colors } from './colors';
import { spacing, radius } from './tokens';

// =============================================================================
// TYPE DEFINITIONS
// =============================================================================

export interface ComponentVariant {
  name: string;
  colors: {
    background: string;
    text: string;
    border?: string;
  };
  states?: {
    hover?: Partial<ComponentVariant['colors']>;
    active?: Partial<ComponentVariant['colors']>;
    disabled?: Partial<ComponentVariant['colors']>;
    focus?: {
      ring?: string;
    };
  };
}

export interface SizeVariant {
  name: string;
  padding: {
    horizontal: number;
    vertical: number;
  };
  fontSize: number;
  height?: number;
  borderRadius?: number;
}

// =============================================================================
// BUTTON VARIANTS
// =============================================================================

export const buttonVariants = {
  // Color variants
  colors: {
    primary: {
      name: 'primary',
      colors: {
        background: colors.semantic.brand.primary.light,
        text: colors.raw.neutral[0],
        border: 'transparent',
      },
      states: {
        hover: {
          background: colors.semantic.brand.primaryHover.light,
        },
        active: {
          background: colors.raw.blue[800],
        },
        disabled: {
          background: colors.semantic.brand.primary.light,
          text: colors.raw.neutral[0],
        },
        focus: {
          ring: colors.semantic.border.focus.light,
        },
      },
    },
    secondary: {
      name: 'secondary',
      colors: {
        background: colors.raw.neutral[100],
        text: colors.raw.neutral[900],
        border: 'transparent',
      },
      states: {
        hover: {
          background: colors.raw.neutral[200],
        },
        active: {
          background: colors.raw.neutral[300],
        },
        focus: {
          ring: colors.raw.neutral[500],
        },
      },
    },
    outline: {
      name: 'outline',
      colors: {
        background: 'transparent',
        text: colors.raw.neutral[900],
        border: colors.raw.neutral[300],
      },
      states: {
        hover: {
          background: colors.raw.neutral[50],
        },
        active: {
          background: colors.raw.neutral[100],
        },
        focus: {
          ring: colors.semantic.border.focus.light,
        },
      },
    },
    destructive: {
      name: 'destructive',
      colors: {
        background: colors.raw.red[600],
        text: colors.raw.neutral[0],
        border: 'transparent',
      },
      states: {
        hover: {
          background: colors.raw.red[700],
        },
        active: {
          background: colors.raw.red[800],
        },
        focus: {
          ring: colors.raw.red[500],
        },
      },
    },
    ghost: {
      name: 'ghost',
      colors: {
        background: 'transparent',
        text: colors.raw.neutral[700],
        border: 'transparent',
      },
      states: {
        hover: {
          background: colors.raw.neutral[100],
        },
        active: {
          background: colors.raw.neutral[200],
        },
        focus: {
          ring: colors.raw.neutral[500],
        },
      },
    },
    link: {
      name: 'link',
      colors: {
        background: 'transparent',
        text: colors.semantic.text.link.light,
        border: 'transparent',
      },
      states: {
        hover: {
          text: colors.semantic.text.linkHover.light,
        },
        focus: {
          ring: colors.semantic.border.focus.light,
        },
      },
    },
  },

  // Size variants
  sizes: {
    xs: {
      name: 'xs',
      padding: { horizontal: spacing.sm, vertical: spacing.xs },
      fontSize: 12,
      height: 28,
      borderRadius: radius.md,
    },
    sm: {
      name: 'sm',
      padding: { horizontal: spacing.md, vertical: spacing.sm },
      fontSize: 14,
      height: 32,
      borderRadius: radius.md,
    },
    md: {
      name: 'md',
      padding: { horizontal: spacing.lg, vertical: spacing.sm },
      fontSize: 14,
      height: 40,
      borderRadius: radius.md,
    },
    lg: {
      name: 'lg',
      padding: { horizontal: spacing.xl, vertical: spacing.md },
      fontSize: 16,
      height: 44,
      borderRadius: radius.md,
    },
    xl: {
      name: 'xl',
      padding: { horizontal: spacing['2xl'], vertical: spacing.lg },
      fontSize: 18,
      height: 48,
      borderRadius: radius.md,
    },
  },
} as const;

// =============================================================================
// CARD VARIANTS
// =============================================================================

export const cardVariants = {
  styles: {
    default: {
      name: 'default',
      colors: {
        background: colors.semantic.background.primary.light,
        text: colors.semantic.text.primary.light,
        border: colors.semantic.border.primary.light,
      },
    },
    elevated: {
      name: 'elevated',
      colors: {
        background: colors.semantic.background.elevated.light,
        text: colors.semantic.text.primary.light,
        border: colors.semantic.border.primary.light,
      },
    },
    success: {
      name: 'success',
      colors: {
        background: colors.semantic.state.successBg.light,
        text: colors.semantic.state.successText.light,
        border: colors.raw.green[200],
      },
    },
    warning: {
      name: 'warning',
      colors: {
        background: colors.semantic.state.warningBg.light,
        text: colors.semantic.state.warningText.light,
        border: colors.raw.amber[200],
      },
    },
    error: {
      name: 'error',
      colors: {
        background: colors.semantic.state.errorBg.light,
        text: colors.semantic.state.errorText.light,
        border: colors.raw.red[200],
      },
    },
  },

  padding: {
    none: { horizontal: 0, vertical: 0 },
    sm: { horizontal: spacing.md, vertical: spacing.md },
    md: { horizontal: spacing.lg, vertical: spacing.lg },
    lg: { horizontal: spacing.xl, vertical: spacing.xl },
  },

  radius: {
    none: 0,
    sm: radius.sm,
    md: radius.lg,
    lg: radius.xl,
  },
} as const;

// =============================================================================
// BADGE VARIANTS
// =============================================================================

export const badgeVariants = {
  colors: {
    default: {
      name: 'default',
      colors: {
        background: colors.raw.neutral[100],
        text: colors.raw.neutral[800],
        border: 'transparent',
      },
    },
    primary: {
      name: 'primary',
      colors: {
        background: colors.raw.blue[100],
        text: colors.raw.blue[800],
        border: 'transparent',
      },
    },
    success: {
      name: 'success',
      colors: {
        background: colors.raw.green[100],
        text: colors.raw.green[800],
        border: 'transparent',
      },
    },
    warning: {
      name: 'warning',
      colors: {
        background: colors.raw.amber[100],
        text: colors.raw.amber[800],
        border: 'transparent',
      },
    },
    error: {
      name: 'error',
      colors: {
        background: colors.raw.red[100],
        text: colors.raw.red[800],
        border: 'transparent',
      },
    },
    // Web3 specific
    ethereum: {
      name: 'ethereum',
      colors: {
        background: colors.raw.blue[100],
        text: colors.raw.blue[800],
        border: 'transparent',
      },
    },
    solana: {
      name: 'solana',
      colors: {
        background: colors.raw.purple[100],
        text: colors.raw.purple[800],
        border: 'transparent',
      },
    },
  },

  sizes: {
    sm: {
      name: 'sm',
      padding: { horizontal: spacing.sm, vertical: 2 },
      fontSize: 10,
      borderRadius: radius.full,
    },
    md: {
      name: 'md',
      padding: { horizontal: spacing.sm + 2, vertical: spacing.xs },
      fontSize: 12,
      borderRadius: radius.full,
    },
    lg: {
      name: 'lg',
      padding: { horizontal: spacing.md, vertical: spacing.sm },
      fontSize: 14,
      borderRadius: radius.full,
    },
  },
} as const;

// =============================================================================
// INPUT VARIANTS
// =============================================================================

export const inputVariants = {
  states: {
    default: {
      name: 'default',
      colors: {
        background: colors.semantic.background.primary.light,
        text: colors.semantic.text.primary.light,
        border: colors.raw.neutral[300],
      },
      states: {
        focus: {
          ring: colors.semantic.border.focus.light,
        },
      },
    },
    error: {
      name: 'error',
      colors: {
        background: colors.semantic.background.primary.light,
        text: colors.semantic.text.primary.light,
        border: colors.raw.red[300],
      },
      states: {
        focus: {
          ring: colors.raw.red[500],
        },
      },
    },
    success: {
      name: 'success',
      colors: {
        background: colors.semantic.background.primary.light,
        text: colors.semantic.text.primary.light,
        border: colors.raw.green[300],
      },
      states: {
        focus: {
          ring: colors.raw.green[500],
        },
      },
    },
  },

  sizes: {
    sm: {
      name: 'sm',
      padding: { horizontal: spacing.sm + 4, vertical: spacing.sm },
      fontSize: 14,
      height: 32,
      borderRadius: radius.md,
    },
    md: {
      name: 'md',
      padding: { horizontal: spacing.md, vertical: spacing.sm + 2 },
      fontSize: 14,
      height: 40,
      borderRadius: radius.md,
    },
    lg: {
      name: 'lg',
      padding: { horizontal: spacing.md + 4, vertical: spacing.md },
      fontSize: 16,
      height: 44,
      borderRadius: radius.md,
    },
  },
} as const;

// =============================================================================
// UTILITY FUNCTIONS
// =============================================================================

/**
 * Get variant colors with dark mode support
 */
export function getVariantColors(
  variant: ComponentVariant,
  theme: 'light' | 'dark' = 'light'
): ComponentVariant['colors'] {
  if (theme === 'dark') {
    // Return dark mode colors - this would need to be expanded with actual dark mode mappings
    return variant.colors;
  }
  return variant.colors;
}

/**
 * Get size variant properties
 */
export function getSizeVariant<T extends Record<string, SizeVariant>>(
  variants: T,
  size: keyof T
): SizeVariant {
  return variants[size];
}

/**
 * Create a custom variant
 */
export function createVariant(
  colors: ComponentVariant['colors'],
  states?: ComponentVariant['states']
): ComponentVariant {
  return {
    name: 'custom',
    colors,
    states,
  };
}

// =============================================================================
// MAIN EXPORT
// =============================================================================

export const variants = {
  button: buttonVariants,
  card: cardVariants,
  badge: badgeVariants,
  input: inputVariants,
  
  // Utility functions
  utils: {
    getVariantColors,
    getSizeVariant,
    createVariant,
  },
} as const;

export default variants;
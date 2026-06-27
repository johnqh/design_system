/**
 * @fileoverview Typography Variants
 *
 * Pre-built text component configurations that combine font families, sizes, weights,
 * and other typography properties into ready-to-use text styles.
 *
 * Exports:
 * - `textVariants` - Nested object of functions returning Tailwind class strings
 * - `createTextStyle()` - Build custom text styles from individual token keys
 * - `combineTextStyles()` - Merge multiple text style strings
 * - `createResponsiveText()` - Add responsive breakpoint overrides to a base style
 *
 * Theme awareness: colors are emitted as semantic theme tokens (text-foreground,
 * text-muted-foreground, text-primary, ...) when a theme is active, and fall back
 * to legacy hardcoded grays when no theme is configured (so apps that haven't opted
 * into theming are unaffected). See `tc()` below — mirrors `themed()` in variants.ts.
 */

import { designTokens } from '../tokens/tokens';
import { getActiveTheme } from '../themes/configure';

/**
 * Theme-aware color helper: returns `semantic` token classes when a theme is
 * configured, otherwise the `legacy` hardcoded classes (backward compatible).
 */
const tc = (semantic: string, legacy: string): string => (getActiveTheme() ? semantic : legacy);

// Common color mappings (semantic, legacy)
const fg = () => tc('text-foreground', 'text-gray-900 dark:text-white');
const body = () => tc('text-foreground', 'text-gray-700 dark:text-gray-300');
const muted = () => tc('text-muted-foreground', 'text-gray-600 dark:text-gray-400');
const subtle = () => tc('text-muted-foreground', 'text-gray-500 dark:text-gray-500');

const textVariants = {
  // =============================================================================
  // HEADINGS
  // =============================================================================

  heading: {
    // Display headings (hero sections, landing pages)
    display: {
      // Massive display text (128px)
      hero: () =>
        `${designTokens.typography.family.display} ${designTokens.typography.semantic.hero} ${designTokens.typography.weight.display} ${designTokens.typography.leading.display} ${designTokens.typography.tracking.heading} ${fg()}`,

      // Large display text (96px)
      xl: () =>
        `${designTokens.typography.family.display} text-7xl ${designTokens.typography.weight.display} ${designTokens.typography.leading.display} ${designTokens.typography.tracking.heading} ${fg()}`,

      // Medium display text (72px)
      lg: () =>
        `${designTokens.typography.family.display} text-6xl ${designTokens.typography.weight.bold} ${designTokens.typography.leading.display} ${designTokens.typography.tracking.heading} ${fg()}`,

      // Small display text (60px)
      md: () =>
        `${designTokens.typography.family.display} text-5xl ${designTokens.typography.weight.bold} ${designTokens.typography.leading.tight} ${designTokens.typography.tracking.heading} ${fg()}`,

      // Extra small display text (48px)
      sm: () =>
        `${designTokens.typography.family.display} text-4xl ${designTokens.typography.weight.bold} ${designTokens.typography.leading.tight} ${designTokens.typography.tracking.heading} ${fg()}`,
    },

    // Standard headings (H1-H6)
    h1: () =>
      `${designTokens.typography.family.sans} ${designTokens.typography.semantic.h1} ${designTokens.typography.weight.heading} ${designTokens.typography.leading.heading} ${designTokens.typography.tracking.heading} ${fg()}`,

    h2: () =>
      `${designTokens.typography.family.sans} ${designTokens.typography.semantic.h2} ${designTokens.typography.weight.heading} ${designTokens.typography.leading.heading} ${designTokens.typography.tracking.heading} ${fg()}`,

    h3: () =>
      `${designTokens.typography.family.sans} ${designTokens.typography.semantic.h3} ${designTokens.typography.weight.heading} ${designTokens.typography.leading.heading} ${designTokens.typography.tracking.heading} ${fg()}`,

    h4: () =>
      `${designTokens.typography.family.sans} ${designTokens.typography.semantic.h4} ${designTokens.typography.weight.semibold} ${designTokens.typography.leading.heading} ${designTokens.typography.tracking.heading} ${fg()}`,

    h5: () =>
      `${designTokens.typography.family.sans} ${designTokens.typography.semantic.h5} ${designTokens.typography.weight.semibold} ${designTokens.typography.leading.heading} ${designTokens.typography.tracking.heading} ${fg()}`,

    h6: () =>
      `${designTokens.typography.family.sans} ${designTokens.typography.semantic.h6} ${designTokens.typography.weight.semibold} ${designTokens.typography.leading.heading} ${designTokens.typography.tracking.heading} ${fg()}`,

    // Responsive headings that scale with screen size
    responsive: {
      h1: () =>
        `${designTokens.typography.family.sans} text-2xl sm:text-3xl md:text-4xl lg:text-5xl ${designTokens.typography.weight.heading} ${designTokens.typography.leading.heading} ${designTokens.typography.tracking.heading} ${fg()}`,

      h2: () =>
        `${designTokens.typography.family.sans} text-xl sm:text-2xl md:text-3xl lg:text-4xl ${designTokens.typography.weight.heading} ${designTokens.typography.leading.heading} ${designTokens.typography.tracking.heading} ${fg()}`,

      h3: () =>
        `${designTokens.typography.family.sans} text-lg sm:text-xl md:text-2xl lg:text-3xl ${designTokens.typography.weight.semibold} ${designTokens.typography.leading.heading} ${designTokens.typography.tracking.heading} ${fg()}`,

      display: () =>
        `${designTokens.typography.family.display} text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl ${designTokens.typography.weight.display} ${designTokens.typography.leading.display} ${designTokens.typography.tracking.heading} ${fg()}`,
    },
  },

  // =============================================================================
  // BODY TEXT
  // =============================================================================

  body: {
    // Large body text (18px)
    xl: () =>
      `${designTokens.typography.family.body} ${designTokens.typography.semantic.bodyLarge} ${designTokens.typography.weight.body} ${designTokens.typography.leading.body} ${designTokens.typography.tracking.body} ${body()}`,

    // Regular body text (16px) - Default
    lg: () =>
      `${designTokens.typography.family.body} ${designTokens.typography.semantic.body} ${designTokens.typography.weight.body} ${designTokens.typography.leading.body} ${designTokens.typography.tracking.body} ${body()}`,

    // Medium body text (16px) - Alias for lg
    md: () =>
      `${designTokens.typography.family.body} ${designTokens.typography.semantic.body} ${designTokens.typography.weight.body} ${designTokens.typography.leading.body} ${designTokens.typography.tracking.body} ${body()}`,

    // Small body text (14px)
    sm: () =>
      `${designTokens.typography.family.body} ${designTokens.typography.semantic.small} ${designTokens.typography.weight.body} ${designTokens.typography.leading.body} ${designTokens.typography.tracking.body} ${muted()}`,

    // Extra small body text (12px)
    xs: () =>
      `${designTokens.typography.family.body} ${designTokens.typography.semantic.caption} ${designTokens.typography.weight.body} ${designTokens.typography.leading.body} ${designTokens.typography.tracking.body} ${muted()}`,

    // Emphasized/strong body text variants
    strong: {
      xl: () =>
        `${designTokens.typography.family.body} ${designTokens.typography.semantic.bodyLarge} ${designTokens.typography.weight.strong} ${designTokens.typography.leading.body} ${designTokens.typography.tracking.body} ${fg()}`,
      lg: () =>
        `${designTokens.typography.family.body} ${designTokens.typography.semantic.body} ${designTokens.typography.weight.strong} ${designTokens.typography.leading.body} ${designTokens.typography.tracking.body} ${fg()}`,
      md: () =>
        `${designTokens.typography.family.body} ${designTokens.typography.semantic.body} ${designTokens.typography.weight.strong} ${designTokens.typography.leading.body} ${designTokens.typography.tracking.body} ${fg()}`,
      sm: () =>
        `${designTokens.typography.family.body} ${designTokens.typography.semantic.small} ${designTokens.typography.weight.strong} ${designTokens.typography.leading.body} ${designTokens.typography.tracking.body} ${fg()}`,
    },

    // Emphasized/medium body text variants
    emphasis: {
      xl: () =>
        `${designTokens.typography.family.body} ${designTokens.typography.semantic.bodyLarge} ${designTokens.typography.weight.emphasis} ${designTokens.typography.leading.body} ${designTokens.typography.tracking.body} ${fg()}`,
      lg: () =>
        `${designTokens.typography.family.body} ${designTokens.typography.semantic.body} ${designTokens.typography.weight.emphasis} ${designTokens.typography.leading.body} ${designTokens.typography.tracking.body} ${fg()}`,
      md: () =>
        `${designTokens.typography.family.body} ${designTokens.typography.semantic.body} ${designTokens.typography.weight.emphasis} ${designTokens.typography.leading.body} ${designTokens.typography.tracking.body} ${fg()}`,
      sm: () =>
        `${designTokens.typography.family.body} ${designTokens.typography.semantic.small} ${designTokens.typography.weight.emphasis} ${designTokens.typography.leading.body} ${designTokens.typography.tracking.body} ${fg()}`,
    },

    // Muted/secondary body text variants
    muted: {
      xl: () =>
        `${designTokens.typography.family.body} ${designTokens.typography.semantic.bodyLarge} ${designTokens.typography.weight.body} ${designTokens.typography.leading.body} ${designTokens.typography.tracking.body} ${muted()}`,
      lg: () =>
        `${designTokens.typography.family.body} ${designTokens.typography.semantic.body} ${designTokens.typography.weight.body} ${designTokens.typography.leading.body} ${designTokens.typography.tracking.body} ${muted()}`,
      md: () =>
        `${designTokens.typography.family.body} ${designTokens.typography.semantic.body} ${designTokens.typography.weight.body} ${designTokens.typography.leading.body} ${designTokens.typography.tracking.body} ${muted()}`,
      sm: () =>
        `${designTokens.typography.family.body} ${designTokens.typography.semantic.small} ${designTokens.typography.weight.body} ${designTokens.typography.leading.body} ${designTokens.typography.tracking.body} ${muted()}`,
    },
  },

  // =============================================================================
  // SPECIALIZED TEXT
  // =============================================================================

  // Caption and small text
  caption: {
    // Default caption (12px)
    default: () =>
      `${designTokens.typography.family.body} ${designTokens.typography.semantic.caption} ${designTokens.typography.weight.body} ${designTokens.typography.leading.caption} ${designTokens.typography.tracking.caption} ${subtle()}`,

    // Emphasized caption
    emphasis: () =>
      `${designTokens.typography.family.body} ${designTokens.typography.semantic.caption} ${designTokens.typography.weight.emphasis} ${designTokens.typography.leading.caption} ${designTokens.typography.tracking.caption} ${muted()}`,

    // Uppercase caption (for labels)
    uppercase: () =>
      `${designTokens.typography.family.body} ${designTokens.typography.semantic.caption} ${designTokens.typography.weight.emphasis} ${designTokens.typography.leading.caption} ${designTokens.typography.tracking.uppercase} ${designTokens.typography.transform.uppercase} ${subtle()}`,
  },

  // Lead text (introduction paragraphs)
  lead: {
    // Large lead text
    lg: () =>
      `${designTokens.typography.family.body} text-xl ${designTokens.typography.weight.body} ${designTokens.typography.leading.relaxed} ${designTokens.typography.tracking.body} ${body()}`,

    // Medium lead text
    md: () =>
      `${designTokens.typography.family.body} ${designTokens.typography.semantic.bodyLarge} ${designTokens.typography.weight.body} ${designTokens.typography.leading.relaxed} ${designTokens.typography.tracking.body} ${body()}`,

    // Small lead text
    sm: () =>
      `${designTokens.typography.family.body} ${designTokens.typography.semantic.body} ${designTokens.typography.weight.body} ${designTokens.typography.leading.relaxed} ${designTokens.typography.tracking.body} ${body()}`,
  },

  // Links
  link: {
    // Default link
    default: () =>
      `${designTokens.typography.decoration.underline} ${designTokens.typography.underlineOffset.medium} ${tc('text-primary hover:text-primary/80', 'text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300')} transition-colors duration-150`,

    // Link without underline
    subtle: () =>
      `${designTokens.typography.decoration.none} ${tc('text-primary hover:text-primary/80', 'text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300')} hover:${designTokens.typography.decoration.underline} hover:${designTokens.typography.underlineOffset.medium} transition-all duration-150`,

    // Muted link
    muted: () =>
      `${designTokens.typography.decoration.underline} ${designTokens.typography.underlineOffset.medium} ${tc('text-muted-foreground hover:text-foreground', 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100')} transition-colors duration-150`,

    // External link (with icon space)
    external: () =>
      `${designTokens.typography.decoration.underline} ${designTokens.typography.underlineOffset.medium} ${tc('text-primary hover:text-primary/80', 'text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300')} transition-colors duration-150 inline-flex items-center gap-1`,
  },

  // Code and monospace text
  code: {
    // Inline code
    inline: () =>
      `${designTokens.typography.family.mono} text-sm ${designTokens.typography.weight.medium} px-1.5 py-0.5 rounded ${tc('bg-muted text-foreground', 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100')}`,

    // Code block
    block: () =>
      `${designTokens.typography.family.mono} text-sm ${designTokens.typography.weight.body} ${designTokens.typography.leading.relaxed} p-4 rounded-lg ${tc('bg-muted text-foreground', 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100')} overflow-x-auto`,

    // Small inline code
    small: () =>
      `${designTokens.typography.family.mono} text-xs ${designTokens.typography.weight.medium} px-1 py-0.5 rounded ${tc('bg-muted text-foreground', 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100')}`,
  },

  // UI Labels and form text
  label: {
    // Form labels
    default: () =>
      `${designTokens.typography.family.body} text-sm ${designTokens.typography.weight.emphasis} ${fg()}`,

    // Required field labels
    required: () =>
      `${designTokens.typography.family.body} text-sm ${designTokens.typography.weight.emphasis} ${fg()} after:content-['*'] after:ml-0.5 ${tc('after:text-destructive', 'after:text-red-500')}`,

    // Optional field labels
    optional: () =>
      `${designTokens.typography.family.body} text-sm ${designTokens.typography.weight.body} ${muted()}`,

    // Helper text
    helper: () =>
      `${designTokens.typography.family.body} text-sm ${designTokens.typography.weight.body} ${subtle()}`,

    // Error text
    error: () =>
      `${designTokens.typography.family.body} text-sm ${designTokens.typography.weight.body} ${tc('text-destructive', 'text-red-600 dark:text-red-400')}`,

    // Success text
    success: () =>
      `${designTokens.typography.family.body} text-sm ${designTokens.typography.weight.body} ${tc('text-success', 'text-green-600 dark:text-green-400')}`,
  },

  // =============================================================================
  // WEB3 SPECIFIC
  // =============================================================================

  web3: {
    // Wallet addresses
    address: () =>
      `${designTokens.typography.family.mono} text-sm ${designTokens.typography.weight.body} ${fg()} break-all`,

    // Short wallet addresses (truncated)
    addressShort: () =>
      `${designTokens.typography.family.mono} text-sm ${designTokens.typography.weight.body} ${fg()}`,

    // Transaction hashes
    hash: () =>
      `${designTokens.typography.family.mono} text-xs ${designTokens.typography.weight.body} ${subtle()} break-all`,

    // Cryptocurrency amounts
    amount: () =>
      `${designTokens.typography.family.mono} text-base ${designTokens.typography.weight.emphasis} ${fg()}`,

    // Chain names
    chain: () =>
      `${designTokens.typography.family.body} text-sm ${designTokens.typography.weight.emphasis} ${fg()}`,

    // Token symbols
    symbol: () =>
      `${designTokens.typography.family.body} text-sm ${designTokens.typography.weight.bold} ${designTokens.typography.transform.uppercase} ${fg()}`,
  },

  // =============================================================================
  // UTILITY CLASSES
  // =============================================================================

  // Truncation utilities
  truncate: {
    // Single line truncation
    line: () =>
      `${designTokens.typography.overflow.ellipsis} ${designTokens.typography.whitespace.nowrap} overflow-hidden`,

    // Multi-line truncation (2 lines)
    lines2: () => 'line-clamp-2',

    // Multi-line truncation (3 lines)
    lines3: () => 'line-clamp-3',

    // Multi-line truncation (4 lines)
    lines4: () => 'line-clamp-4',
  },

  // Selection styles
  selection: {
    // Default text selection
    default: () =>
      tc(
        'selection:bg-primary selection:text-primary-foreground',
        'selection:bg-blue-200 dark:selection:bg-blue-800 selection:text-blue-900 dark:selection:text-blue-100'
      ),

    // Brand colored selection
    brand: () =>
      tc(
        'selection:bg-accent selection:text-accent-foreground',
        'selection:bg-purple-200 dark:selection:bg-purple-800 selection:text-purple-900 dark:selection:text-purple-100'
      ),
  },
} as const;

/**
 * Build a custom text style string from individual typography token keys.
 *
 * Composes Tailwind classes from design token categories (family, size, weight, etc.)
 * into a single space-separated class string.
 *
 * @param family - Font family token key (default: 'body')
 * @param size - Semantic size token key (default: 'body')
 * @param weight - Weight token key (default: 'body')
 * @param color - Tailwind color classes (default: theme-aware foreground)
 * @param options - Optional leading, tracking, transform, and decoration overrides
 * @returns Combined Tailwind class string
 */
const createTextStyle = (
  family: keyof typeof designTokens.typography.family = 'body',
  size: keyof typeof designTokens.typography.semantic = 'body',
  weight: keyof typeof designTokens.typography.weight = 'body',
  color: string = fg(),
  options: {
    leading?: keyof typeof designTokens.typography.leading;
    tracking?: keyof typeof designTokens.typography.tracking;
    transform?: keyof typeof designTokens.typography.transform;
    decoration?: keyof typeof designTokens.typography.decoration;
  } = {}
): string => {
  const { leading = 'body', tracking = 'body', transform = 'none', decoration = 'none' } = options;

  return [
    designTokens.typography.family[family],
    designTokens.typography.semantic[size],
    designTokens.typography.weight[weight],
    designTokens.typography.leading[leading],
    designTokens.typography.tracking[tracking],
    designTokens.typography.transform[transform],
    designTokens.typography.decoration[decoration],
    color,
  ]
    .filter(Boolean)
    .join(' ');
};

/**
 * Combine multiple text style strings into one, filtering out empty values.
 *
 * @param styles - Text style strings to combine
 * @returns Single space-separated class string
 */
const combineTextStyles = (...styles: string[]): string => {
  return styles.filter(Boolean).join(' ');
};

/**
 * Create responsive text styles by appending breakpoint-prefixed classes to a base style.
 *
 * @param baseStyle - Base Tailwind class string applied at all screen sizes
 * @param breakpoints - Breakpoint-specific class overrides (sm, md, lg, xl, 2xl)
 * @returns Combined responsive class string
 *
 * @example
 * ```ts
 * createResponsiveText('text-base', { md: 'text-lg', lg: 'text-xl' })
 * // => 'text-base md:text-lg lg:text-xl'
 * ```
 */
const createResponsiveText = (
  baseStyle: string,
  breakpoints: {
    sm?: string;
    md?: string;
    lg?: string;
    xl?: string;
    '2xl'?: string;
  }
): string => {
  const responsiveClasses = [];

  responsiveClasses.push(baseStyle);

  if (breakpoints.sm) responsiveClasses.push(`sm:${breakpoints.sm}`);
  if (breakpoints.md) responsiveClasses.push(`md:${breakpoints.md}`);
  if (breakpoints.lg) responsiveClasses.push(`lg:${breakpoints.lg}`);
  if (breakpoints.xl) responsiveClasses.push(`xl:${breakpoints.xl}`);
  if (breakpoints['2xl']) responsiveClasses.push(`2xl:${breakpoints['2xl']}`);

  return responsiveClasses.join(' ');
};

export { textVariants, createTextStyle, combineTextStyles, createResponsiveText };

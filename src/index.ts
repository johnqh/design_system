/**
 * Design System Exports
 *
 * Main export file for all design system components, tokens, and utilities.
 */

import { getActiveTheme } from './themes/configure';

/**
 * Theme-aware color helper for the `ui` object below: returns `semantic` token
 * classes when a theme is active, otherwise the `legacy` hardcoded classes.
 * The color-bearing `ui.*` groups are exposed as getters so this evaluates at
 * access (render) time — after `configureTheme()` runs at app startup.
 */
const tc = (semantic: string, legacy: string): string => (getActiveTheme() ? semantic : legacy);

// === PRIMARY EXPORTS ===
export { colors } from './tokens/colors';
export { designTokens } from './tokens/tokens';
export { textVariants } from './core/typography';
export { variants } from './core/variants';
export { SimpleVariants, createVariants, createQuickVariants } from './core/simple-variants';
export { cn } from './utilities/utils';
export {
  withOpacity,
  responsive,
  themeColor,
  getSemanticColor as getThemeSemanticColor,
  gradient,
  spacing,
  animation,
} from './utilities/theme-utils';
export {
  sizeClasses,
  getSizeClasses,
  focusRing,
  focusVisible,
  transitions,
  hoverState,
  disabledState,
  loadingState,
  buttonVariant,
  inputVariant,
  cardVariant,
  textVariant,
} from './utilities/component-helpers';
export {
  statusIndicatorColors,
  getStatusIndicatorColor,
  cardVariantColors,
  getCardVariantColors,
  calloutVariantColors,
  getCalloutVariantColors,
  sectionBadgeColors,
  getSectionBadgeColors,
} from './utilities/status-colors';

// === PURE TYPESCRIPT UTILITIES ===
export { GRADIENTS, GRADIENT_CLASSES, getGradient, combineGradient } from './tokens/gradients';
export { UI_CONSTANTS, UI_PATTERNS as UI_CONSTANTS_PATTERNS } from './utilities/ui-constants';
export {
  BASE_KEYWORDS,
  USER_FOCUSED_KEYWORDS,
  DEVELOPER_KEYWORDS,
  DOCUMENTATION_KEYWORDS,
  createCompanyKeywords,
  WEB3_TRENDING_KEYWORDS,
  TECHNICAL_SEO_KEYWORDS,
  ACCESSIBILITY_KEYWORDS,
  combineKeywords,
  getHomePageKeywords,
  getAboutPageKeywords,
  getDocumentationKeywords,
  getUserPageKeywords,
  getDeveloperPageKeywords,
  getWeb3ProjectsKeywords,
  getSubscriptionKeywords,
  getContactKeywords,
} from './content/seo-keywords';
export type { StructuredData } from './content/structured-data';
export {
  createBaseOrganization,
  createSoftwareApplicationData,
  createWebPageData,
  createAboutPageData,
  createTechArticleData,
} from './content/structured-data';

// === TYPE EXPORTS ===
export type { VariantFunction, VariantWithArgs, VariantsType } from './core/variants';
export type { VariantConfig } from './core/simple-variants';
export type { ThemeMode, ResponsiveBreakpoint } from './utilities/theme-utils';
export type { ComponentSize, ComponentVariant } from './utilities/component-helpers';

// === ENHANCED TYPE EXPORTS ===
export type {
  TypedVariantConfig,
  TypedVariantsType,
  TypedButtonVariants,
  TypedCardVariants,
  TypedBadgeVariants,
  TypedInputVariants,
  TypedAlertVariants,
  VariantValue,
  NestedVariant,
  ComponentNames,
  VariantNames,
  TypedVariantGetter,
  VariantResolutionOptions,
  VariantResolutionResult,
} from './types/variant-types';

// === ORGANIZED STRUCTURE ALIASES ===
export { colors as Colors } from './tokens/colors';
export { designTokens as Tokens } from './tokens/tokens';
export { textVariants as Typography } from './core/typography';
export { variants as Variants } from './core/variants';

// === UI UTILITIES ===
/**
 * Quick-access object of commonly used Tailwind class strings.
 *
 * **When to use `ui.*`:**
 * Use `ui` when you need a single, ready-to-apply class string for
 * standard UI patterns (layout containers, section backgrounds,
 * typography, cards, badges, tables). It is ideal for rapid
 * prototyping and one-off component styling where you do not need
 * the full power of the variant system.
 *
 * **When to use the primary exports instead:**
 * - `textVariants` -- when you need function-based typography with
 *   composable options (responsive, sub-variants like `.strong`).
 * - `variants` -- when you need deeply nested component variants
 *   with size, state, and intent modifiers (e.g. button, card, badge).
 * - `designTokens` -- when you need atomic spacing, radius, shadow,
 *   or animation tokens to compose your own class strings.
 * - `colors` -- when you need raw hex values, semantic light/dark
 *   tokens, or component color configurations.
 *
 * `ui.text.h1` and `textVariants.heading.h1()` produce similar
 * output, but `textVariants` supports composition via
 * `combineTextStyles()` and `createResponsiveText()`.
 */
const ui = {
  // Layout utilities
  layout: {
    container: 'mx-auto max-w-7xl px-4 sm:px-6 lg:px-8',
    containerSmall: 'mx-auto max-w-3xl px-4 sm:px-6 lg:px-8',
    containerLarge: 'mx-auto max-w-full px-4 sm:px-6 lg:px-8',
    section: 'py-8 sm:py-12 lg:py-16',
    sectionSmall: 'py-6 sm:py-8 lg:py-10',
    flex: 'flex items-center justify-between',
    flexCenter: 'flex items-center justify-center',
    flexCol: 'flex flex-col',
    grid: 'grid grid-cols-1 gap-6',
    gridMd: 'grid grid-cols-1 md:grid-cols-2 gap-6',
    gridLg: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6',
  },

  // Section styles with backgrounds (theme-aware getter; legacy fallback when no theme)
  get section() {
    return {
      // Standard section with themed background
      default: tc(
        'py-8 sm:py-12 lg:py-16 bg-background',
        'py-8 sm:py-12 lg:py-16 bg-white dark:bg-gray-900'
      ),

      // Hero sections (larger spacing)
      hero: tc('py-20 bg-background', 'py-20 bg-white dark:bg-gray-900'),

      // Subtle background sections
      subtle: tc(
        'py-8 sm:py-12 lg:py-16 bg-muted',
        'py-8 sm:py-12 lg:py-16 bg-gray-50 dark:bg-gray-800'
      ),

      // Accent background sections
      accent: tc(
        'py-8 sm:py-12 lg:py-16 bg-accent',
        'py-8 sm:py-12 lg:py-16 bg-blue-50 dark:bg-blue-900'
      ),

      // Gradient sections (theme-aware stops)
      gradient: tc(
        'py-20 bg-gradient-to-r from-accent to-muted',
        'py-20 bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900 dark:to-blue-900'
      ),
      gradientAmber: tc(
        'py-20 bg-gradient-to-r from-warning/20 to-muted',
        'py-20 bg-gradient-to-r from-amber-50 to-yellow-50 dark:from-amber-900 dark:to-yellow-900'
      ),
      gradientBlue: tc(
        'py-20 bg-gradient-to-r from-primary/15 to-accent',
        'py-20 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900 dark:to-purple-900'
      ),

      // No background (transparent)
      transparent: 'py-8 sm:py-12 lg:py-16',
    };
  },

  // Background utilities (theme-aware getter)
  get background() {
    return {
      surface: tc('bg-card', 'bg-white dark:bg-gray-800'),
      subtle: tc('bg-muted', 'bg-gray-50 dark:bg-gray-900'),
      muted: tc('bg-muted', 'bg-gray-100 dark:bg-gray-700'),
      overlay: 'bg-black/50 dark:bg-black/70',
    };
  },

  // Border utilities (theme-aware getter)
  get border() {
    return {
      default: tc('border-border', 'border-gray-200 dark:border-gray-700'),
      subtle: tc('border-border/50', 'border-gray-100 dark:border-gray-800'),
      radius: 'rounded-lg',
      radiusSm: 'rounded-md',
      radiusLg: 'rounded-xl',
      radiusFull: 'rounded-full',
    };
  },

  // Shadow utilities
  shadow: {
    sm: 'shadow-sm',
    md: 'shadow-md',
    lg: 'shadow-lg',
    xl: 'shadow-xl',
  },

  // Spacing utilities
  spacing: {
    card: {
      sm: 'p-4',
      md: 'p-6',
      lg: 'p-8',
    },
    section: {
      sm: 'py-6 px-4',
      md: 'py-8 px-6',
      lg: 'py-12 px-8',
    },
  },

  // Typography utilities (theme-aware getter; legacy fallback when no theme)
  get text() {
    return {
      // Headings
      h1: `text-3xl sm:text-4xl lg:text-5xl font-bold ${tc('text-foreground', 'text-gray-900 dark:text-white')} leading-tight tracking-tight`,
      h2: `text-2xl sm:text-3xl lg:text-4xl font-bold ${tc('text-foreground', 'text-gray-900 dark:text-white')} leading-tight tracking-tight`,
      h3: `text-xl sm:text-2xl font-semibold ${tc('text-foreground', 'text-gray-900 dark:text-white')} leading-tight tracking-tight`,
      h4: `text-lg sm:text-xl font-semibold ${tc('text-foreground', 'text-gray-900 dark:text-white')} leading-tight tracking-tight`,
      h5: `text-base sm:text-lg font-semibold ${tc('text-foreground', 'text-gray-900 dark:text-white')} leading-tight tracking-tight`,
      h6: `text-base font-semibold ${tc('text-foreground', 'text-gray-900 dark:text-white')} leading-tight tracking-tight`,

      // Display headings
      display: `text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold ${tc('text-foreground', 'text-gray-900 dark:text-white')} leading-none tracking-tight`,
      hero: `text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black ${tc('text-foreground', 'text-gray-900 dark:text-white')} leading-none tracking-tight`,

      // Body text
      body: `text-base font-normal ${tc('text-foreground', 'text-gray-700 dark:text-gray-300')} leading-relaxed`,
      bodyLarge: `text-lg font-normal ${tc('text-foreground', 'text-gray-700 dark:text-gray-300')} leading-relaxed`,
      bodySmall: `text-sm font-normal ${tc('text-muted-foreground', 'text-gray-600 dark:text-gray-400')} leading-relaxed`,

      // Lead text (introductory paragraphs)
      lead: `text-xl font-normal ${tc('text-foreground', 'text-gray-700 dark:text-gray-300')} leading-relaxed`,
      leadLarge: `text-2xl font-normal ${tc('text-foreground', 'text-gray-700 dark:text-gray-300')} leading-relaxed`,

      // Specialized text
      caption: `text-sm font-normal ${tc('text-muted-foreground', 'text-gray-500 dark:text-gray-500')} leading-normal`,
      label: `text-sm font-medium ${tc('text-foreground', 'text-gray-700 dark:text-gray-300')}`,
      helper: `text-sm font-normal ${tc('text-muted-foreground', 'text-gray-500 dark:text-gray-500')}`,

      // Links
      link: `${tc('text-primary hover:text-primary/80 decoration-primary', 'text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 decoration-blue-600 dark:decoration-blue-400')} underline underline-offset-2 transition-colors duration-150`,
      linkSubtle: `${tc('text-primary hover:text-primary/80', 'text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300')} no-underline hover:underline hover:underline-offset-2 transition-all duration-150`,
      linkMuted: `${tc('text-muted-foreground hover:text-foreground decoration-border', 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 decoration-gray-400 hover:decoration-gray-600')} underline underline-offset-2 transition-colors duration-150`,

      // Code text
      code: `font-mono text-sm font-medium ${tc('bg-muted text-foreground', 'text-gray-900 dark:text-gray-100 bg-gray-100 dark:bg-gray-800')} px-1.5 py-0.5 rounded`,
      codeBlock: `font-mono text-sm font-normal ${tc('bg-muted text-foreground', 'text-gray-900 dark:text-gray-100 bg-gray-100 dark:bg-gray-800')} p-4 rounded-lg overflow-x-auto leading-relaxed`,

      // Status text
      success: `${tc('text-success', 'text-green-700 dark:text-green-300')} font-medium`,
      warning: `${tc('text-warning', 'text-orange-700 dark:text-orange-300')} font-medium`,
      attention: `${tc('text-warning', 'text-amber-700 dark:text-amber-300')} font-medium`,
      error: `${tc('text-destructive', 'text-red-700 dark:text-red-300')} font-medium`,
      info: `${tc('text-info', 'text-blue-700 dark:text-blue-300')} font-medium`,

      // Emphasis variants
      emphasis: `font-medium ${tc('text-foreground', 'text-gray-900 dark:text-gray-100')}`,
      strong: `font-semibold ${tc('text-foreground', 'text-gray-900 dark:text-gray-100')}`,
      muted: tc('text-muted-foreground', 'text-gray-500 dark:text-gray-500'),

      // Uppercase labels
      uppercase: `text-xs font-semibold ${tc('text-muted-foreground', 'text-gray-500 dark:text-gray-500')} uppercase tracking-wider`,
    };
  },

  // Transition utilities
  transition: {
    default: 'transition-colors duration-200',
    all: 'transition-all duration-200',
    fast: 'transition-all duration-150',
    slow: 'transition-all duration-300',
    transform: 'transition-transform duration-200',
  },

  // Interactive states (theme-aware getter)
  get states() {
    return {
      hover: 'hover:opacity-80 transition-opacity duration-200',
      focus: tc(
        'focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
        'focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'
      ),
      disabled: 'disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none',
      loading: 'animate-pulse',
    };
  },

  // Table utilities (theme-aware getter)
  get table() {
    return {
      // Table container
      container: tc(
        'bg-card rounded-2xl shadow-xl overflow-hidden',
        'bg-white dark:bg-gray-900 rounded-2xl shadow-xl overflow-hidden'
      ),
      wrapper: 'overflow-x-auto',
      base: 'w-full',

      // Table header
      thead: tc('bg-muted', 'bg-gray-50 dark:bg-gray-800'),
      th: tc(
        'px-6 py-4 text-left text-sm font-semibold text-foreground',
        'px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-gray-100'
      ),

      // Table body
      tbody: tc('divide-y divide-border', 'divide-y divide-gray-200 dark:divide-gray-700'),

      // Table rows (alternating)
      tr: tc('bg-card', 'bg-white dark:bg-gray-900'),
      trAlt: tc('bg-muted', 'bg-gray-50 dark:bg-gray-800'),

      // Table cells
      td: tc(
        'px-6 py-4 text-sm text-foreground',
        'px-6 py-4 text-sm text-gray-900 dark:text-gray-100'
      ),
    };
  },

  // Card utilities (theme-aware getter)
  get card() {
    return {
      // Standard cards with shadow
      default: tc(
        'bg-card text-card-foreground rounded-xl p-6 shadow-lg',
        'bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg'
      ),
      large: tc(
        'bg-card text-card-foreground rounded-2xl p-8 shadow-xl',
        'bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl'
      ),

      // Cards with border instead of shadow
      bordered: tc(
        'bg-card text-card-foreground rounded-xl p-6 border border-border',
        'bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700'
      ),

      // Cards with hover effects
      interactive: tc(
        'bg-card text-card-foreground rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow',
        'bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow'
      ),

      // Feature cards (for grids)
      feature: tc(
        'bg-card text-card-foreground rounded-xl p-6 border border-border hover:shadow-lg transition-shadow',
        'bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow'
      ),
    };
  },

  // Badge utilities (theme-aware getter)
  get badge() {
    return {
      blue: tc(
        'inline-flex items-center bg-primary/10 text-primary px-4 py-2 rounded-full',
        'inline-flex items-center bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 px-4 py-2 rounded-full'
      ),
      green: tc(
        'inline-flex items-center bg-success/10 text-success px-4 py-2 rounded-full',
        'inline-flex items-center bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 px-4 py-2 rounded-full'
      ),
      purple: tc(
        'inline-flex items-center bg-accent text-accent-foreground px-4 py-2 rounded-full',
        'inline-flex items-center bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 px-4 py-2 rounded-full'
      ),
      amber: tc(
        'inline-flex items-center bg-warning/10 text-warning px-4 py-2 rounded-full',
        'inline-flex items-center bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-300 px-4 py-2 rounded-full'
      ),
      gray: tc(
        'inline-flex items-center bg-muted text-muted-foreground px-4 py-2 rounded-full',
        'inline-flex items-center bg-gray-100 dark:bg-gray-900/30 text-gray-800 dark:text-gray-300 px-4 py-2 rounded-full'
      ),
    };
  },

  // Web3 specific utilities (theme-aware getter)
  get web3() {
    return {
      walletButton: tc(
        'bg-card border border-border hover:bg-muted text-foreground inline-flex items-center gap-2 px-4 py-2 rounded-lg font-medium',
        'bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-900 dark:text-gray-100 inline-flex items-center gap-2 px-4 py-2 rounded-lg font-medium'
      ),
      chainBadge: (chain: 'ethereum' | 'solana') =>
        chain === 'ethereum'
          ? tc(
              'bg-primary/10 text-primary inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium',
              'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium'
            )
          : tc(
              'bg-accent text-accent-foreground inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium',
              'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium'
            ),
      addressText: tc(
        'font-mono text-sm text-muted-foreground',
        'font-mono text-sm text-gray-600 dark:text-gray-400'
      ),
    };
  },
} as const;

export { ui };

// === THEME SYSTEM ===
export type { ThemeTokens, ThemeDefinition, ThemeClassOverrides, ThemeName } from './themes/types';
export {
  configureTheme,
  getActiveTheme,
  getActiveThemeName,
  getClassOverride,
} from './themes/configure';
export { generateThemeCSS } from './themes/css-generator';
export { createTailwindPreset, createNativeWindPreset } from './themes/tailwind-preset';

// === LEGACY NAMED EXPORTS ===
// For backward compatibility - duplicate named exports
export {
  colors as colorsLegacy,
  getColorClasses as getColorClassesLegacy,
  buildColorClass as buildColorClassLegacy,
} from './tokens/colors';
export { designTokens as designTokensLegacy } from './tokens/tokens';
export {
  textVariants as textVariantsLegacy,
  createTextStyle as createTextStyleLegacy,
  combineTextStyles as combineTextStylesLegacy,
  createResponsiveText as createResponsiveTextLegacy,
} from './core/typography';
export { variants as variantsLegacy } from './core/variants';

// === UTILITY FUNCTIONS ===
// Re-export utility functions from colors
export { getColorClasses, buildColorClass } from './tokens/colors';
export { createTextStyle, combineTextStyles, createResponsiveText } from './core/typography';

// === AI-FRIENDLY HELPERS ===
export {
  SEMANTIC_COLOR_MAP,
  UI_PATTERNS,
  SIZE_SCALES,
  getSemanticColor,
  applyUIPattern,
  createSizedComponent,
  createComponentWithIntent,
  validateVariantConfig,
  safeResolveVariant,
  getVariantSuggestions,
  analyzeVariantUsage,
} from './utilities/ai-helpers';

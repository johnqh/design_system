/**
 * Status Color Utilities
 *
 * Provides consistent status color classes aligned with the design system.
 * These utilities map semantic status states to their corresponding Tailwind classes.
 */

/**
 * Status indicator colors for dots, icons, and small visual elements
 * Maps to colors.semantic.state.* from the design system
 */
export const statusIndicatorColors = {
  success: 'bg-green-500',
  error: 'bg-red-500',
  warning: 'bg-orange-500',
  attention: 'bg-amber-500',
  info: 'bg-blue-500',
  neutral: 'bg-gray-500',
} as const;

/**
 * Get status indicator color class
 */
export function getStatusIndicatorColor(
  status: 'success' | 'error' | 'warning' | 'attention' | 'info' | 'neutral'
): string {
  return statusIndicatorColors[status];
}

/**
 * Card/Container variant colors with backgrounds, borders, and text
 * Aligned with colors.component.card.* and colors.component.alert.* from design system
 */
export const cardVariantColors = {
  default: 'bg-white dark:bg-gray-800',
  bordered: 'bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700',
  elevated: 'bg-white dark:bg-gray-800 shadow-md',
  info: 'bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 text-blue-900 dark:text-blue-300',
  success: 'bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 text-green-900 dark:text-green-300',
  warning: 'bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800 text-orange-900 dark:text-orange-300',
  attention: 'bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 text-amber-900 dark:text-amber-300',
  error: 'bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-900 dark:text-red-300',
} as const;

/**
 * Get card variant color classes
 */
export function getCardVariantColors(
  variant: keyof typeof cardVariantColors
): string {
  return cardVariantColors[variant];
}

/**
 * Callout/Alert gradient backgrounds with text colors
 * Gradient patterns aligned with design system
 */
export const calloutVariantColors = {
  primary: {
    background: 'bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20',
    text: 'text-blue-700 dark:text-blue-300',
  },
  secondary: {
    background: 'bg-gradient-to-r from-gray-50 to-slate-50 dark:from-gray-800/50 dark:to-slate-800/50',
    text: 'text-gray-700 dark:text-gray-300',
  },
  success: {
    background: 'bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20',
    text: 'text-green-700 dark:text-green-300',
  },
  warning: {
    background: 'bg-gradient-to-r from-orange-50 to-amber-50 dark:from-orange-900/20 dark:to-amber-900/20',
    text: 'text-orange-700 dark:text-orange-300',
  },
  attention: {
    background: 'bg-gradient-to-r from-amber-50 to-yellow-50 dark:from-amber-900/20 dark:to-yellow-900/20',
    text: 'text-amber-700 dark:text-amber-300',
  },
  info: {
    background: 'bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20',
    text: 'text-blue-700 dark:text-blue-300',
  },
  purple: {
    background: 'bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20',
    text: 'text-purple-700 dark:text-purple-300',
  },
} as const;

/**
 * Get callout variant colors (background and text)
 */
export function getCalloutVariantColors(
  variant: keyof typeof calloutVariantColors
): { background: string; text: string } {
  return calloutVariantColors[variant];
}

/**
 * Section badge colors with gradients and icon colors
 * Brand gradient patterns from design system
 */
export const sectionBadgeColors = {
  default: {
    container: 'bg-gradient-to-r from-blue-600/10 to-purple-600/10 border border-blue-200 text-blue-600 backdrop-blur-sm',
    icon: 'text-blue-600',
  },
  premium: {
    container: 'bg-gradient-to-r from-blue-600/10 to-purple-600/10 border border-blue-200 text-blue-600 backdrop-blur-sm',
    icon: 'text-blue-600',
  },
  primary: {
    container: 'bg-gradient-to-r from-blue-600/10 to-purple-600/10 border border-blue-200 text-blue-600 backdrop-blur-sm',
    icon: 'text-blue-600',
  },
  light: {
    container: 'bg-white/20 border border-white/30 text-white backdrop-blur-sm',
    icon: 'text-white',
  },
} as const;

/**
 * Get section badge colors (container and icon)
 */
export function getSectionBadgeColors(
  variant: keyof typeof sectionBadgeColors
): { container: string; icon: string } {
  return sectionBadgeColors[variant];
}

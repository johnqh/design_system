/**
 * Design System Exports (React Native)
 *
 * Main export file for all design system components, tokens, and utilities.
 * This file uses the React Native optimized cn() utility.
 */

// === PRIMARY EXPORTS ===
export { colors } from './tokens/colors';
export { designTokens } from './tokens/tokens';
export { textVariants } from './core/typography';
export { variants } from './core/variants';
export { SimpleVariants, createVariants, createQuickVariants } from './core/simple-variants';

// Use React Native optimized cn() utility (no tailwind-merge)
export { cn } from './utilities/utils.native';

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

// === TYPE EXPORTS ===
export type { VariantFunction, VariantWithArgs, VariantsType } from './core/variants';
export type { VariantConfig } from './core/simple-variants';
export type { ThemeMode, ResponsiveBreakpoint } from './utilities/theme-utils';
export type { ComponentSize, ComponentVariant } from './utilities/component-helpers';

// === ORGANIZED STRUCTURE ALIASES ===
export { colors as Colors } from './tokens/colors';
export { designTokens as Tokens } from './tokens/tokens';
export { textVariants as Typography } from './core/typography';
export { variants as Variants } from './core/variants';

// === UTILITY FUNCTIONS ===
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

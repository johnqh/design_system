/**
 * AI-Friendly Helper Functions
 *
 * This module provides utility functions specifically designed to make the
 * design system more accessible to AI assistants and improve the development
 * experience when working with AI-powered code generation.
 *
 * @module AIHelpers
 * @author Design System Team
 * @since 1.0.17
 */

import { cn } from './utils';
import type {
  TypedVariantConfig,
  VariantResolutionOptions,
  VariantResolutionResult,
} from '../types/variant-types';

/**
 * Semantic color mapping for better AI understanding.
 * Maps human-readable intent to specific color tokens.
 */
export const SEMANTIC_COLOR_MAP = {
  // State colors
  success: 'text-green-700 dark:text-green-300',
  error: 'text-red-700 dark:text-red-300',
  warning: 'text-amber-700 dark:text-amber-300',
  info: 'text-blue-700 dark:text-blue-300',

  // Action colors
  primary: 'text-blue-600 dark:text-blue-400',
  secondary: 'text-gray-600 dark:text-gray-400',
  accent: 'text-purple-600 dark:text-purple-400',

  // Content colors
  muted: 'text-gray-500 dark:text-gray-500',
  emphasis: 'text-gray-900 dark:text-gray-100',
  subtle: 'text-gray-600 dark:text-gray-400',
} as const;

/**
 * Common UI patterns with descriptive names for AI understanding.
 */
export const UI_PATTERNS = {
  // Layout patterns
  centeredContainer: 'mx-auto max-w-7xl px-4 sm:px-6 lg:px-8',
  fullWidthSection: 'w-full py-8 sm:py-12 lg:py-16',
  flexBetween: 'flex items-center justify-between',
  flexCenter: 'flex items-center justify-center',
  gridResponsive: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6',

  // Interactive states
  clickable: 'cursor-pointer transition-colors duration-200 hover:opacity-80',
  focusable: 'focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2',
  disabled: 'opacity-50 cursor-not-allowed pointer-events-none',

  // Visual hierarchy
  cardShadow: 'shadow-md hover:shadow-lg transition-shadow duration-200',
  elevatedCard:
    'bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700',
  subtleCard: 'bg-gray-50 dark:bg-gray-900 rounded-md border border-gray-200 dark:border-gray-800',

  // Spacing patterns
  sectionSpacing: 'py-8 sm:py-12 lg:py-16',
  componentSpacing: 'space-y-4',
  tightSpacing: 'space-y-2',
  looseSpacing: 'space-y-8',
} as const;

/**
 * Component size multipliers for consistent scaling.
 */
export const SIZE_SCALES = {
  xs: { padding: 'px-2 py-1', text: 'text-xs', height: 'h-6' },
  sm: { padding: 'px-3 py-1.5', text: 'text-sm', height: 'h-8' },
  md: { padding: 'px-4 py-2', text: 'text-base', height: 'h-10' },
  lg: { padding: 'px-6 py-3', text: 'text-lg', height: 'h-12' },
  xl: { padding: 'px-8 py-4', text: 'text-xl', height: 'h-14' },
} as const;

/**
 * Gets semantic color classes by intent, making it easier for AI to understand
 * color usage patterns.
 *
 * @param intent - The semantic intent of the color
 * @returns CSS class string for the specified intent
 *
 * @example
 * ```typescript
 * // AI can easily understand these semantic mappings
 * const errorText = getSemanticColor('error');
 * const successMessage = getSemanticColor('success');
 * const primaryButton = getSemanticColor('primary');
 * ```
 */
export function getSemanticColor(intent: keyof typeof SEMANTIC_COLOR_MAP): string {
  return SEMANTIC_COLOR_MAP[intent];
}

/**
 * Applies a UI pattern by name, making it easier for AI to understand
 * common layout and interaction patterns.
 *
 * @param pattern - The name of the UI pattern to apply
 * @param additional - Additional classes to merge with the pattern
 * @returns Combined CSS class string
 *
 * @example
 * ```typescript
 * // AI can easily understand these pattern names
 * const container = applyUIPattern('centeredContainer');
 * const card = applyUIPattern('elevatedCard', 'p-6');
 * const button = applyUIPattern('clickable', 'bg-blue-500 text-white');
 * ```
 */
export function applyUIPattern(pattern: keyof typeof UI_PATTERNS, additional?: string): string {
  return cn(UI_PATTERNS[pattern], additional);
}

/**
 * Creates a component with consistent sizing, making it easier for AI
 * to generate properly scaled components.
 *
 * @param size - The size scale to apply
 * @param baseClasses - Base CSS classes for the component
 * @returns CSS class string with applied sizing
 *
 * @example
 * ```typescript
 * // AI can easily generate consistently sized components
 * const smallButton = createSizedComponent('sm', 'bg-blue-500 text-white rounded');
 * const largeInput = createSizedComponent('lg', 'border border-gray-300 rounded');
 * ```
 */
export function createSizedComponent(size: keyof typeof SIZE_SCALES, baseClasses: string): string {
  const scale = SIZE_SCALES[size];
  return cn(baseClasses, scale.padding, scale.text, scale.height);
}

/**
 * Generates a complete component class string with semantic intent,
 * making it easier for AI to create components with proper styling.
 *
 * @param options - Configuration options for the component
 * @returns Complete CSS class string
 *
 * @example
 * ```typescript
 * // AI can easily generate complete component styles
 * const primaryButton = createComponentWithIntent({
 *   intent: 'primary',
 *   size: 'md',
 *   pattern: 'clickable',
 *   additional: 'rounded-md font-medium'
 * });
 *
 * const errorAlert = createComponentWithIntent({
 *   intent: 'error',
 *   pattern: 'elevatedCard',
 *   additional: 'p-4 border-l-4 border-red-500'
 * });
 * ```
 */
export function createComponentWithIntent(options: {
  intent?: keyof typeof SEMANTIC_COLOR_MAP;
  size?: keyof typeof SIZE_SCALES;
  pattern?: keyof typeof UI_PATTERNS;
  additional?: string;
}): string {
  const classes: string[] = [];

  if (options.intent) {
    classes.push(getSemanticColor(options.intent));
  }

  if (options.pattern) {
    classes.push(UI_PATTERNS[options.pattern]);
  }

  if (options.size) {
    const scale = SIZE_SCALES[options.size];
    classes.push(scale.padding, scale.text, scale.height);
  }

  if (options.additional) {
    classes.push(options.additional);
  }

  return cn(...classes);
}

/**
 * Validates variant configuration for better error detection.
 * Helps AI assistants understand when variant configurations are invalid.
 *
 * @param config - Variant configuration to validate
 * @param options - Validation options
 * @returns Validation result with errors and warnings
 *
 * @example
 * ```typescript
 * // AI can use this to validate generated variant configurations
 * const result = validateVariantConfig(generatedConfig, {
 *   requireDefault: true,
 *   checkTypes: true
 * });
 *
 * if (!result.isValid) {
 *   console.log('Issues found:', result.errors);
 * }
 * ```
 */
export function validateVariantConfig(
  config: TypedVariantConfig,
  options: {
    requireDefault?: boolean;
    checkTypes?: boolean;
    allowedComponents?: string[];
  } = {}
): {
  isValid: boolean;
  errors: string[];
  warnings: string[];
  suggestions: string[];
} {
  const errors: string[] = [];
  const warnings: string[] = [];
  const suggestions: string[] = [];

  for (const [componentName, componentConfig] of Object.entries(config)) {
    // Check if component is in allowed list
    if (options.allowedComponents && !options.allowedComponents.includes(componentName)) {
      warnings.push(`Component '${componentName}' is not in the allowed components list`);
    }

    // Check for default variant if required
    if (options.requireDefault && typeof componentConfig === 'object' && componentConfig !== null) {
      if (!('default' in componentConfig)) {
        errors.push(`Component '${componentName}' is missing required 'default' variant`);
        suggestions.push(`Add a 'default' variant to ${componentName}`);
      }
    }

    // Type checking
    if (options.checkTypes && typeof componentConfig === 'object' && componentConfig !== null) {
      for (const [variantName, variantValue] of Object.entries(componentConfig)) {
        if (
          typeof variantValue !== 'function' &&
          typeof variantValue !== 'string' &&
          typeof variantValue !== 'object'
        ) {
          errors.push(
            `Invalid variant type for ${componentName}.${variantName}: expected function, string, or object`
          );
        }
      }
    }
  }

  return {
    isValid: errors.length === 0,
    errors,
    warnings,
    suggestions,
  };
}

/**
 * Safe variant resolver that provides detailed error information.
 * Helps AI assistants understand when and why variant resolution fails.
 *
 * @param config - Variant configuration
 * @param component - Component name
 * @param variant - Variant name
 * @param options - Resolution options
 * @returns Detailed resolution result
 */
export function safeResolveVariant(
  config: TypedVariantConfig,
  component: string,
  variant: string = 'default',
  options: VariantResolutionOptions = {}
): VariantResolutionResult {
  const result: VariantResolutionResult = {
    classes: '',
    usedFallback: false,
    warnings: [],
    requested: { component, variant },
  };

  try {
    const componentConfig = config[component];

    if (!componentConfig) {
      result.warnings?.push(`Component '${component}' not found in configuration`);
      if (options.fallback) {
        result.classes = options.fallback(component, variant);
        result.usedFallback = true;
      } else if (options.strict) {
        throw new Error(`Component '${component}' not found`);
      }
      return result;
    }

    if (typeof componentConfig === 'function') {
      result.classes = componentConfig();
      return result;
    }

    if (typeof componentConfig === 'string') {
      result.classes = componentConfig;
      return result;
    }

    if (typeof componentConfig === 'object' && componentConfig !== null) {
      const variantValue = componentConfig[variant];

      if (!variantValue) {
        result.warnings?.push(`Variant '${variant}' not found for component '${component}'`);

        // Try default variant
        const defaultVariant = componentConfig['default'];
        if (defaultVariant) {
          result.classes =
            typeof defaultVariant === 'function' ? defaultVariant() : String(defaultVariant);
          result.usedFallback = true;
          result.warnings?.push(`Using 'default' variant instead`);
          return result;
        }

        if (options.fallback) {
          result.classes = options.fallback(component, variant);
          result.usedFallback = true;
        } else if (options.strict) {
          throw new Error(`Variant '${variant}' not found for component '${component}'`);
        }
        return result;
      }

      result.classes = typeof variantValue === 'function' ? variantValue() : String(variantValue);
      return result;
    }
  } catch (error) {
    result.warnings?.push(
      `Error resolving variant: ${error instanceof Error ? error.message : String(error)}`
    );
    if (options.fallback) {
      result.classes = options.fallback(component, variant);
      result.usedFallback = true;
    }
  }

  return result;
}

/**
 * Generates suggested completions for variant names.
 * Helps AI assistants provide better autocomplete suggestions.
 *
 * @param config - Variant configuration
 * @param component - Component name
 * @param partial - Partial variant name to match
 * @returns Array of suggested variant names
 */
export function getVariantSuggestions(
  config: TypedVariantConfig,
  component: string,
  partial: string = ''
): string[] {
  const componentConfig = config[component];

  if (!componentConfig || typeof componentConfig !== 'object' || componentConfig === null) {
    return [];
  }

  return Object.keys(componentConfig)
    .filter((variant) => variant.toLowerCase().includes(partial.toLowerCase()))
    .sort();
}

/**
 * Analyzes variant usage patterns for optimization recommendations.
 * Helps AI assistants understand and optimize variant usage.
 *
 * @param config - Variant configuration to analyze
 * @returns Analysis results with optimization suggestions
 */
export function analyzeVariantUsage(config: TypedVariantConfig): {
  componentCount: number;
  variantCount: number;
  missingDefaults: string[];
  duplicatePatterns: Array<{ pattern: string; components: string[] }>;
  optimizationSuggestions: string[];
} {
  const analysis = {
    componentCount: 0,
    variantCount: 0,
    missingDefaults: [] as string[],
    duplicatePatterns: [] as Array<{ pattern: string; components: string[] }>,
    optimizationSuggestions: [] as string[],
  };

  const variantPatterns = new Map<string, string[]>();

  for (const [componentName, componentConfig] of Object.entries(config)) {
    analysis.componentCount++;

    if (typeof componentConfig === 'object' && componentConfig !== null) {
      const variants = Object.keys(componentConfig);
      analysis.variantCount += variants.length;

      // Check for missing default
      if (!variants.includes('default')) {
        analysis.missingDefaults.push(componentName);
      }

      // Check for duplicate patterns
      for (const [variantName, variantValue] of Object.entries(componentConfig)) {
        const pattern = typeof variantValue === 'function' ? variantValue() : String(variantValue);
        if (!variantPatterns.has(pattern)) {
          variantPatterns.set(pattern, []);
        }
        variantPatterns.get(pattern)!.push(`${componentName}.${variantName}`);
      }
    }
  }

  // Find duplicate patterns
  for (const [pattern, components] of variantPatterns.entries()) {
    if (components.length > 1) {
      analysis.duplicatePatterns.push({ pattern, components });
    }
  }

  // Generate suggestions
  if (analysis.missingDefaults.length > 0) {
    analysis.optimizationSuggestions.push(
      `Consider adding 'default' variants to: ${analysis.missingDefaults.join(', ')}`
    );
  }

  if (analysis.duplicatePatterns.length > 0) {
    analysis.optimizationSuggestions.push(
      `Consider extracting common patterns into shared utilities for: ${analysis.duplicatePatterns
        .slice(0, 3)
        .map((d) => `${d.pattern.slice(0, 30)}...`)
        .join(', ')}`
    );
  }

  return analysis;
}

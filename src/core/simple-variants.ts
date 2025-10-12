/**
 * Simple, Platform-Agnostic Variant System
 *
 * This module provides a framework-agnostic variant system that works across
 * React, React Native, Vue, or any JavaScript framework. It allows for
 * consistent styling through a simple, predictable API.
 *
 * @module SimpleVariants
 * @author Design System Team
 * @since 1.0.0
 * @example
 * ```typescript
 * import { SimpleVariants, createVariants } from '@sudobility/design';
 *
 * // Create a variant system
 * const variants = createVariants(designSystemVariants);
 *
 * // Use variants in your components
 * const buttonClass = variants.get('button', 'primary');
 * // Returns: "bg-blue-600 text-white px-4 py-2 rounded ..."
 * ```
 */

/**
 * Function that returns a CSS class string for styling components.
 *
 * @example
 * ```typescript
 * const primaryButton: VariantFunction = () =>
 *   'bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700';
 * ```
 */
export interface VariantFunction {
  (): string;
}

/**
 * Configuration object for component variants.
 * Maps component names to their variant definitions.
 *
 * @example
 * ```typescript
 * const config: VariantConfig = {
 *   button: {
 *     primary: () => 'bg-blue-600 text-white px-4 py-2 rounded',
 *     secondary: () => 'bg-gray-200 text-gray-900 px-4 py-2 rounded'
 *   },
 *   input: {
 *     default: () => 'border border-gray-300 px-3 py-2 rounded'
 *   }
 * };
 * ```
 */
export interface VariantConfig {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [componentName: string]: any;
}

/**
 * Platform-agnostic variant resolver that provides consistent styling
 * across different frameworks and platforms.
 *
 * This class manages component variants and provides fallback styling
 * when specific variants are not found. It supports both function-based
 * and string-based variant definitions.
 *
 * @example
 * ```typescript
 * const variants = new SimpleVariants(designSystemVariants);
 *
 * // Get variant classes
 * const primaryButton = variants.get('button', 'primary');
 * const outlineButton = variants.get('button.outline'); // dot notation
 *
 * // Check if variant exists
 * if (variants.has('button', 'custom')) {
 *   const customButton = variants.get('button', 'custom');
 * }
 * ```
 */
export class SimpleVariants {
  private variants: VariantConfig;
  private fallbacks: Map<string, string> = new Map();

  /**
   * Creates a new SimpleVariants instance.
   *
   * @param designSystemVariants - Configuration object containing variant definitions
   * @example
   * ```typescript
   * const variants = new SimpleVariants({
   *   button: {
   *     primary: () => 'bg-blue-600 text-white px-4 py-2 rounded',
   *     secondary: () => 'bg-gray-200 text-gray-900 px-4 py-2 rounded'
   *   }
   * });
   * ```
   */
  constructor(designSystemVariants: VariantConfig) {
    this.variants = designSystemVariants || {};
    this.setupDefaultFallbacks();
    this.validateConfiguration();
  }

  /**
   * Sets up default fallback styles for common component variants.
   * These fallbacks ensure that basic styling is available even when
   * specific variants are not defined in the design system.
   *
   * @private
   */
  private setupDefaultFallbacks() {
    // Web/React Native compatible fallbacks
    this.fallbacks.set('button.primary', 'bg-blue-600 text-white px-4 py-2 rounded');
    this.fallbacks.set('button.secondary', 'bg-gray-200 text-gray-900 px-4 py-2 rounded');
    this.fallbacks.set('button.outline', 'border border-gray-300 text-gray-700 px-4 py-2 rounded');
    this.fallbacks.set(
      'alert.default',
      'bg-blue-50 border border-blue-200 text-blue-800 p-4 rounded'
    );
    this.fallbacks.set(
      'alert.destructive',
      'bg-red-50 border border-red-200 text-red-800 p-4 rounded'
    );
    this.fallbacks.set(
      'input.default',
      'border border-gray-300 px-3 py-2 rounded focus:ring-2 focus:ring-blue-500'
    );
    this.fallbacks.set('badge.default', 'bg-gray-100 text-gray-800 px-2 py-1 rounded text-sm');
  }

  /**
   * Retrieves CSS classes for a specific component variant.
   *
   * This is the main API method for getting variant classes. It supports
   * both separate parameters and dot notation for convenience.
   *
   * @param component - The component name (e.g., 'button', 'input')
   * @param variant - The variant name (e.g., 'primary', 'outline'). Defaults to 'default'
   * @returns CSS class string for the specified variant
   * @throws {Error} When neither variant nor fallback is available
   *
   * @example
   * ```typescript
   * // Separate parameters
   * const classes1 = variants.get('button', 'primary');
   * // Returns: "bg-blue-600 text-white px-4 py-2 rounded ..."
   *
   * // Dot notation
   * const classes2 = variants.get('button.primary');
   * // Returns: same as above
   *
   * // Default variant
   * const classes3 = variants.get('input');
   * // Returns: default input styling
   * ```
   */
  get(component: string, variant?: string): string {
    // Handle dot notation: get('button.primary')
    if (!variant && component.includes('.')) {
      const [comp, var_] = component.split('.', 2);
      return this.get(comp, var_);
    }

    if (!variant) {
      variant = 'default';
    }

    try {
      const componentVariants = this.variants[component];
      if (!componentVariants) {
        return this.getFallback(component, variant);
      }

      const variantValue = componentVariants[variant];

      // Handle function variants
      if (typeof variantValue === 'function') {
        return variantValue();
      }

      // Handle string variants
      if (typeof variantValue === 'string') {
        return variantValue;
      }

      // Handle object variants with default
      if (variantValue && typeof variantValue === 'object') {
        if (typeof variantValue.default === 'function') {
          return variantValue.default();
        }
        if (typeof variantValue.default === 'string') {
          return variantValue.default;
        }
      }

      return this.getFallback(component, variant);
    } catch (error) {
      const errorMessage = `Failed to resolve variant '${component}.${variant}': ${error instanceof Error ? error.message : String(error)}`;
      this.logStructuredError('VARIANT_RESOLUTION_ERROR', errorMessage, {
        component,
        variant,
        error: error instanceof Error ? error.message : String(error),
        availableVariants: this.getAvailableVariants(component),
      });
      return this.getFallback(component, variant);
    }
  }

  /**
   * Retrieves CSS classes for a specific component variant with size modifier.
   *
   * This method allows you to get size-specific variants (e.g., small, medium, large)
   * for components. If the sized variant doesn't exist, it falls back to the base variant.
   *
   * @param component - The component name (e.g., 'button', 'input')
   * @param variant - The variant name (e.g., 'primary', 'outline')
   * @param size - The size modifier (e.g., 'sm', 'md', 'lg')
   * @returns CSS class string for the specified sized variant
   *
   * @example
   * ```typescript
   * // Get a small primary button
   * const smallButton = variants.sized('button', 'primary', 'sm');
   * // Returns: "bg-blue-600 text-white px-3 py-1.5 text-xs ..."
   *
   * // Get a large secondary button
   * const largeButton = variants.sized('button', 'secondary', 'lg');
   * // Returns: "bg-gray-100 text-gray-900 px-6 py-3 text-base ..."
   * ```
   */
  sized(component: string, variant: string, size: string): string {
    try {
      const componentVariants = this.variants[component];
      const variantObj = componentVariants?.[variant];

      if (variantObj && typeof variantObj === 'object' && variantObj[size]) {
        const sizedVariant = variantObj[size];
        if (typeof sizedVariant === 'function') {
          return sizedVariant();
        }
        if (typeof sizedVariant === 'string') {
          return sizedVariant;
        }
      }

      // Fallback to base variant
      return this.get(component, variant);
    } catch (error) {
      console.warn(`Failed to get sized variant ${component}.${variant}.${size}:`, error);
      return this.get(component, variant);
    }
  }

  /**
   * Retrieves CSS classes for nested variant paths.
   *
   * This method allows you to access deeply nested variants using dot notation.
   * Useful for complex variant structures with multiple levels of nesting.
   *
   * @param path - Dot-separated path to the variant (e.g., 'button.gradient.primary')
   * @returns CSS class string for the nested variant
   *
   * @example
   * ```typescript
   * // Get a nested gradient button variant
   * const gradientButton = variants.nested('button.gradient.primary');
   * // Returns: "bg-gradient-to-r from-blue-600 to-purple-600 ..."
   *
   * // Access deeply nested variants
   * const cardHeader = variants.nested('card.header.elevated');
   * ```
   */
  nested(path: string): string {
    try {
      const parts = path.split('.');
      let current = this.variants;

      for (const part of parts) {
        current = current?.[part];
        if (!current) break;
      }

      if (typeof current === 'function') {
        return current();
      }
      if (typeof current === 'string') {
        return current;
      }
      if (current && typeof current.default === 'function') {
        return current.default();
      }
      if (current && typeof current.default === 'string') {
        return current.default;
      }

      return this.getFallback(parts[0], parts.slice(1).join('.'));
    } catch (error) {
      console.warn(`Failed to get nested variant ${path}:`, error);
      return this.getFallback(path.split('.')[0], path.split('.').slice(1).join('.'));
    }
  }

  /**
   * Conditionally selects between two variants based on a boolean condition.
   *
   * This utility method helps with conditional styling, allowing you to
   * switch between different variants based on application state.
   *
   * @param condition - Boolean condition to evaluate
   * @param trueComponent - Component name when condition is true
   * @param trueVariant - Variant name when condition is true
   * @param falseComponent - Component name when condition is false (optional)
   * @param falseVariant - Variant name when condition is false (optional)
   * @returns CSS class string for the selected variant
   *
   * @example
   * ```typescript
   * // Show error or success alert based on validation
   * const alertClasses = variants.when(
   *   hasError,
   *   'alert', 'destructive',
   *   'alert', 'success'
   * );
   *
   * // Simple boolean styling
   * const buttonClasses = variants.when(isLoading, 'button', 'disabled');
   * ```
   */
  when(
    condition: boolean,
    trueComponent: string,
    trueVariant: string,
    falseComponent?: string,
    falseVariant?: string
  ): string {
    if (condition) {
      return this.get(trueComponent, trueVariant);
    }
    if (falseComponent && falseVariant) {
      return this.get(falseComponent, falseVariant);
    }
    return '';
  }

  /**
   * Combines multiple variant classes into a single class string.
   *
   * This method allows you to merge variant classes with custom classes,
   * creating complex styling combinations. Supports both variant paths
   * and custom CSS classes.
   *
   * @param variants - Array of variant paths or custom CSS classes
   * @returns Combined CSS class string
   *
   * @example
   * ```typescript
   * // Combine variant with custom classes
   * const complexButton = variants.combine(
   *   'button.primary',
   *   'animations.hover',
   *   'custom-shadow',
   *   'my-2'
   * );
   * // Returns: "bg-blue-600 text-white ... hover:scale-105 custom-shadow my-2"
   *
   * // Mix variants and utilities
   * const styledCard = variants.combine(
   *   'card.elevated',
   *   'border-2',
   *   'border-blue-500'
   * );
   * ```
   */
  combine(...variants: string[]): string {
    return variants
      .map((v) => {
        if (v.includes('.')) {
          return this.nested(v);
        }
        return v; // Assume it's a custom class
      })
      .filter(Boolean)
      .join(' ');
  }

  /**
   * Gets fallback styles for when variants are not found.
   *
   * @private
   * @param component - Component name
   * @param variant - Variant name
   * @returns Fallback CSS classes or empty string
   */
  private getFallback(component: string, variant: string): string {
    const key = `${component}.${variant}`;
    const fallback = this.fallbacks.get(key) || this.fallbacks.get(`${component}.default`) || '';

    if (!fallback) {
      this.logStructuredError(
        'FALLBACK_NOT_FOUND',
        `No fallback found for '${component}.${variant}'`,
        {
          component,
          variant,
          availableFallbacks: Array.from(this.fallbacks.keys()),
          suggestion: `Consider adding a fallback with addFallback('${component}.${variant}', 'your-classes')`,
        }
      );
    }

    return fallback;
  }

  /**
   * Logs structured error messages for better debugging and AI assistance.
   *
   * @private
   * @param errorCode - Standardized error code
   * @param message - Human-readable error message
   * @param context - Additional context for debugging
   */
  private logStructuredError(
    errorCode: string,
    message: string,
    context: Record<string, unknown>
  ): void {
    const structuredError = {
      timestamp: new Date().toISOString(),
      code: errorCode,
      message,
      context,
      source: 'SimpleVariants',
    };

    // Log as a structured object for better AI understanding
    console.warn('🎨 Design System Warning:', structuredError);
  }

  /**
   * Gets available variants for a component.
   *
   * @private
   * @param component - Component name
   * @returns Array of available variant names
   */
  private getAvailableVariants(component: string): string[] {
    try {
      const componentVariants = this.variants[component];
      if (!componentVariants || typeof componentVariants !== 'object') {
        return [];
      }
      return Object.keys(componentVariants);
    } catch {
      return [];
    }
  }

  /**
   * Validates variant configuration on initialization.
   *
   * @private
   */
  private validateConfiguration(): void {
    // Handle null/undefined configurations gracefully
    if (!this.variants || typeof this.variants !== 'object') {
      this.logStructuredError(
        'INVALID_CONFIGURATION',
        'Variant configuration is null, undefined, or not an object',
        {
          configType: typeof this.variants,
          configValue: this.variants,
          suggestion: 'Provide a valid variant configuration object',
        }
      );
      return;
    }

    const issues: Array<{ type: 'error' | 'warning'; message: string; component?: string }> = [];

    for (const [componentName, componentConfig] of Object.entries(this.variants)) {
      // Check if component has a default variant (recommended)
      if (typeof componentConfig === 'object' && componentConfig !== null) {
        if (!('default' in componentConfig)) {
          issues.push({
            type: 'warning',
            message: `Component '${componentName}' has no 'default' variant`,
            component: componentName,
          });
        }

        // Check variant types
        for (const [variantName, variantValue] of Object.entries(componentConfig)) {
          if (
            typeof variantValue !== 'function' &&
            typeof variantValue !== 'string' &&
            typeof variantValue !== 'object'
          ) {
            issues.push({
              type: 'error',
              message: `Invalid variant type for '${componentName}.${variantName}': expected function, string, or object`,
              component: componentName,
            });
          }
        }
      }
    }

    if (issues.length > 0) {
      this.logStructuredError('CONFIGURATION_VALIDATION', 'Variant configuration has issues', {
        issues,
        totalComponents: Object.keys(this.variants).length,
        recommendations: [
          'Add default variants to all components',
          'Ensure all variants are functions, strings, or objects',
          'Consider using TypeScript for better type safety',
        ],
      });
    }
  }

  /**
   * Adds a custom fallback style for a specific variant.
   *
   * This method allows you to define fallback styles that will be used
   * when a specific variant is not found in the design system.
   *
   * @param key - The variant key in format 'component.variant'
   * @param classes - CSS classes to use as fallback
   *
   * @example
   * ```typescript
   * // Add custom fallback for a missing variant
   * variants.addFallback('button.special', 'bg-purple-600 text-white px-4 py-2 rounded');
   *
   * // Now this will use the fallback if 'special' variant doesn't exist
   * const specialButton = variants.get('button', 'special');
   * ```
   */
  addFallback(key: string, classes: string): void {
    this.fallbacks.set(key, classes);
  }

  /**
   * Checks if a specific variant exists in the design system.
   *
   * This utility method helps you conditionally apply variants
   * based on their availability in the design system.
   *
   * @param component - The component name to check
   * @param variant - The variant name to check
   * @returns true if the variant exists, false otherwise
   *
   * @example
   * ```typescript
   * // Check before using a variant
   * if (variants.has('button', 'gradient')) {
   *   const buttonClass = variants.get('button', 'gradient');
   * } else {
   *   const buttonClass = variants.get('button', 'primary');
   * }
   *
   * // Conditional rendering logic
   * const showGradientOption = variants.has('button', 'gradient');
   * ```
   */
  has(component: string, variant: string): boolean {
    try {
      const componentVariants = this.variants[component];
      return !!(componentVariants && componentVariants[variant]);
    } catch {
      return false;
    }
  }
}

/**
 * Creates a new SimpleVariants instance with the provided configuration.
 *
 * This is a convenience factory function for creating variant resolvers.
 * It's the recommended way to initialize the variant system.
 *
 * @param designSystemVariants - Configuration object containing variant definitions
 * @returns Configured SimpleVariants instance
 *
 * @example
 * ```typescript
 * import { createVariants } from '@sudobility/design';
 * import { variants as designSystemVariants } from './design-system';
 *
 * const variants = createVariants(designSystemVariants);
 * const buttonClass = variants.get('button', 'primary');
 * ```
 */
export function createVariants(designSystemVariants: VariantConfig): SimpleVariants {
  return new SimpleVariants(designSystemVariants);
}

/**
 * Creates a quick-access variant utility with convenient shorthand methods.
 *
 * This function returns an object with pre-configured methods for common
 * components, making variant access more convenient in your application code.
 *
 * @param designSystemVariants - Configuration object containing variant definitions
 * @returns Object with shorthand methods for variant access
 *
 * @example
 * ```typescript
 * import { createQuickVariants } from '@sudobility/design';
 *
 * const variants = createQuickVariants(designSystemVariants);
 *
 * // Use shorthand methods
 * const primaryButton = variants.button('primary');
 * const smallButton = variants.button('primary', 'sm');
 * const errorAlert = variants.alert('destructive');
 *
 * // Use generic methods
 * const customVariant = variants.get('custom', 'variant');
 * const conditionalClass = variants.when(isError, 'alert', 'error');
 * ```
 */
export function createQuickVariants(designSystemVariants: VariantConfig) {
  const resolver = new SimpleVariants(designSystemVariants);

  return {
    // Direct access functions
    button: (variant: string, size?: string) =>
      size ? resolver.sized('button', variant, size) : resolver.get('button', variant),
    alert: (variant: string) => resolver.get('alert', variant),
    input: (variant: string) => resolver.get('input', variant),
    badge: (variant: string) => resolver.get('badge', variant),

    // Generic access
    get: (component: string, variant?: string) => resolver.get(component, variant),
    nested: (path: string) => resolver.nested(path),
    when: (
      condition: boolean,
      trueComp: string,
      trueVar: string,
      falseComp?: string,
      falseVar?: string
    ) => resolver.when(condition, trueComp, trueVar, falseComp, falseVar),
    combine: (...variants: string[]) => resolver.combine(...variants),
  };
}

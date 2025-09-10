/**
 * Variant Registry - Type-safe variant management
 */

// Base interfaces for variant system
export interface VariantFunction {
  (): string;
}

export interface VariantGroup {
  [key: string]: VariantFunction | VariantGroup;
}

export interface ComponentVariants {
  button: {
    primary: VariantFunction;
    secondary: VariantFunction;
    outline: VariantFunction;
    destructive: VariantFunction;
    ghost: VariantFunction;
    link: VariantFunction;
  };
  alert: {
    default: VariantFunction;
    destructive: VariantFunction;
    warning: VariantFunction;
    success: VariantFunction;
  };
  input: {
    default: VariantFunction;
    error: VariantFunction;
  };
  badge: {
    default: VariantFunction;
    secondary: VariantFunction;
    destructive: VariantFunction;
    outline: VariantFunction;
  };
}

// Variant registry with fallbacks
export class VariantRegistry {
  private variants: Partial<ComponentVariants>;
  private fallbacks: Map<string, string> = new Map();

  constructor(variants: any) {
    this.variants = variants;
    this.setupFallbacks();
  }

  private setupFallbacks() {
    // Define fallback classes for when design system variants are missing
    this.fallbacks.set('button.primary', 'bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md');
    this.fallbacks.set('button.secondary', 'bg-gray-200 hover:bg-gray-300 text-gray-900 px-4 py-2 rounded-md');
    this.fallbacks.set('button.outline', 'border border-gray-300 hover:bg-gray-50 text-gray-700 px-4 py-2 rounded-md');
    this.fallbacks.set('button.destructive', 'bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md');
    this.fallbacks.set('button.ghost', 'hover:bg-gray-100 text-gray-700 px-4 py-2 rounded-md');
    this.fallbacks.set('button.link', 'text-blue-600 hover:text-blue-700 underline-offset-4 hover:underline');
    
    this.fallbacks.set('alert.default', 'bg-blue-50 border border-blue-200 text-blue-800 p-4 rounded-md');
    this.fallbacks.set('alert.destructive', 'bg-red-50 border border-red-200 text-red-800 p-4 rounded-md');
    this.fallbacks.set('alert.warning', 'bg-yellow-50 border border-yellow-200 text-yellow-800 p-4 rounded-md');
    this.fallbacks.set('alert.success', 'bg-green-50 border border-green-200 text-green-800 p-4 rounded-md');
  }

  /**
   * Get variant class with automatic fallback
   */
  getVariant(component: keyof ComponentVariants, variant: string): string {
    try {
      const componentVariants = this.variants[component];
      if (!componentVariants) {
        return this.getFallback(component, variant);
      }

      const variantFn = componentVariants[variant];
      if (typeof variantFn === 'function') {
        return variantFn();
      }

      if (variantFn && typeof variantFn.default === 'function') {
        return variantFn.default();
      }

      return this.getFallback(component, variant);
    } catch (error) {
      console.warn(`Failed to get variant ${component}.${variant}:`, error);
      return this.getFallback(component, variant);
    }
  }

  /**
   * Get nested variant (e.g., button.gradient.primary)
   */
  getNestedVariant(path: string): string {
    try {
      const parts = path.split('.');
      let current: any = this.variants;
      
      for (const part of parts) {
        current = current?.[part];
        if (!current) break;
      }

      if (typeof current === 'function') {
        return current();
      }

      if (current && typeof current.default === 'function') {
        return current.default();
      }

      return this.getFallback(parts[0], parts.slice(1).join('.'));
    } catch (error) {
      console.warn(`Failed to get nested variant ${path}:`, error);
      return this.getFallback(path.split('.')[0], path.split('.').slice(1).join('.'));
    }
  }

  private getFallback(component: string, variant: string): string {
    const key = `${component}.${variant}`;
    return this.fallbacks.get(key) || 'p-2 rounded border';
  }

  /**
   * Check if variant exists
   */
  hasVariant(component: keyof ComponentVariants, variant: string): boolean {
    return !!(this.variants[component] && this.variants[component][variant]);
  }

  /**
   * Register custom fallback
   */
  registerFallback(key: string, classes: string) {
    this.fallbacks.set(key, classes);
  }
}

// Singleton instance
let variantRegistry: VariantRegistry | null = null;

export function createVariantRegistry(variants: any): VariantRegistry {
  variantRegistry = new VariantRegistry(variants);
  return variantRegistry;
}

export function getVariantRegistry(): VariantRegistry {
  if (!variantRegistry) {
    throw new Error('Variant registry not initialized. Call createVariantRegistry first.');
  }
  return variantRegistry;
}

// Convenience function
export function useVariant(component: keyof ComponentVariants, variant: string): string {
  return getVariantRegistry().getVariant(component, variant);
}
/**
 * Variant Builder - Fluent interface for building variant classes
 */

export class VariantBuilder {
  private classes: string[] = [];
  private variants: any;

  constructor(variants: any) {
    this.variants = variants;
  }

  /**
   * Add component variant
   */
  component(name: string): ComponentVariantBuilder {
    return new ComponentVariantBuilder(this, this.variants[name], name);
  }

  /**
   * Add custom classes
   */
  add(...classes: string[]): VariantBuilder {
    this.classes.push(...classes.filter(Boolean));
    return this;
  }

  /**
   * Build final class string
   */
  build(): string {
    return this.classes.join(' ').trim();
  }
}

export class ComponentVariantBuilder {
  private parent: VariantBuilder;
  private componentVariants: any;
  private componentName: string;

  constructor(parent: VariantBuilder, componentVariants: any, componentName: string) {
    this.parent = parent;
    this.componentVariants = componentVariants;
    this.componentName = componentName;
  }

  /**
   * Select variant
   */
  variant(name: string): ComponentVariantBuilder {
    try {
      const variant = this.componentVariants?.[name];
      if (typeof variant === 'function') {
        this.parent.add(variant());
      } else if (variant && typeof variant.default === 'function') {
        this.parent.add(variant.default());
      } else {
        console.warn(`Variant ${this.componentName}.${name} not found`);
      }
    } catch (error) {
      console.warn(`Failed to get variant ${this.componentName}.${name}:`, error);
    }
    return this;
  }

  /**
   * Select size variant
   */
  size(size: string): ComponentVariantBuilder {
    try {
      // Try size-specific variants first
      const currentVariant = this.getCurrentVariant();
      if (currentVariant && currentVariant[size] && typeof currentVariant[size] === 'function') {
        this.parent.add(currentVariant[size]());
      }
    } catch (error) {
      console.warn(`Failed to get size variant ${this.componentName}.${size}:`, error);
    }
    return this;
  }

  /**
   * Select nested variant
   */
  nested(path: string): ComponentVariantBuilder {
    try {
      const parts = path.split('.');
      let current = this.componentVariants;
      
      for (const part of parts) {
        current = current?.[part];
        if (!current) break;
      }

      if (typeof current === 'function') {
        this.parent.add(current());
      } else if (current && typeof current.default === 'function') {
        this.parent.add(current.default());
      }
    } catch (error) {
      console.warn(`Failed to get nested variant ${this.componentName}.${path}:`, error);
    }
    return this;
  }

  /**
   * Conditional variant
   */
  when(condition: boolean, variantName: string): ComponentVariantBuilder {
    if (condition) {
      this.variant(variantName);
    }
    return this;
  }

  /**
   * Return to parent builder
   */
  and(): VariantBuilder {
    return this.parent;
  }

  /**
   * Build final classes
   */
  build(): string {
    return this.parent.build();
  }

  private getCurrentVariant(): any {
    // This would need to track which variant was last selected
    // For simplicity, returning the whole component variants
    return this.componentVariants;
  }
}

/**
 * Create a new variant builder
 */
export function createVariantBuilder(variants: any): VariantBuilder {
  return new VariantBuilder(variants);
}

/**
 * Utility function for simple variant building
 */
export function buildVariant(variants: any): VariantBuilder {
  return new VariantBuilder(variants);
}
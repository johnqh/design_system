/**
 * Examples of different variant handling approaches
 */
import React from 'react';
import { variants } from '@sudobility/design';
import { VariantProvider, useVariant, useNestedVariant } from './variant-provider.example';
import { createVariantBuilder } from './variant-builder.example';
// Note: cn utility would need to be implemented or imported from a utility library

// =============================================================================
// 1. REGISTRY APPROACH - Clean and type-safe
// =============================================================================

function ButtonWithRegistry({ variant = 'primary', size = 'default', children, className, ...props }) {
  const variantClass = useVariant('button', variant);
  const sizeClass = size !== 'default' ? useNestedVariant(`button.${variant}.${size}`) : '';
  
  return (
    <button 
      className={`${variantClass} ${sizeClass} ${className || ''}`.trim()}
      {...props}
    >
      {children}
    </button>
  );
}

// =============================================================================
// 2. BUILDER PATTERN - Fluent interface
// =============================================================================

function ButtonWithBuilder({ variant = 'primary', size = 'default', children, className, ...props }) {
  const variantClass = createVariantBuilder(variants)
    .component('button')
    .variant(variant)
    .when(size !== 'default', size)
    .build();
  
  return (
    <button 
      className={`${variantClass} ${className || ''}`.trim()}
      {...props}
    >
      {children}
    </button>
  );
}

// =============================================================================
// 3. HOC APPROACH - Automatic variant injection
// =============================================================================

interface ButtonWithVariantsProps {
  variant?: string;
  size?: string;
  children: React.ReactNode;
  className?: string;
  variantRegistry?: any; // Injected by HOC
}

function BaseButton({ variant = 'primary', variantRegistry, children, className, ...props }: ButtonWithVariantsProps) {
  const variantClass = variantRegistry?.getVariant('button', variant) || '';
  
  return (
    <button 
      className={`${variantClass} ${className || ''}`.trim()}
      {...props}
    >
      {children}
    </button>
  );
}

// =============================================================================
// 4. PROVIDER SETUP - App-level configuration
// =============================================================================

export function ExampleApp() {
  const customFallbacks = {
    'button.custom': 'bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg',
    'alert.info': 'bg-blue-50 border-l-4 border-blue-400 text-blue-700 p-4',
  };

  return (
    <VariantProvider variants={variants} customFallbacks={customFallbacks}>
      <div className="space-y-4 p-8">
        
        {/* Registry approach */}
        <div>
          <h3>Registry Approach</h3>
          <ButtonWithRegistry variant="primary">Primary Button</ButtonWithRegistry>
          <ButtonWithRegistry variant="secondary" size="sm">Small Secondary</ButtonWithRegistry>
        </div>

        {/* Builder approach */}
        <div>
          <h3>Builder Approach</h3>
          <ButtonWithBuilder variant="outline">Outline Button</ButtonWithBuilder>
          <ButtonWithBuilder variant="destructive" size="lg">Large Destructive</ButtonWithBuilder>
        </div>

        {/* Complex variant building */}
        <div>
          <h3>Complex Builder Example</h3>
          <ComplexComponentExample />
        </div>

      </div>
    </VariantProvider>
  );
}

// =============================================================================
// 5. COMPLEX COMPONENT EXAMPLE
// =============================================================================

function ComplexComponentExample() {
  const [isLoading, setIsLoading] = React.useState(false);
  const [hasError, setHasError] = React.useState(false);

  // Builder pattern for complex logic
  const buttonClass = createVariantBuilder(variants)
    .component('button')
    .when(!isLoading && !hasError, 'primary')
    .when(isLoading, 'secondary')
    .when(hasError, 'destructive')
    .and()
    .add('transition-all duration-200')
    .add(isLoading ? 'cursor-not-allowed' : 'cursor-pointer')
    .build();

  // Registry for simple cases
  const alertClass = hasError 
    ? useVariant('alert', 'destructive')
    : useVariant('alert', 'success');

  return (
    <div className="space-y-2">
      <button 
        className={buttonClass}
        onClick={() => {
          setIsLoading(true);
          setTimeout(() => {
            setIsLoading(false);
            setHasError(Math.random() > 0.5);
          }, 1000);
        }}
      >
        {isLoading ? 'Loading...' : 'Try Me'}
      </button>
      
      {!isLoading && (
        <div className={alertClass}>
          {hasError ? 'Something went wrong!' : 'Success!'}
        </div>
      )}
    </div>
  );
}

// =============================================================================
// 6. MIGRATION HELPER
// =============================================================================

/**
 * Helper to migrate existing components gradually
 */
export function createLegacyVariantHelper(variants: any) {
  return {
    // Old way: variants.button.primary.default()
    button: {
      primary: () => useVariant('button', 'primary'),
      secondary: () => useVariant('button', 'secondary'),
      outline: () => useVariant('button', 'outline'),
    },
    alert: {
      default: () => useVariant('alert', 'default'),
      destructive: () => useVariant('alert', 'destructive'),
    },
    // Add more as needed...
  };
}
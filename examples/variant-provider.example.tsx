/**
 * Variant Provider - React Context-based DI for variants
 */
import React, { createContext, useContext, ReactNode } from 'react';
import { VariantRegistry, createVariantRegistry, ComponentVariants } from './variant-registry';

// Context for variant registry
const VariantContext = createContext<VariantRegistry | null>(null);

export interface VariantProviderProps {
  children: ReactNode;
  variants: any; // The design system variants
  customFallbacks?: Record<string, string>;
}

/**
 * Provider component for variant system
 */
export function VariantProvider({ children, variants, customFallbacks }: VariantProviderProps) {
  const registry = React.useMemo(() => {
    const reg = createVariantRegistry(variants);
    
    // Register any custom fallbacks
    if (customFallbacks) {
      Object.entries(customFallbacks).forEach(([key, classes]) => {
        reg.registerFallback(key, classes);
      });
    }
    
    return reg;
  }, [variants, customFallbacks]);

  return (
    <VariantContext.Provider value={registry}>
      {children}
    </VariantContext.Provider>
  );
}

/**
 * Hook to access variant registry
 */
export function useVariantRegistry(): VariantRegistry {
  const registry = useContext(VariantContext);
  if (!registry) {
    throw new Error('useVariantRegistry must be used within a VariantProvider');
  }
  return registry;
}

/**
 * Hook to get a specific variant
 */
export function useVariant(component: keyof ComponentVariants, variant: string): string {
  const registry = useVariantRegistry();
  return registry.getVariant(component, variant);
}

/**
 * Hook to get nested variants
 */
export function useNestedVariant(path: string): string {
  const registry = useVariantRegistry();
  return registry.getNestedVariant(path);
}

/**
 * Higher-order component for variant injection
 */
export function withVariants<P extends object>(
  Component: React.ComponentType<P>
) {
  return function VariantInjectedComponent(props: P) {
    const registry = useVariantRegistry();
    return <Component {...props} variantRegistry={registry} />;
  };
}
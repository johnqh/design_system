/**
 * Usage Examples - Platform Agnostic Variant System
 * Works with React, React Native, Vue, Vanilla JS, etc.
 */

import React from 'react';
import { variants as designSystemVariants } from '@johnqh/design-system';
import { createVariants, createQuickVariants } from '@johnqh/design-system';

// =============================================================================
// SETUP (Do this once in your app)
// =============================================================================

// Option 1: Full API
export const variants = createVariants(designSystemVariants);

// Option 2: Quick API (more convenient)
export const v = createQuickVariants(designSystemVariants);

// =============================================================================
// USAGE EXAMPLES
// =============================================================================

// ✨ MOST COMMON - Super simple
const buttonClass = v.button('primary');           // Easy!
const alertClass = v.alert('destructive');         // Easy!
const inputClass = v.input('default');             // Easy!

// ✨ WITH SIZES
const smallButton = v.button('primary', 'sm');     // Easy!
const largeButton = v.button('secondary', 'lg');   // Easy!

// ✨ GENERIC ACCESS
const customClass = v.get('badge', 'outline');     // Easy!
const dotNotation = v.get('button.primary');       // Easy!

// ✨ NESTED VARIANTS (for complex design systems)
const gradientButton = v.nested('button.gradient.primary');   // Easy!
const webThreeButton = v.nested('button.web3.connect');       // Easy!

// ✨ CONDITIONAL VARIANTS (hasError would be a variable in your component)
// const errorButton = v.when(hasError, 'button', 'destructive', 'button', 'primary');   // Easy!

// ✨ COMBINE MULTIPLE
const complexButton = v.combine('button.primary', 'animations.hover', 'shadow-lg');   // Easy!

// =============================================================================
// REACT COMPONENT EXAMPLES
// =============================================================================

// React Web Button
function Button({ variant = 'primary', size, children, className, ...props }: any) {
  return (
    <button 
      className={`${v.button(variant, size)} ${className || ''}`}
      {...props}
    >
      {children}
    </button>
  );
}

// React Native Button (just swap className for style)
// Note: TouchableOpacity and Text would be imported from 'react-native' in a real RN app
function ButtonRN({ variant = 'primary', size, children, style, ...props }: any) {
  const variantStyle = v.button(variant, size); // Same API!
  // In real implementation, you'd convert variantStyle classes to React Native styles
  return null; // Placeholder for React Native component
}

// Alert Component
function Alert({ variant = 'default', children, className }: any) {
  return (
    <div className={`${v.alert(variant)} ${className || ''}`}>
      {children}
    </div>
  );
}

// Complex Component with Multiple Variants
function ComplexCard({ isError, isLoading, priority }: any) {
  const cardClass = v.when(isError, 'card', 'error', 'card', 'default');
  const buttonClass = v.when(isLoading, 'button', 'disabled', 'button', 'primary');
  const badgeClass = v.get('badge', priority); // low, medium, high
  
  return (
    <div className={cardClass}>
      <span className={badgeClass}>{priority}</span>
      <button className={buttonClass}>
        {isLoading ? 'Loading...' : 'Action'}
      </button>
    </div>
  );
}

// =============================================================================
// MIGRATION FROM OLD APPROACH
// =============================================================================

// OLD (fragile, breaks with type changes)
// const buttonClass = variants.button.primary.default();
// const alertClass = variants.alert[variant]();

// NEW (robust, never breaks)
const buttonClass2 = v.button('primary');          // ✨ Same result, much safer
// const alertClass2 = v.alert(variant);              // ✨ Same result, much safer (variant would be a prop)

// =============================================================================
// PLATFORM-SPECIFIC ADAPTATIONS
// =============================================================================

// For React Native - convert classes to styles
function classesToStyles(classes: string) {
  // Simple example - you'd implement based on your needs
  const styleMap = {
    'bg-blue-600': { backgroundColor: '#2563eb' },
    'text-white': { color: '#ffffff' },
    'px-4': { paddingHorizontal: 16 },
    'py-2': { paddingVertical: 8 },
    'rounded': { borderRadius: 6 },
    // ... more mappings
  };
  
  return classes.split(' ').map(cls => styleMap[cls]).filter(Boolean);
}

// React Native with style conversion
function ButtonRNWithStyles({ variant = 'primary', children, style, ...props }: any) {
  const variantClasses = v.button(variant);
  const styles = classesToStyles(variantClasses);
  
  // In real implementation, you'd use TouchableOpacity and Text from react-native
  return null; // Placeholder for React Native component
}

// =============================================================================
// CUSTOM FALLBACKS
// =============================================================================

// Add your own fallbacks for missing variants
variants.addFallback('button.custom', 'bg-purple-600 text-white px-4 py-2 rounded');
variants.addFallback('alert.info', 'bg-blue-50 border-l-4 border-blue-400 text-blue-700 p-4');

// Now these work even if not in design system
const customButton = v.button('custom');           // Uses your fallback
const infoAlert = v.alert('info');                 // Uses your fallback
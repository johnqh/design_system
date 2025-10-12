# Design System Examples

This directory contains various example implementations showing how to use the `@sudobility/design` variant system.

## File Overview

### Core Examples (No Dependencies)
- **`simple-usage.example.ts`** - Basic variant usage without React
- **`variant-builder.example.ts`** - Fluent interface for building variants  
- **`variant-registry.example.ts`** - Type-safe variant management system

### React Examples (Require React)
- **`usage-examples.example.tsx`** - Comprehensive usage with React components
- **`variant-examples.example.tsx`** - Different variant handling approaches
- **`variant-provider.example.tsx`** - React Context-based dependency injection
- **`button-v2.example.tsx`** - Advanced button component with registry
- **`button-simple.tsx`** - Simple button component implementation

### Utilities
- **`utils.example.ts`** - Helper utilities for examples

## Usage Notes

1. **Import Paths**: Examples use relative imports (`../src/`) for demonstration. In real usage, import from `@sudobility/design`.

2. **React Dependencies**: React examples require React to be installed in your project. They are provided for reference and would need React types and runtime.

3. **Platform Agnostic**: The core variant system works with any JavaScript framework or vanilla JS.

## Running Examples

To test the non-React examples:
```bash
npx tsc --noEmit examples/simple-usage.example.ts
npx tsc --noEmit examples/variant-builder.example.ts
npx tsc --noEmit examples/variant-registry.example.ts
```

For React examples, ensure React is installed in your project and use appropriate JSX compilation settings.

## Integration

These examples show different patterns for integrating the design system:

1. **Simple API** (`simple-usage.example.ts`) - Direct variant function calls
2. **Builder Pattern** (`variant-builder.example.ts`) - Fluent interface  
3. **Registry Pattern** (`variant-registry.example.ts`) - Type-safe with fallbacks
4. **Provider Pattern** (`variant-provider.example.tsx`) - React Context injection
5. **Component Integration** (`button-*.tsx`) - Real component implementations

Choose the pattern that best fits your project's architecture and requirements.
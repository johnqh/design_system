# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a standalone design system library (`@sudobility/design`) that provides comprehensive design tokens, colors, typography, and variants for UI development. It serves as the foundation for the `@johnqh/mail-box-components` library and can be reused across multiple projects.

**Current Version:** 1.0.19
**License:** MIT
**Author:** John Q Huang
**Type:** ES Module

## Common Development Commands

```bash
# Build the design system library
npm run build

# Development mode with watch
npm run dev

# Type checking
npm run type-check

# Testing
npm test
npm run test:ui
npm run test:coverage

# Run single test
npm test -- src/__tests__/index.test.ts

# Lint and format
npm run lint          # ESLint + TypeScript check
npm run format        # Prettier format
npm run format:check  # Check formatting
```

## Architecture

### Core Design System Structure
```
src/
├── index.ts                      # Main entry point, unified exports
├── core/                         # Core design system modules
│   ├── simple-variants.ts       # Simplified variant system for easy theming
│   ├── typography.ts            # Typography system and text variants
│   └── variants.ts              # Component style variants
├── tokens/                       # Design token definitions
│   ├── colors.ts                # Color system (raw, semantic, component)
│   ├── gradients.ts             # Gradient definitions
│   └── tokens.ts                # Core design tokens (spacing, layout)
├── utilities/                    # Helper functions and utilities
│   ├── ai-helpers.ts            # AI-assisted development utilities
│   ├── component-helpers.ts     # Component creation utilities
│   ├── theme-utils.ts          # Theme and color utilities
│   ├── ui-constants.ts         # UI constant definitions
│   └── utils.ts                # General utility functions
├── types/                        # TypeScript type definitions
│   └── variant-types.ts        # Variant system type definitions
├── content/                      # Content optimization
│   ├── seo-keywords.ts         # SEO keyword configurations
│   └── structured-data.ts      # Structured data helpers
└── __tests__/                    # Comprehensive test suite
```

### Design Token Philosophy
- **4px Grid System** - All spacing based on consistent 4px increments
- **Semantic Naming** - Colors and tokens use purpose-based naming (primary, secondary, success, error)
- **Dark Mode First** - Full support for light and dark color schemes
- **Component-Specific** - Pre-built color combinations for common UI patterns
- **Type-Safe** - Comprehensive TypeScript types with literal type inference
- **AI-Optimized** - Semantic helpers and validation for better AI code generation

### Export Strategy
The library provides multiple export patterns for flexibility:
- **Named exports** - `colors`, `designTokens`, `textVariants`, `variants`, `simpleVariants`
- **Capitalized aliases** - `Colors`, `Tokens`, `Typography`, `Variants`
- **UI utilities** - `ui` object with common design patterns, `uiConstants` for UI constants
- **Theme utilities** - `createTheme`, `applyTheme`, `getThemeColors`
- **Component helpers** - `createComponentHelpers`, `getComponentClasses`
- **AI helpers** - `getSemanticColor`, `applyUIPattern`, `createComponentWithIntent`
- **Validation utilities** - `validateVariantConfig`, `safeResolveVariant`
- **Wildcard exports** - Full re-export for backward compatibility
- **Default export** - Grouped structure for convenience

## Key Implementation Details

### Color System Architecture
The color system has three levels:
1. **Raw Colors** - Base palette values (use sparingly)
2. **Semantic Colors** - Purpose-based tokens (recommended for most use cases)
3. **Component Colors** - Ready-to-use Tailwind classes for components

### Design Tokens Structure
- **Typography Scale** - Comprehensive font sizes, weights, and line heights
- **Spacing System** - Margin, padding, gap utilities with consistent scale
- **Animation Tokens** - Duration and easing presets
- **Layout Utilities** - Grid, flex, and responsive patterns
- **Z-Index Scale** - Layering system for UI hierarchy

### UI Utilities
Pre-built utility combinations for:
- Layout patterns (container, section, grid, flex)
- Typography hierarchy (headings, body, links, code)
- Interactive states (hover, focus, disabled)
- Web3-specific components (wallet buttons, chain badges)

### Component Style Variants
Ready-to-use Tailwind class combinations for:
- **Buttons** - Primary, secondary, outline, ghost, destructive, success, link, gradient
- **Cards** - Default, elevated, interactive, success, warning, error
- **Badges** - All variants including Web3-specific chains
- **Inputs** - Default and search variants with focus states
- **Alerts** - Info, success, warning, error with icons

## Development Workflow

### Adding New Design Tokens
1. Add token to appropriate file in the correct directory:
   - Color tokens → `src/tokens/colors.ts`
   - Design tokens → `src/tokens/tokens.ts`
   - Typography → `src/core/typography.ts`
   - Variants → `src/core/variants.ts` or `src/core/simple-variants.ts`
2. Update exports in `src/index.ts`
3. Add tests in appropriate test file under `src/__tests__/`
4. Build and test: `npm run build && npm test`

### Color System Updates
- Add raw colors to `rawColors` object
- Create semantic mappings in `semanticColors`
- Add component-specific classes to `componentColors`
- Use utility functions for complex combinations

### Testing Strategy
- Test all major exports are available
- Verify design token consistency
- Ensure utility functions work correctly
- Test both named and default exports

### Integration with Main Library
- This package is consumed as a local file dependency
- Changes require rebuilding: `npm run build`
- Main library re-exports all functionality for backward compatibility
- Maintains independent versioning and development lifecycle

## AI-Assisted Development Optimization

### Quick Reference for AI Assistants

#### Module Organization Map
```
src/
├── index.ts                      # Main entry, all exports
├── core/                         # Core modules
│   ├── simple-variants.ts       # Simple variant system
│   ├── typography.ts            # Typography system
│   └── variants.ts              # Component variants
├── tokens/                       # Design tokens
│   ├── colors.ts                # Color system
│   ├── gradients.ts             # Gradients
│   └── tokens.ts                # Core tokens
├── utilities/                    # Helpers & utils
│   ├── ai-helpers.ts            # AI utilities
│   ├── component-helpers.ts     # Component utils
│   ├── theme-utils.ts          # Theme utilities
│   ├── ui-constants.ts         # UI constants
│   └── utils.ts                # General utils
├── types/                        # TypeScript types
│   └── variant-types.ts        # Variant types
└── content/                      # Content helpers
    ├── seo-keywords.ts         # SEO keywords
    └── structured-data.ts      # Structured data
```

#### Import Examples
```typescript
// Core imports (most common)
import { colors, designTokens, textVariants, variants } from '@sudobility/design';

// Simple variant system
import { simpleVariants, createSimpleVariants } from '@sudobility/design';

// UI utilities and constants
import { ui, uiConstants } from '@sudobility/design';

// Theme utilities
import { createTheme, applyTheme, getThemeColors } from '@sudobility/design';

// Component helpers
import { createComponentHelpers, getComponentClasses } from '@sudobility/design';

// AI-helper utilities
import {
  getSemanticColor,
  applyUIPattern,
  createComponentWithIntent,
  validateVariantConfig,
  safeResolveVariant,
  analyzeVariantUsage
} from '@sudobility/design';

// SEO and structured data
import { seoKeywords, structuredData } from '@sudobility/design';

// Default import (all modules)
import designSystem from '@sudobility/design';
```

#### Common Usage Patterns
```typescript
// Using semantic colors
const primaryButton = colors.semantic.primary.DEFAULT;

// Using design tokens
const spacing = designTokens.spacing.margin.md;

// Using text variants
const heading = textVariants.h1;

// Using component variants
const buttonClass = variants.button.primary;

// Using UI utilities
const container = ui.layout.container;
```

### Structured Architecture
- **Clear separation of concerns** - Each file has a single, well-defined purpose
- **Consistent naming conventions** - camelCase for functions, PascalCase for types
- **Comprehensive TypeScript types** - All exports are fully typed with IntelliSense support
- **Semantic organization** - Structure mirrors design thinking and usage patterns

### Development-Friendly Features
- **Extensive JSDoc comments** - All major functions documented with examples
- **Comprehensive utility functions** - Color, theme, component, and AI helpers
- **Simple variant system** - Easier theming with `simpleVariants` for common patterns
- **Theme management** - Dynamic theme creation and application utilities
- **Component helpers** - Utilities for building consistent components
- **AI-optimized helpers** - Semantic functions for better code generation
- **Built-in validation** - Config validation with detailed error messages
- **Consistent export patterns** - Named exports, aliases, and default export
- **Type-safe constants** - All tokens use `as const` for literal types
- **SEO optimization** - Built-in SEO keywords and structured data helpers

### Design System Best Practices
- **Semantic color tokens** - Prevent arbitrary color usage with purpose-based naming
- **Comprehensive spacing scale** - 4px grid system ensures visual consistency  
- **Typography system** - Semantic size/weight combinations for consistent text
- **Component variants** - Pre-built styles reduce need for custom CSS
- **Dark mode support** - All colors have light/dark variants built-in

### AI-Assisted Development Guidelines

#### Core Principles for AI Development
1. **Semantic Understanding** - The design system uses semantic naming to help AI understand intent
2. **Type Safety First** - Comprehensive TypeScript types enable better AI code generation
3. **Pattern Recognition** - Consistent patterns help AI learn and replicate design decisions
4. **Error Context** - Structured error messages provide AI with debugging context
5. **Documentation-Driven** - Rich JSDoc comments enable AI to understand usage patterns

#### When Adding Features
1. **Check existing patterns first** - Look at similar implementations in the codebase
2. **Maintain consistency** - Follow established naming and structure conventions
3. **Add comprehensive tests** - Every new feature needs test coverage
4. **Update all export points** - Ensure new features are properly exported
5. **Document with JSDoc** - Add clear documentation with usage examples

#### AI-Friendly Code Generation Patterns

##### Using Semantic Helpers
```typescript
// AI can easily understand semantic intent
import {
  getSemanticColor,
  applyUIPattern,
  createComponentWithIntent
} from '@sudobility/design';

// Clear semantic mapping
const errorMessage = getSemanticColor('error');
const successButton = getSemanticColor('success');

// Descriptive UI patterns
const centeredLayout = applyUIPattern('centeredContainer');
const clickableCard = applyUIPattern('clickable', 'bg-white rounded-lg');

// Intent-based component creation
const primaryButton = createComponentWithIntent({
  intent: 'primary',
  size: 'md',
  pattern: 'clickable',
  additional: 'rounded-md font-medium'
});
```

##### Type-Safe Variant Usage
```typescript
// AI can leverage TypeScript intellisense
import {
  createSimpleVariants,
  type TypedVariantConfig
} from '@sudobility/design';

// Structured variant configuration
const config: TypedVariantConfig = {
  button: {
    primary: () => 'bg-blue-600 text-white px-4 py-2 rounded',
    secondary: () => 'bg-gray-200 text-gray-900 px-4 py-2 rounded'
  }
};

const variants = createSimpleVariants(config);
```

##### Safe Variant Resolution
```typescript
// AI can handle errors gracefully
import { safeResolveVariant, validateVariantConfig } from '@sudobility/design';

// Validate configuration
const validation = validateVariantConfig(config, {
  requireDefault: true,
  checkTypes: true
});

if (!validation.isValid) {
  console.log('Configuration issues:', validation.errors);
  console.log('Suggestions:', validation.suggestions);
}

// Safe resolution with detailed feedback
const result = safeResolveVariant(config, 'button', 'primary', {
  strict: false,
  logWarnings: true
});

console.log('Classes:', result.classes);
console.log('Used fallback:', result.usedFallback);
console.log('Warnings:', result.warnings);
```

#### AI Code Generation Tips
- **Use semantic tokens** - Always prefer `colors.semantic.*` over `colors.raw.*`
- **Leverage existing variants** - Check `core/variants.ts` and `core/simple-variants.ts`
- **Follow the 4px grid** - All spacing should use `designTokens.spacing.*`
- **Export consistently** - Add both named export and to default export object
- **Test immediately** - Run `npm test` after making changes
- **Use AI helpers** - Leverage `utilities/ai-helpers.ts` for better code generation
- **Validate early** - Use validation functions to catch issues during development

#### Structured Error Handling for AI
```typescript
// The design system provides structured errors for better AI understanding
try {
  const classes = variants.get('nonexistent', 'variant');
} catch (error) {
  // Structured errors include:
  // - Error codes for categorization
  // - Context for debugging
  // - Suggestions for fixes
  // - Available alternatives
}
```

#### AI-Optimized Development Workflow
```bash
# 1. Validate types before starting
npm run type-check

# 2. Use development mode for real-time feedback
npm run dev

# 3. Run tests continuously during development
npm test -- --watch

# 4. Validate your changes
npm run build && npm test && npm run lint

# 5. Analyze variant usage for optimization
node -e "
  const { analyzeVariantUsage } = require('./dist/index.esm.js');
  const analysis = analyzeVariantUsage(yourConfig);
  console.log('Analysis:', analysis);
"
```

#### AI Debugging and Optimization

##### Configuration Analysis
```typescript
// AI can analyze and optimize variant configurations
import { analyzeVariantUsage, getVariantSuggestions } from '@sudobility/design';

const analysis = analyzeVariantUsage(config);
console.log('Component count:', analysis.componentCount);
console.log('Missing defaults:', analysis.missingDefaults);
console.log('Optimization suggestions:', analysis.optimizationSuggestions);

// Get intelligent suggestions
const suggestions = getVariantSuggestions(config, 'button', 'pri');
console.log('Autocomplete suggestions:', suggestions); // ['primary']
```

##### Pattern Recognition
```typescript
// AI can identify and suggest common patterns
const patterns = UI_PATTERNS;
console.log('Available patterns:', Object.keys(patterns));

// AI can understand size scales
const sizes = SIZE_SCALES;
console.log('Size options:', Object.keys(sizes));

// AI can map semantic colors
const semantics = SEMANTIC_COLOR_MAP;
console.log('Semantic intents:', Object.keys(semantics));
```

#### Error Prevention with AI Assistance
- **Never use magic numbers** - Always use tokens from `designTokens`
- **Avoid inline styles** - Use variant classes or create new variants
- **Type everything** - Leverage the enhanced TypeScript types
- **Test edge cases** - Include tests for undefined, null, empty values
- **Validate imports** - Ensure all imports resolve correctly
- **Use validation helpers** - Leverage `validateVariantConfig` for early error detection
- **Follow semantic naming** - Use intent-based naming for better AI understanding
- **Structure errors** - Use the structured error system for better debugging

### Performance Optimization
- **Tree-shakeable exports** - Named exports allow optimal bundling
- **Minimal dependencies** - Only peer dependencies on clsx and tailwind-merge
- **Efficient utilities** - Helper functions are optimized for performance
- **Cached computations** - Complex color combinations are memoizable

### Integration Best Practices
- **Version management** - Use semantic versioning for all changes
- **Breaking changes** - Document thoroughly in commit messages
- **Backward compatibility** - Maintain legacy exports when possible
- **Clear migration paths** - Provide upgrade guides for breaking changes
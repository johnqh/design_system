# @sudobility/design

A comprehensive design system library providing semantic design tokens, colors, typography, and component variants for consistent UI development.

## Features

- **Complete Color System** - Raw, semantic, and component-specific colors with dark mode support
- **Design Tokens** - Comprehensive spacing, typography, animation, and layout tokens
- **Typography System** - Semantic text variants and typography scales
- **Component Variants** - Pre-built styles for buttons, cards, badges, inputs, and alerts
- **AI-Optimized** - Semantic helpers and validation utilities for better AI-assisted development
- **Theme Management** - Dynamic theme creation and application utilities
- **Type-Safe** - Full TypeScript support with comprehensive type definitions
- **Tree-Shakeable** - Optimized bundle size with named exports

## Installation

```bash
npm install @sudobility/design
```

Peer dependencies:
```bash
npm install clsx tailwind-merge
```

## Quick Start

```typescript
import { colors, designTokens, textVariants, variants } from '@sudobility/design';

// Use semantic colors
const primaryText = colors.semantic.primary.DEFAULT;

// Use design tokens
const spacing = designTokens.spacing.margin.md;

// Use typography variants
const heading = textVariants.h1;

// Use component variants
const buttonClass = variants.button.primary;
```

## Core Modules

### Colors
```typescript
import { colors } from '@sudobility/design';

// Raw colors (use sparingly)
colors.raw.blue[500];

// Semantic colors (recommended)
colors.semantic.primary.DEFAULT;
colors.semantic.success.light;

// Component-specific colors
colors.component.button.primary;
colors.component.alert.error;
```

### Design Tokens
```typescript
import { designTokens } from '@sudobility/design';

// Spacing
designTokens.spacing.margin.md;  // 16px
designTokens.spacing.padding.lg; // 24px

// Typography
designTokens.typography.fontSize.lg;
designTokens.typography.fontWeight.semibold;

// Animation
designTokens.animation.duration.normal;
designTokens.animation.easing.inOut;

// Layout
designTokens.layout.container.maxWidth;
designTokens.layout.grid.cols.desktop;
```

### Typography
```typescript
import { textVariants } from '@sudobility/design';

// Headings
textVariants.h1;  // 'text-4xl font-bold text-gray-900 dark:text-gray-100'
textVariants.h2;  // 'text-3xl font-semibold text-gray-900 dark:text-gray-100'

// Body text
textVariants.body;
textVariants.bodyLarge;
textVariants.bodySmall;

// Special text
textVariants.code;
textVariants.caption;
```

### Component Variants
```typescript
import { variants } from '@sudobility/design';

// Buttons
variants.button.primary;
variants.button.secondary;
variants.button.destructive;

// Cards
variants.card.default;
variants.card.elevated;
variants.card.interactive;

// Badges
variants.badge.success;
variants.badge.warning;
variants.badge.error;

// Inputs
variants.input.default;
variants.input.search;
```

## Simple Variants System

For easier theming and variant management:

```typescript
import { simpleVariants, createSimpleVariants } from '@sudobility/design';

// Use pre-configured variants
const buttonClass = simpleVariants.get('button', 'primary');

// Create custom variants
const customVariants = createSimpleVariants({
  myComponent: {
    default: () => 'bg-white text-black',
    primary: () => 'bg-blue-500 text-white',
    secondary: () => 'bg-gray-500 text-white'
  }
});

const myClass = customVariants.get('myComponent', 'primary');
```

## AI-Assisted Development

### Semantic Helpers
```typescript
import {
  getSemanticColor,
  applyUIPattern,
  createComponentWithIntent
} from '@sudobility/design';

// Semantic color mapping
const errorText = getSemanticColor('error');
const successButton = getSemanticColor('success');

// UI patterns
const container = applyUIPattern('centeredContainer');
const card = applyUIPattern('elevatedCard', 'p-6');

// Intent-based components
const primaryButton = createComponentWithIntent({
  intent: 'primary',
  size: 'md',
  pattern: 'clickable',
  additional: 'rounded-md font-medium'
});
```

### Validation Utilities
```typescript
import {
  validateVariantConfig,
  safeResolveVariant,
  analyzeVariantUsage
} from '@sudobility/design';

// Validate configuration
const validation = validateVariantConfig(config, {
  requireDefault: true,
  checkTypes: true
});

// Safe variant resolution
const result = safeResolveVariant(config, 'button', 'primary', {
  strict: false,
  logWarnings: true
});

// Analyze usage patterns
const analysis = analyzeVariantUsage(config);
console.log('Optimization suggestions:', analysis.optimizationSuggestions);
```

## Theme Management

```typescript
import { createTheme, applyTheme, getThemeColors } from '@sudobility/design';

// Create a custom theme
const theme = createTheme({
  primary: '#007AFF',
  secondary: '#5856D6',
  accent: '#FF3B30'
});

// Apply theme to component
const themedButton = applyTheme(theme, 'button');

// Get theme colors
const colors = getThemeColors(theme);
```

## Component Helpers

```typescript
import { createComponentHelpers } from '@sudobility/design';

const helpers = createComponentHelpers({
  baseClass: 'rounded-lg transition-colors',
  variants: {
    size: {
      sm: 'px-2 py-1 text-sm',
      md: 'px-4 py-2 text-base',
      lg: 'px-6 py-3 text-lg'
    },
    variant: {
      primary: 'bg-blue-500 text-white',
      secondary: 'bg-gray-500 text-white'
    }
  }
});

const buttonClass = helpers.getClasses({ size: 'md', variant: 'primary' });
```

## UI Constants

```typescript
import { uiConstants } from '@sudobility/design';

// Layout constants
uiConstants.layout.container;
uiConstants.layout.section;

// Typography constants
uiConstants.typography.heading;
uiConstants.typography.body;

// Interactive constants
uiConstants.interactive.button;
uiConstants.interactive.link;
```

## TypeScript Support

The library includes comprehensive TypeScript definitions:

```typescript
import type {
  ComponentSize,
  ComponentVariant,
  TypedVariantConfig,
  VariantResolutionResult
} from '@sudobility/design';

// Type-safe variant configuration
const config: TypedVariantConfig = {
  button: {
    primary: () => 'bg-blue-500 text-white',
    secondary: () => 'bg-gray-500 text-white'
  }
};
```

## Testing

Run the test suite:

```bash
npm test                # Run tests
npm run test:ui         # Run tests with UI
npm run test:coverage   # Run tests with coverage
```

## Development

```bash
npm run dev             # Development mode with watch
npm run build           # Build library
npm run type-check      # TypeScript type checking
npm run lint            # ESLint and TypeScript check
npm run format          # Format code with Prettier
```

## Design Philosophy

### 4px Grid System
All spacing values are based on consistent 4px increments for visual harmony.

### Semantic Naming
Colors and tokens use purpose-based naming (primary, secondary, success, error) rather than color names.

### Dark Mode First
Full support for light and dark color schemes with automatic switching.

### Component-Specific
Pre-built color combinations for common UI patterns reduce the need for custom styling.

### AI-Optimized
Semantic helpers and validation functions make it easier for AI assistants to generate consistent, correct code.

## License

MIT

## Author

John Q Huang

## Contributing

Please see [CONTRIBUTING.md](./CONTRIBUTING.md) for contribution guidelines.

## Changelog

See [CHANGELOG.md](./CHANGELOG.md) for version history and updates.
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

## Themes

The design system ships 10 visual styles. Each app picks one at build time — no runtime switching needed.

| Theme | Style | Primary |
|-------|-------|---------|
| `defaultTheme` | Clean, modern (current look) | Blue |
| `neoBrutalismTheme` | Bold, raw, thick borders, offset shadows | Yellow/Black |
| `glassmorphismTheme` | Frosted glass, translucent, backdrop-blur | Violet |
| `cyberpunkTheme` | Neon-on-dark, glow effects, monospace | Cyan |
| `vaporwaveTheme` | Retro-futuristic, pink/teal/purple | Purple |
| `retroTheme` | Warm, vintage, serif fonts | Orange |
| `y2kTheme` | Bubbly, bright pastels, pill shapes | Hot pink |
| `swissTheme` | Helvetica, grid-precise, no shadows | Black/Red |
| `linearTheme` | Dark-first, subtle, professional | Indigo |
| `notionTheme` | Content-focused, warm gray, minimal | Warm blue |

### Switching Themes

**Step 1: Generate and inject the theme's CSS custom properties**

```typescript
import { generateThemeCSS, cyberpunkTheme } from '@sudobility/design/themes';

// Generate CSS string with :root { ... } and .dark { ... } selectors
const css = generateThemeCSS(cyberpunkTheme);

// Inject into a <style> tag (e.g., in your app's entry point)
const style = document.createElement('style');
style.textContent = css;
document.head.appendChild(style);
```

Or add it to your global CSS file directly:

```css
/* globals.css */
@import './theme.css'; /* paste output of generateThemeCSS() */
```

**Step 2: Activate class overrides (required for structural themes)**

Some themes change more than colors — neo-brutalism adds thick borders, glassmorphism adds backdrop-blur, cyberpunk adds neon glow. Call `configureTheme()` once at app startup:

```typescript
import { configureTheme, cyberpunkTheme } from '@sudobility/design/themes';

configureTheme(cyberpunkTheme);
```

**Step 3 (optional): Use the Tailwind preset**

For consuming apps with their own Tailwind config, the preset maps all semantic color names to CSS custom properties:

```javascript
// tailwind.config.js
import { createTailwindPreset } from '@sudobility/design/themes';
import { cyberpunkTheme } from '@sudobility/design/themes';

export default {
  presets: [createTailwindPreset(cyberpunkTheme)],
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
};
```

### Backward Compatibility

**No theme configured = no behavior change.** Variant functions return the same hardcoded Tailwind classes as before. Theming is fully opt-in.

### React Native

NativeWind doesn't support CSS custom properties. Use `createNativeWindPreset()` which resolves theme colors to direct HSL values:

```javascript
// tailwind.config.js (React Native)
import { createNativeWindPreset } from '@sudobility/design/themes';
import { cyberpunkTheme } from '@sudobility/design/themes';

module.exports = {
  presets: [require('nativewind/preset'), createNativeWindPreset(cyberpunkTheme)],
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
};
```

### Custom Themes

Create your own theme by implementing the `ThemeDefinition` interface:

```typescript
import type { ThemeDefinition } from '@sudobility/design/themes';

export const myTheme: ThemeDefinition = {
  name: 'my-theme',
  displayName: 'My Theme',
  light: {
    background: '0 0% 100%',       // HSL channels, no hsl() wrapper
    foreground: '0 0% 0%',
    primary: '262 83% 58%',         // Your brand color
    primaryForeground: '0 0% 100%',
    // ... all ThemeTokens fields
  },
  dark: { /* dark mode tokens */ },
  classOverrides: {
    button: { base: 'font-bold uppercase' },  // Extra classes for buttons
    card: { base: 'shadow-xl' },
  },
};
```

### Available Exports from `@sudobility/design/themes`

| Export | Type | Description |
|--------|------|-------------|
| `configureTheme(theme)` | Function | Activate a theme's class overrides |
| `generateThemeCSS(theme)` | Function | Generate CSS custom property block |
| `createTailwindPreset(theme)` | Function | Tailwind config preset (web) |
| `createNativeWindPreset(theme)` | Function | NativeWind config preset (RN) |
| `themes` | Record | All 10 themes indexed by name |
| `defaultTheme`, `cyberpunkTheme`, ... | Object | Individual theme presets |

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
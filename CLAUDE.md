# design_system - AI Development Guide

## Overview

`@sudobility/design` is a standalone, framework-agnostic design system library providing design tokens, colors, typography, component variants, and utility functions for consistent UI development. It serves as the styling foundation for the 0xmail ecosystem (including `@johnqh/mail-box-components`) and supports both web (Tailwind CSS + tailwind-merge) and React Native (NativeWind) targets. All tokens are fully typed with `as const` for literal type inference and tree-shakeable named exports.

- **Package name:** `@sudobility/design`
- **Version:** 1.1.18
- **License:** MIT
- **Author:** John Q Huang
- **Module type:** ES Module (`"type": "module"`)
- **Package manager:** Bun

## Project Structure

```
src/
├── index.ts                      # Main web entry point - all exports
├── index.native.ts               # React Native entry point (cn uses clsx only, no tailwind-merge)
├── core/
│   ├── simple-variants.ts        # SimpleVariants class, createVariants(), createQuickVariants()
│   ├── typography.ts             # textVariants object, createTextStyle(), combineTextStyles(), createResponsiveText()
│   └── variants.ts               # Pre-built component variant definitions (button, card, badge, input, alert, loading)
├── tokens/
│   ├── colors.ts                 # rawColors, semanticColors, componentColors, getColorClasses(), buildColorClass()
│   ├── gradients.ts              # GRADIENTS, GRADIENT_CLASSES, getGradient(), combineGradient()
│   └── tokens.ts                 # designTokens (spacing, margin, padding, gap, radius, shadow, typography, animation, z-index, breakpoints, grid, flex, width, height)
├── utilities/
│   ├── ai-helpers.ts             # SEMANTIC_COLOR_MAP, UI_PATTERNS, SIZE_SCALES, getSemanticColor(), applyUIPattern(), createComponentWithIntent(), validateVariantConfig(), safeResolveVariant(), getVariantSuggestions(), analyzeVariantUsage()
│   ├── component-helpers.ts      # sizeClasses, getSizeClasses(), focusRing, focusVisible, transitions, hoverState(), disabledState(), loadingState, buttonVariant(), inputVariant(), cardVariant(), textVariant()
│   ├── status-colors.ts          # statusIndicatorColors, cardVariantColors, calloutVariantColors, sectionBadgeColors + getter functions
│   ├── theme-utils.ts            # withOpacity(), responsive(), themeColor(), getSemanticColor(), gradient(), spacing(), animation()
│   ├── ui-constants.ts           # UI_CONSTANTS, UI_PATTERNS (combined class patterns), getUIConstant(), combineUI()
│   ├── utils.ts                  # cn() - clsx + tailwind-merge (web)
│   └── utils.native.ts           # cn() - clsx only (React Native / NativeWind)
├── types/
│   └── variant-types.ts          # TypedVariantConfig, TypedVariantsType, TypedButtonVariants, TypedCardVariants, TypedBadgeVariants, TypedInputVariants, TypedAlertVariants, VariantResolutionOptions, VariantResolutionResult, ComponentSize, ComponentVariant, etc.
├── content/
│   ├── seo-keywords.ts           # SEO keyword sets and page-specific keyword combinators
│   └── structured-data.ts        # Schema.org structured data factories (Organization, SoftwareApplication, WebPage, AboutPage, TechArticle)
└── __tests__/
    ├── colors.test.ts
    ├── complete.test.ts
    ├── component-helpers.test.ts
    ├── index.test.ts
    ├── simple-variants.test.ts
    ├── theme-utils.test.ts
    ├── typography.test.ts
    ├── ui-constants.test.ts
    ├── ui.test.ts
    ├── utils.test.ts
    └── variants.test.ts
```

## Key Exports

### Colors (`colors`)
Three-tier color system:
- `colors.raw` - Base palette values (blue, purple, neutral, red, orange, amber, green, web3 chains). Use sparingly.
- `colors.semantic` - Purpose-based tokens (text, background, border, brand, state, action, web3) with `light`/`dark` values.
- `colors.component` - Ready-to-use Tailwind class strings for button, card, badge, input, alert components with `base`/`dark`/`focus`/`hover`/`disabled` sub-keys.

Utility functions: `getColorClasses(component, variant, states?)`, `buildColorClass(bg, text, border?, states?)`.

### Design Tokens (`designTokens`)
Tailwind class tokens on a 4px grid system:
- `spacing`, `margin`, `padding`, `gap` (xs through 5xl)
- `radius`, `shadow` scales
- `typography` - comprehensive: `family`, `size`, `semantic`, `weight`, `style`, `decoration`, `decorationStyle`, `decorationThickness`, `underlineOffset`, `leading`, `tracking`, `transform`, `align`, `verticalAlign`, `whitespace`, `wordBreak`, `overflow`, `indent`
- `animation`, `ease`, `zIndex`, `breakpoints`, `grid`, `gridResponsive`, `flex`, `width`, `height`

### Text Variants (`textVariants`)
Function-based typography system returning Tailwind class strings:
- `heading` - display (hero/xl/lg/md/sm), h1-h6, responsive variants
- `body` - xl/lg/md/sm/xs, plus `.strong`, `.emphasis`, `.muted` sub-variants
- `caption` - default, emphasis, uppercase
- `lead` - lg/md/sm
- `link` - default, subtle, muted, external
- `code` - inline, block, small
- `label` - default, required, optional, helper, error, success
- `web3` - address, addressShort, hash, amount, chain, symbol
- `truncate` - line, lines2-4
- `selection` - default, brand

Helpers: `createTextStyle(family, size, weight, color, options)`, `combineTextStyles(...styles)`, `createResponsiveText(baseStyle, breakpoints)`.

### Component Variants (`variants`)
Pre-built Tailwind class strings for:
- **button** - primary (default/small/large/withIcon/fullWidth), secondary, outline, destructive, ghost, link, gradient, web3
- **card** - default, elevated, interactive, success, warning, attention, error (each with size variants)
- **badge** - default, secondary, primary, success, warning, attention, error, web3 chains
- **input** - default, search, error, success
- **alert** - default, info, success, warning, attention, destructive
- **loading** - spinner, skeleton, pulse variants

### SimpleVariants System
Platform-agnostic variant resolver class:
- `SimpleVariants` class with `.get()`, `.sized()`, `.nested()`, `.when()`, `.combine()`, `.has()`, `.addFallback()`
- `createVariants(config)` - factory function
- `createQuickVariants(config)` - shorthand with `.button()`, `.alert()`, `.input()`, `.badge()` methods

### `cn()` Utility
```typescript
cn('text-red-500', 'text-blue-500') // "text-blue-500" (tailwind-merge resolves conflicts)
cn('base', { 'active': isActive }, isLarge && 'px-6')
```
Web: `clsx` + `tailwind-merge`. React Native: `clsx` only (NativeWind handles merging).

### AI Helpers
- `SEMANTIC_COLOR_MAP` - maps intents (success/error/warning/info/primary/secondary/accent/muted/emphasis/subtle) to text color classes
- `UI_PATTERNS` - named layout and interaction patterns (centeredContainer, flexBetween, elevatedCard, clickable, focusable, disabled, etc.)
- `SIZE_SCALES` - xs/sm/md/lg/xl with padding, text, height classes
- `getSemanticColor(intent)`, `applyUIPattern(pattern, additional?)`, `createSizedComponent(size, baseClasses)`, `createComponentWithIntent({ intent, size, pattern, additional })`
- `validateVariantConfig(config, options)` - returns `{ isValid, errors, warnings, suggestions }`
- `safeResolveVariant(config, component, variant, options)` - returns `{ classes, usedFallback, warnings, requested }`
- `getVariantSuggestions(config, component, partial)` - autocomplete helper
- `analyzeVariantUsage(config)` - optimization analysis

### Status Colors
- `statusIndicatorColors` / `getStatusIndicatorColor()` - dot/icon colors
- `cardVariantColors` / `getCardVariantColors()` - container bg/border/text
- `calloutVariantColors` / `getCalloutVariantColors()` - gradient bg + text pairs
- `sectionBadgeColors` / `getSectionBadgeColors()` - badge container + icon pairs

### Gradients
- `GRADIENTS` - backgrounds, buttons, text, effects
- `GRADIENT_CLASSES` - pre-composed (primaryButton, heroButton, headerButton, pageLayout, gradientText)
- `getGradient(category, variant)`, `combineGradient(gradientKey, additionalClasses)`

### UI Utilities (`ui` object)
Inline in `index.ts`, exported as `ui`. Contains ready-to-use Tailwind class strings for:
- `ui.layout` - container, section, flex, grid patterns
- `ui.section` - default, hero, subtle, accent, gradient backgrounds
- `ui.background`, `ui.border`, `ui.shadow`, `ui.spacing`
- `ui.text` - h1-h6, display, hero, body, lead, caption, label, link, code, status, emphasis, muted, uppercase
- `ui.transition`, `ui.states` (hover, focus, disabled, loading)
- `ui.table` - container, thead, tbody, tr, td
- `ui.card` - default, large, bordered, interactive, feature
- `ui.badge` - blue, green, purple, amber, gray
- `ui.web3` - walletButton, chainBadge(chain), addressText

### Capitalized Aliases
`Colors`, `Tokens`, `Typography`, `Variants` - aliases for `colors`, `designTokens`, `textVariants`, `variants`.

### Content Helpers
- SEO keyword sets: `BASE_KEYWORDS`, `USER_FOCUSED_KEYWORDS`, `DEVELOPER_KEYWORDS`, `DOCUMENTATION_KEYWORDS`, `WEB3_TRENDING_KEYWORDS`, `TECHNICAL_SEO_KEYWORDS`, `ACCESSIBILITY_KEYWORDS`
- Page keyword getters: `getHomePageKeywords()`, `getAboutPageKeywords(domain)`, `getDocumentationKeywords()`, etc.
- Structured data factories: `createBaseOrganization()`, `createSoftwareApplicationData()`, `createWebPageData()`, `createAboutPageData()`, `createTechArticleData()`

## Development Commands

```bash
# Install dependencies
bun install

# Build (tsc + vite)
bun run build

# Development mode with watch
bun run dev

# Type checking only
bun run type-check

# Testing (vitest, jsdom environment)
bun run test              # Run tests in watch mode
bun run test:ui           # Vitest UI
bun run test:coverage     # Coverage report (v8 provider, 95% threshold)

# Run a single test file
bun vitest run src/__tests__/index.test.ts

# Lint and format
bun run lint              # ESLint + TypeScript check (with --fix)
bun run format            # Prettier format
bun run format:check      # Check formatting without writing
```

## Architecture / Patterns

### Build Pipeline
- **TypeScript** (`tsc`) for type checking, then **Vite** for bundling
- Outputs: `dist/index.esm.js` (ESM), `dist/index.cjs.js` (CJS), `dist/index.native.js` (React Native), `dist/index.d.ts` (types)
- `vite-plugin-dts` generates declaration files
- `clsx` and `tailwind-merge` are externalized as peer dependencies

### Token System
- **4px grid** - all spacing values are multiples of 4px
- **Semantic naming** - tokens use purpose-based names (primary, secondary, success, error, warning, attention, info)
- **Dark mode first** - every color/component has explicit `dark:` Tailwind variants
- **`as const`** - all token objects use `as const` for literal type inference
- **Function-based variants** - typography and component variants are functions returning strings (lazy evaluation, composable)

### Color Architecture (three levels)
1. **Raw Colors** (`colors.raw`) - hex palette values. Do not use directly in components.
2. **Semantic Colors** (`colors.semantic`) - purpose-based tokens with `light`/`dark` object values. Recommended for theme logic.
3. **Component Colors** (`colors.component`) - ready-to-use Tailwind class strings with `base`/`dark`/`focus`/`hover`/`disabled` keys. Use for component styling.

### Dual Entry Points
- `src/index.ts` - web: `cn()` uses `clsx` + `tailwind-merge`, includes SEO/structured-data exports, `ui` object, legacy exports
- `src/index.native.ts` - React Native: `cn()` uses `clsx` only (NativeWind handles merging), omits SEO/structured-data and `ui` object

### Variant System
Two approaches:
1. **Direct variants** (`variants`) - deeply nested object with function values, accessed like `variants.button.primary.default()`
2. **SimpleVariants class** - wrapper with `.get('button', 'primary')`, `.sized()`, `.nested()`, `.when()`, `.combine()`, built-in fallbacks, and configuration validation

### Path Alias
`@/*` maps to `./src/*` (configured in both `tsconfig.json` and `vite.config.ts`).

### Test Configuration
- Vitest with jsdom environment
- Coverage via v8 provider with 95% statement/function/line and 90% branch thresholds
- Tests located in `src/__tests__/`

## Common Tasks

### Adding a New Color
1. Add hex values to `rawColors` in `src/tokens/colors.ts`
2. Add semantic mapping in `semanticColors` with `light`/`dark` values
3. Add component-specific Tailwind classes in `componentColors` with `base`/`dark`/`focus`/`hover`/`disabled` keys
4. Add tests in `src/__tests__/colors.test.ts`
5. Run `bun run build && bun run test`

### Adding a New Component Variant
1. Add variant functions to `src/core/variants.ts` under the appropriate component key
2. If adding a new component, also update the `VariantsType` interface in the same file
3. Update enhanced types in `src/types/variant-types.ts` if needed
4. Add tests in `src/__tests__/variants.test.ts`
5. Run `bun run build && bun run test`

### Adding a New Design Token
1. Add to the appropriate object in `src/tokens/tokens.ts` (spacing, typography, animation, etc.)
2. Run `bun run build && bun run test`

### Adding a New Utility Function
1. Add function to the appropriate file in `src/utilities/`
2. Export from `src/index.ts` (and `src/index.native.ts` if platform-agnostic)
3. Add tests in the corresponding `src/__tests/` file
4. Run `bun run build && bun run test`

### Updating the `ui` Object
The `ui` object is defined inline in `src/index.ts`. Edit it directly there. It is not available in the React Native entry point.

### Publishing
`bun run prepublishOnly` runs the build automatically. The package is published with restricted access (`"access": "restricted"`).

## Peer / Key Dependencies

### Peer Dependencies (required by consumers)
- `clsx` >= 2.0.0 - conditional class name composition
- `tailwind-merge` >= 2.0.0 - intelligent Tailwind class deduplication (web only)

### Dev Dependencies (key)
- `typescript` ^5.9.3 - strict mode, ES2019 target, bundler module resolution
- `vite` ^7.1.12 - build tool
- `vite-plugin-dts` ^4.5.4 - declaration file generation
- `vitest` ^4.0.4 - test runner
- `@vitest/coverage-v8` ^4.0.4 - coverage provider
- `eslint` ^9.38.0 + `@typescript-eslint/*` - linting
- `prettier` ^3.6.2 - formatting
- `jsdom` ^27.0.1 - test environment

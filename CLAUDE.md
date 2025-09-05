# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- **Build**: `npm run build` - Compiles TypeScript and builds library distribution
- **Development**: `npm run dev` - Builds library in watch mode for development
- **Type Check**: `npm run type-check` - Runs TypeScript type checking without emitting files
- **Lint**: `npm run lint` - Runs ESLint on TypeScript files with strict warnings
- **Test**: `npm run test` - Runs test suite using Vitest
- **Test UI**: `npm run test:ui` - Opens Vitest UI for interactive testing

## AI Development Guidelines

### Always Run After Changes
1. `npm run type-check` - TypeScript is strictly configured, catch errors early
2. `npm run lint` - ESLint has zero warnings tolerance (`--max-warnings 0`)
3. `npm run build` - Verify distribution builds correctly

### Code Modification Patterns
- **Adding new colors**: Add to `rawColors` first, then create semantic mapping in `semanticColors`
- **New design tokens**: Add to appropriate section in `tokens.ts`, export in main `designTokens` object
- **Component variants**: Define in `variants.ts` with color/size/state structure
- **Typography styles**: Add to appropriate section in `typography.ts` (heading/body/specialized)

### Import Patterns for Development
```typescript
// Preferred - use semantic tokens
import { colors } from '@johnqh/design-system';
const textColor = colors.semantic.text.primary.light;

// Avoid - raw colors (unless necessary)
const rawBlue = colors.raw.blue[500];

// Design tokens
import { designTokens } from '@johnqh/design-system';
const spacing = designTokens.spacing.md;

// Component variants
import { variants } from '@johnqh/design-system';
const buttonStyle = variants.button.colors.primary;
```

## Architecture

This is a **platform-agnostic design system library** that exports design tokens, colors, typography variants, and component variants for use across web and React Native applications. The library is built with TypeScript and uses Vite for bundling.

### Core Architecture Principles

1. **Platform Agnostic**: All tokens return numeric/string values rather than CSS classes, making them compatible with both web (Tailwind) and React Native
2. **Semantic Structure**: Colors and variants are organized semantically (primary, secondary, error, etc.) rather than just by raw values
3. **Cross-Platform Compatibility**: Typography includes platform-specific font families for web, iOS, and Android
4. **Light/Dark Theme Support**: All semantic colors include both light and dark mode variants

### Key Files

- `src/index.ts` - Main export file that re-exports all design system components
- `src/colors.ts` - Complete color system with raw palette and semantic tokens
- `src/tokens.ts` - Core design tokens (spacing, typography, radius, shadows, etc.)
- `src/typography.ts` - Typography variants with semantic text styles
- `src/variants.ts` - Component variant definitions (buttons, cards, badges, inputs)

### Design Token Structure

**Colors** are organized in two layers:
- `colors.raw.*` - Base color palette (use sparingly)
- `colors.semantic.*` - Purpose-based tokens for text, background, border, brand, state, and web3

**Typography** includes:
- Font families with platform-specific implementations (web/iOS/Android)
- Pixel-based sizes from micro (10px) to hero (128px)
- Semantic sizes (caption, body, heading, display)
- Numeric font weights (100-900) for cross-platform compatibility

**Spacing** uses a 4px grid system with semantic names (xs=4px through 8xl=192px)

**Component Variants** define colors, states, and sizes for UI components with hover, active, disabled, and focus states.

### Web3 Integration

The design system includes built-in color tokens for major blockchain networks (Ethereum, Solana, Polygon, Bitcoin, etc.) with appropriate background colors for themed components.

## AI-Specific Development Patterns

### When Adding New Features
1. **Check existing patterns**: Search for similar implementations before creating new ones
2. **Follow the layered approach**: Raw values → Semantic tokens → Component variants
3. **Maintain consistency**: Use existing naming conventions and structure
4. **Update exports**: Always update the main `index.ts` exports when adding new tokens/variants

### Type Safety Guidelines
- All color values must be strings (hex codes or rgba)
- Spacing/sizing values must be numbers (pixels)
- Font weights must be numeric (100-900)
- Component variants must follow the `ComponentVariant` interface structure
- Typography styles must implement the `TextStyle` interface

### Testing Patterns
- Test files should be co-located with source files
- Focus on type checking and value validation
- Test both light and dark mode variants for semantic colors
- Verify cross-platform compatibility (web vs React Native values)

### Common Anti-Patterns to Avoid
- Don't hardcode CSS strings in tokens (use raw values)
- Don't skip semantic layer (raw → component direct)
- Don't mix units (stick to pixels for sizes)
- Don't break theme consistency (always provide light/dark variants)

### File Modification Guidelines
- `colors.ts`: Only modify if adding new color palette or semantic meanings
- `tokens.ts`: Modify for spacing, typography scales, or other foundational tokens  
- `typography.ts`: Modify for text style variants and combinations
- `variants.ts`: Modify for component-specific styling variants
- `index.ts`: Update exports when adding new public APIs

## Library Configuration

- Uses TypeScript with strict mode and comprehensive type checking
- Vite build system with dual output (ESM and UMD)
- ESLint with TypeScript rules and zero warnings tolerance
- Vitest for testing with UI mode available
- Path aliases: `@/*` maps to `src/*`
- All numeric values are in pixels for cross-platform compatibility
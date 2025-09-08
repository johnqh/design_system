# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a standalone design system library (`@johnqh/design-system`) that provides comprehensive design tokens, colors, typography, and variants for UI development. It serves as the foundation for the `@johnqh/mail-box-components` library and can be reused across multiple projects.

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

# Run single test
npm test -- src/__tests__/index.test.ts

# Lint (currently type-check only)
npm run lint
```

## Architecture

### Core Design System Structure
- `src/colors.ts` - Complete semantic color system with light/dark mode support
- `src/tokens.ts` - Comprehensive design tokens (spacing, typography, animations)
- `src/typography.ts` - Text variants and semantic typography system
- `src/variants.ts` - Component style variants and utilities
- `src/index.ts` - Main export with organized structure and utilities

### Design Token Philosophy
- **4px Grid System** - All spacing based on consistent 4px increments
- **Semantic Naming** - Colors and tokens use purpose-based naming (primary, secondary, success, error)
- **Dark Mode First** - Full support for light and dark color schemes
- **Component-Specific** - Pre-built color combinations for common UI patterns

### Export Strategy
The library provides multiple export patterns for flexibility:
- **Named exports** - `colors`, `designTokens`, `textVariants`, `variants`
- **Capitalized aliases** - `Colors`, `Tokens`, `Typography`, `Variants`
- **UI utilities** - `ui` object with common design patterns
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
1. Add token to appropriate file (`colors.ts`, `tokens.ts`, `typography.ts`, `variants.ts`)
2. Update exports in `src/index.ts`
3. Add tests in `src/__tests__/index.test.ts`
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

### Structured Architecture
- Clear separation of concerns across files
- Consistent naming conventions throughout
- Comprehensive TypeScript types for IntelliSense
- Semantic organization that mirrors design thinking

### Development-Friendly Features
- Extensive JSDoc comments for all major functions
- Utility functions with clear parameter types
- Consistent export patterns across all files
- Built-in color utilities for custom combinations

### Design System Best Practices
- Semantic color tokens prevent arbitrary color usage
- Comprehensive spacing scale ensures visual consistency  
- Typography system with semantic size/weight combinations
- Component variants reduce need for custom styling
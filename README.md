# @johnqh/design-system

A platform-agnostic design system providing colors, typography, spacing, and component variants for consistent UI across web and React Native applications.

## Features

- 🎨 **Platform Agnostic**: Works with web (Tailwind CSS) and React Native
- 🌈 **Comprehensive Color System**: Semantic colors with light/dark mode support
- 📝 **Typography System**: Font sizes, weights, and semantic text variants
- 📏 **Consistent Spacing**: 4px-based spacing scale
- 🧩 **Component Variants**: Pre-defined button, card, badge, and input variants
- 🔥 **Web3 Ready**: Built-in blockchain and cryptocurrency color tokens
- 📱 **Responsive**: Breakpoint-aware design tokens
- 🎯 **TypeScript**: Full TypeScript support with comprehensive types

## Installation

```bash
npm install @johnqh/design-system
```

## Usage

### Colors

```typescript
import { colors } from '@johnqh/design-system';

// Semantic colors (recommended)
const primaryText = colors.semantic.text.primary.light;
const primaryBg = colors.semantic.background.primary.dark;

// Raw colors (use sparingly)
const blue500 = colors.raw.blue[500];

// Web3 colors
const ethereumColor = colors.semantic.web3.ethereum.light;
```

### Design Tokens

```typescript
import { designTokens } from '@johnqh/design-system';

// Spacing (in pixels)
const smallPadding = designTokens.spacing.sm; // 8
const largePadding = designTokens.spacing.lg; // 24

// Typography
const bodySize = designTokens.typography.semantic.body; // 16
const headingWeight = designTokens.typography.weight.heading; // 700

// Border radius
const cardRadius = designTokens.radius.lg; // 8
```

### Component Variants

```typescript
import { variants } from '@johnqh/design-system';

// Button variants
const primaryButton = variants.button.colors.primary;
const buttonSize = variants.button.sizes.md;

// Card variants  
const elevatedCard = variants.card.styles.elevated;
const cardPadding = variants.card.padding.md;
```

### Typography

```typescript
import { textVariants } from '@johnqh/design-system';

// Heading styles
const h1Style = textVariants.heading.h1;
const displayStyle = textVariants.heading.display.hero;

// Body text styles
const bodyStyle = textVariants.body.lg;
const emphasisStyle = textVariants.body.emphasis.md;
```

## Platform Integration

### Web (Tailwind CSS)

```typescript
// Convert design tokens to Tailwind classes
const spacing = `p-${designTokens.spacing.md / 4}`; // p-4
const textSize = `text-${designTokens.typography.size.lg}px`; // Custom size
```

### React Native

```typescript
// Use design tokens directly in StyleSheet
const styles = StyleSheet.create({
  container: {
    padding: designTokens.spacing.md,
    borderRadius: designTokens.radius.lg,
    backgroundColor: colors.semantic.background.primary.light,
  },
  text: {
    fontSize: designTokens.typography.semantic.body,
    fontWeight: designTokens.typography.weight.body.toString(),
    color: colors.semantic.text.primary.light,
  },
});
```

## Design System Structure

### Colors
- **Raw Colors**: Base color palette (blue, purple, neutral, etc.)
- **Semantic Colors**: Purpose-based colors (text, background, border, brand, state)
- **Web3 Colors**: Blockchain and cryptocurrency specific colors

### Typography
- **Font Families**: Sans, serif, mono with platform-specific implementations
- **Font Sizes**: Pixel-based sizes from micro (10px) to hero (128px)
- **Semantic Sizes**: Named sizes for specific use cases (body, heading, caption)
- **Font Weights**: Numeric weights from thin (100) to black (900)

### Spacing
- **Base Scale**: 4px grid system (4, 8, 16, 24, 32, 48, 64, 80, 96px)
- **Semantic Spacing**: xs, sm, md, lg, xl, 2xl, 3xl, 4xl, 5xl

### Component Variants
- **Button**: Primary, secondary, outline, destructive, ghost, link variants
- **Card**: Default, elevated, success, warning, error states
- **Badge**: Status badges with color variants and sizes
- **Input**: Default, error, success states with size variants

## TypeScript Support

The design system includes comprehensive TypeScript definitions:

```typescript
import type { TextStyle, ComponentVariant, SizeVariant } from '@johnqh/design-system';

// Use types in your components
interface ButtonProps {
  variant?: keyof typeof variants.button.colors;
  size?: keyof typeof variants.button.sizes;
}
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

MIT License - see LICENSE file for details.
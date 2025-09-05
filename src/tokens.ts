/**
 * Platform-Agnostic Design Tokens
 * 
 * Core design values that provide consistent spacing, typography, and other design properties.
 * These tokens are platform-agnostic and return numeric/string values rather than CSS classes,
 * making them compatible with both web (Tailwind) and React Native.
 * 
 * Usage:
 * Web: Use with Tailwind or convert to CSS
 * React Native: Use numeric values directly in StyleSheet
 */

// =============================================================================
// SPACING SCALE
// =============================================================================

/**
 * Spacing scale based on 4px grid system
 * Values are in pixels for cross-platform compatibility
 */
export const spacing = {
  xs: 4,      // 4px
  sm: 8,      // 8px
  md: 16,     // 16px
  lg: 24,     // 24px
  xl: 32,     // 32px
  '2xl': 48,  // 48px
  '3xl': 64,  // 64px
  '4xl': 80,  // 80px
  '5xl': 96,  // 96px
  '6xl': 128, // 128px
  '7xl': 160, // 160px
  '8xl': 192, // 192px
} as const;

// =============================================================================
// BORDER RADIUS SCALE
// =============================================================================

/**
 * Border radius values in pixels
 */
export const radius = {
  none: 0,
  sm: 2,      // 2px
  md: 6,      // 6px  
  lg: 8,      // 8px
  xl: 12,     // 12px
  '2xl': 16,  // 16px
  '3xl': 24,  // 24px
  full: 9999, // Large number for full rounding
} as const;

// =============================================================================
// TYPOGRAPHY SCALE
// =============================================================================

/**
 * Typography tokens with platform-agnostic values
 */
export const typography = {
  // Font families (platform-specific implementations)
  family: {
    sans: {
      web: 'Inter, system-ui, sans-serif',
      ios: 'System',
      android: 'Roboto',
    },
    serif: {
      web: 'ui-serif, Georgia, serif',
      ios: 'Times New Roman',
      android: 'serif',
    },
    mono: {
      web: 'ui-monospace, Menlo, Monaco, Consolas, monospace',
      ios: 'Menlo',
      android: 'monospace',
    },
  },

  // Font sizes in pixels
  size: {
    micro: 10,   // 10px
    xs: 12,      // 12px
    sm: 14,      // 14px
    base: 16,    // 16px (default)
    md: 16,      // Alias for base
    lg: 18,      // 18px
    xl: 20,      // 20px
    '2xl': 24,   // 24px
    '3xl': 30,   // 30px
    '4xl': 36,   // 36px
    '5xl': 48,   // 48px
    '6xl': 60,   // 60px
    '7xl': 72,   // 72px
    '8xl': 96,   // 96px
    '9xl': 128,  // 128px
  },

  // Semantic font sizes for specific use cases
  semantic: {
    caption: 12,      // Caption text
    small: 14,        // Small body text
    body: 16,         // Regular body text
    bodyLarge: 18,    // Large body text
    subheading: 20,   // Subheading text
    h6: 16,           // Heading 6
    h5: 18,           // Heading 5
    h4: 20,           // Heading 4
    h3: 24,           // Heading 3
    h2: 30,           // Heading 2
    h1: 36,           // Heading 1
    display: 60,      // Display text
    hero: 96,         // Hero text
  },

  // Font weights (numeric values for cross-platform)
  weight: {
    thin: 100,
    extralight: 200,
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
    black: 900,

    // Semantic weights
    body: 400,        // For body text
    emphasis: 500,    // For emphasized text
    strong: 600,      // For strong text
    heading: 700,     // For headings
    display: 800,     // For display text
  },

  // Line heights (unitless multipliers)
  leading: {
    none: 1,          // 1
    tight: 1.25,      // 1.25
    snug: 1.375,      // 1.375
    normal: 1.5,      // 1.5
    relaxed: 1.625,   // 1.625
    loose: 2,         // 2

    // Semantic values
    heading: 1.25,    // For headings
    body: 1.625,      // For body text
    caption: 1.5,     // For captions
    display: 1,       // For display text
  },

  // Letter spacing in em units
  tracking: {
    tighter: -0.05,   // -0.05em
    tight: -0.025,    // -0.025em
    normal: 0,        // 0em
    wide: 0.025,      // 0.025em
    wider: 0.05,      // 0.05em
    widest: 0.1,      // 0.1em

    // Semantic values
    heading: -0.025,  // For headings
    body: 0,          // For body text
    caption: 0,       // For captions
    button: 0.025,    // For button text
    uppercase: 0.05,  // For uppercase text
  },
} as const;

// =============================================================================
// ANIMATION TOKENS
// =============================================================================

/**
 * Animation durations in milliseconds
 */
export const animation = {
  duration: {
    none: 0,
    fastest: 75,
    fast: 150,
    normal: 200,
    slow: 300,
    slower: 500,
    slowest: 700,
  },

  // Easing curves (cubic-bezier values for CSS, string names for React Native)
  easing: {
    linear: {
      css: 'cubic-bezier(0, 0, 1, 1)',
      reactNative: 'linear',
    },
    in: {
      css: 'cubic-bezier(0.4, 0, 1, 1)',
      reactNative: 'ease-in',
    },
    out: {
      css: 'cubic-bezier(0, 0, 0.2, 1)',
      reactNative: 'ease-out',
    },
    inOut: {
      css: 'cubic-bezier(0.4, 0, 0.2, 1)',
      reactNative: 'ease-in-out',
    },
  },
} as const;

// =============================================================================
// Z-INDEX SCALE
// =============================================================================

/**
 * Z-index layering system
 */
export const zIndex = {
  auto: 'auto',
  base: 0,
  docked: 10,
  dropdown: 20,
  sticky: 30,
  banner: 40,
  overlay: 50,
  modal: 60,
  popover: 70,
  skipLink: 80,
  toast: 90,
  tooltip: 100,
} as const;

// =============================================================================
// BREAKPOINTS
// =============================================================================

/**
 * Responsive breakpoints in pixels
 */
export const breakpoints = {
  sm: 640,    // Small devices
  md: 768,    // Medium devices
  lg: 1024,   // Large devices
  xl: 1280,   // Extra large devices
  '2xl': 1536, // 2X large devices
} as const;

// =============================================================================
// SHADOW SYSTEM
// =============================================================================

/**
 * Shadow tokens (CSS for web, React Native shadow props for native)
 */
export const shadows = {
  none: {
    css: 'none',
    reactNative: {
      shadowOpacity: 0,
      elevation: 0,
    },
  },
  sm: {
    css: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    reactNative: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.05,
      shadowRadius: 2,
      elevation: 2,
    },
  },
  md: {
    css: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    reactNative: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.1,
      shadowRadius: 6,
      elevation: 6,
    },
  },
  lg: {
    css: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    reactNative: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 10 },
      shadowOpacity: 0.1,
      shadowRadius: 15,
      elevation: 15,
    },
  },
  xl: {
    css: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    reactNative: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 20 },
      shadowOpacity: 0.1,
      shadowRadius: 25,
      elevation: 25,
    },
  },
  '2xl': {
    css: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
    reactNative: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 25 },
      shadowOpacity: 0.25,
      shadowRadius: 50,
      elevation: 50,
    },
  },
} as const;

// =============================================================================
// MAIN EXPORT
// =============================================================================

/**
 * Main design tokens export
 */
export const designTokens = {
  spacing,
  radius,
  typography,
  animation,
  zIndex,
  breakpoints,
  shadows,
} as const;

export default designTokens;
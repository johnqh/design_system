/**
 * Platform-Agnostic Design System - Color Foundations
 * 
 * This file defines the complete color system with:
 * - Semantic color tokens that map to specific use cases
 * - Light and dark mode support
 * - Component-specific color variants
 * - Consistent color roles and hierarchy
 * - No platform-specific dependencies (compatible with web and React Native)
 * 
 * Usage:
 * import { colors } from '@johnqh/design-system'
 * const primaryColor = colors.semantic.brand.primary.light
 */

// =============================================================================
// RAW COLOR PALETTE
// =============================================================================

/**
 * Base color palette - these are the raw color values
 * Do not use these directly in components, use semantic tokens instead
 */
const rawColors = {
  // Blue palette - primary brand color
  blue: {
    50: '#eff6ff',
    100: '#dbeafe',
    200: '#bfdbfe',
    300: '#93c5fd',
    400: '#60a5fa',
    500: '#3b82f6',
    600: '#2563eb',
    700: '#1d4ed8',
    800: '#1e40af',
    900: '#1e3a8a',
    950: '#172554',
  },

  // Purple palette - secondary brand color
  purple: {
    50: '#faf5ff',
    100: '#f3e8ff',
    200: '#e9d5ff',
    300: '#d8b4fe',
    400: '#c084fc',
    500: '#a855f7',
    600: '#9333ea',
    700: '#7c3aed',
    800: '#6b21a8',
    900: '#581c87',
    950: '#3b0764',
  },

  // Neutral palette - backgrounds, text, borders
  neutral: {
    0: '#ffffff',
    50: '#f9fafb',
    100: '#f3f4f6',
    200: '#e5e7eb',
    300: '#d1d5db',
    400: '#9ca3af',
    500: '#6b7280',
    600: '#4b5563',
    700: '#374151',
    800: '#1f2937',
    900: '#111827',
    950: '#030712',
  },

  // Semantic state colors
  red: {
    50: '#fef2f2',
    100: '#fee2e2',
    200: '#fecaca',
    300: '#fca5a5',
    400: '#f87171',
    500: '#ef4444',
    600: '#dc2626',
    700: '#b91c1c',
    800: '#991b1b',
    900: '#7f1d1d',
    950: '#450a0a',
  },

  orange: {
    50: '#fff7ed',
    100: '#ffedd5',
    200: '#fed7aa',
    300: '#fdba74',
    400: '#fb923c',
    500: '#f97316',
    600: '#ea580c',
    700: '#c2410c',
    800: '#9a3412',
    900: '#7c2d12',
    950: '#431407',
  },

  amber: {
    50: '#fffbeb',
    100: '#fef3c7',
    200: '#fde68a',
    300: '#fcd34d',
    400: '#fbbf24',
    500: '#f59e0b',
    600: '#d97706',
    700: '#b45309',
    800: '#92400e',
    900: '#78350f',
    950: '#451a03',
  },

  green: {
    50: '#f0fdf4',
    100: '#dcfce7',
    200: '#bbf7d0',
    300: '#86efac',
    400: '#4ade80',
    500: '#22c55e',
    600: '#16a34a',
    700: '#15803d',
    800: '#166534',
    900: '#14532d',
    950: '#052e16',
  },

  // Web3 specific colors
  web3: {
    ethereum: {
      light: '#627eea',
      DEFAULT: '#627eea',
      dark: '#4c63d2',
    },
    solana: {
      light: '#9945ff',
      DEFAULT: '#9945ff',
      dark: '#7d37d9',
    },
    polygon: {
      light: '#8247e5',
      DEFAULT: '#8247e5',
      dark: '#6a3bc0',
    },
    bitcoin: {
      light: '#f7931a',
      DEFAULT: '#f7931a',
      dark: '#e07f00',
    },
    binance: {
      light: '#f3ba2f',
      DEFAULT: '#f3ba2f',
      dark: '#d4a423',
    },
    cardano: {
      light: '#0033ad',
      DEFAULT: '#0033ad',
      dark: '#002488',
    },
    avalanche: {
      light: '#e84142',
      DEFAULT: '#e84142',
      dark: '#d1383a',
    },
    fantom: {
      light: '#1969ff',
      DEFAULT: '#1969ff',
      dark: '#0052ff',
    },
    arbitrum: {
      light: '#2d374b',
      DEFAULT: '#2d374b',
      dark: '#1e2532',
    },
    optimism: {
      light: '#ff0420',
      DEFAULT: '#ff0420',
      dark: '#e6031c',
    },
    chainlink: {
      light: '#375bd2',
      DEFAULT: '#375bd2',
      dark: '#2d4bb5',
    },
    cosmos: {
      light: '#2e3148',
      DEFAULT: '#2e3148',
      dark: '#1f2030',
    },
    polkadot: {
      light: '#e6007a',
      DEFAULT: '#e6007a',
      dark: '#cc006e',
    },
  }
} as const;

// =============================================================================
// SEMANTIC COLOR TOKENS
// =============================================================================

/**
 * Semantic color tokens - organized by purpose and context
 * These provide consistent theming across light and dark modes
 */
export const semanticColors = {
  // Text colors
  text: {
    primary: {
      light: rawColors.neutral[900],
      dark: rawColors.neutral[0],
    },
    secondary: {
      light: rawColors.neutral[600],
      dark: rawColors.neutral[400],
    },
    tertiary: {
      light: rawColors.neutral[500],
      dark: rawColors.neutral[500],
    },
    disabled: {
      light: rawColors.neutral[400],
      dark: rawColors.neutral[600],
    },
    inverse: {
      light: rawColors.neutral[0],
      dark: rawColors.neutral[900],
    },
    link: {
      light: rawColors.blue[600],
      dark: rawColors.blue[400],
    },
    linkHover: {
      light: rawColors.blue[700],
      dark: rawColors.blue[300],
    },
  },

  // Background colors
  background: {
    primary: {
      light: rawColors.neutral[0],
      dark: rawColors.neutral[900],
    },
    secondary: {
      light: rawColors.neutral[50],
      dark: rawColors.neutral[800],
    },
    tertiary: {
      light: rawColors.neutral[100],
      dark: rawColors.neutral[700],
    },
    elevated: {
      light: rawColors.neutral[0],
      dark: rawColors.neutral[800],
    },
    overlay: {
      light: 'rgba(0, 0, 0, 0.5)',
      dark: 'rgba(0, 0, 0, 0.7)',
    },
    page: {
      light: rawColors.neutral[50],
      dark: rawColors.neutral[950],
    },
  },

  // Border colors
  border: {
    primary: {
      light: rawColors.neutral[200],
      dark: rawColors.neutral[700],
    },
    secondary: {
      light: rawColors.neutral[100],
      dark: rawColors.neutral[800],
    },
    focus: {
      light: rawColors.blue[500],
      dark: rawColors.blue[400],
    },
    error: {
      light: rawColors.red[300],
      dark: rawColors.red[700],
    },
  },

  // Brand colors
  brand: {
    primary: {
      light: rawColors.blue[600],
      dark: rawColors.blue[500],
    },
    primaryHover: {
      light: rawColors.blue[700],
      dark: rawColors.blue[400],
    },
    secondary: {
      light: rawColors.purple[600],
      dark: rawColors.purple[500],
    },
    secondaryHover: {
      light: rawColors.purple[700],
      dark: rawColors.purple[400],
    },
  },

  // State colors
  state: {
    success: {
      light: rawColors.green[600],
      dark: rawColors.green[500],
    },
    successBg: {
      light: rawColors.green[100],
      dark: `${rawColors.green[900]}/30`,
    },
    successText: {
      light: rawColors.green[700],
      dark: rawColors.green[300],
    },

    warning: {
      light: rawColors.amber[500],
      dark: rawColors.amber[400],
    },
    warningBg: {
      light: rawColors.amber[100],
      dark: `${rawColors.amber[900]}/30`,
    },
    warningText: {
      light: rawColors.amber[700],
      dark: rawColors.amber[300],
    },

    error: {
      light: rawColors.red[600],
      dark: rawColors.red[500],
    },
    errorBg: {
      light: rawColors.red[100],
      dark: `${rawColors.red[900]}/30`,
    },
    errorText: {
      light: rawColors.red[700],
      dark: rawColors.red[300],
    },

    info: {
      light: rawColors.blue[600],
      dark: rawColors.blue[500],
    },
    infoBg: {
      light: rawColors.blue[100],
      dark: `${rawColors.blue[900]}/30`,
    },
    infoText: {
      light: rawColors.blue[700],
      dark: rawColors.blue[300],
    },

    selected: {
      light: rawColors.blue[100],
      dark: `${rawColors.blue[900]}/30`,
    },
  },

  // Action colors
  action: {
    primary: {
      light: rawColors.blue[600],
      dark: rawColors.blue[600],
    },
    primaryHover: {
      light: rawColors.blue[700],
      dark: rawColors.blue[700],
    },
    secondary: {
      light: rawColors.neutral[100],
      dark: rawColors.neutral[800],
    },
    danger: {
      light: rawColors.red[600],
      dark: rawColors.red[600],
    },
  },

  // Web3 specific colors
  web3: {
    ethereum: {
      light: rawColors.web3.ethereum.light,
      dark: rawColors.web3.ethereum.dark,
    },
    ethereumBg: {
      light: `${rawColors.blue[100]}`,
      dark: `${rawColors.blue[900]}/30`,
    },
    solana: {
      light: rawColors.web3.solana.light,
      dark: rawColors.web3.solana.dark,
    },
    solanaBg: {
      light: `${rawColors.purple[100]}`,
      dark: `${rawColors.purple[900]}/30`,
    },
    polygon: {
      light: rawColors.web3.polygon.light,
      dark: rawColors.web3.polygon.dark,
    },
    polygonBg: {
      light: `${rawColors.purple[50]}`,
      dark: `${rawColors.purple[900]}/20`,
    },
    bitcoin: {
      light: rawColors.web3.bitcoin.light,
      dark: rawColors.web3.bitcoin.dark,
    },
    bitcoinBg: {
      light: `${rawColors.orange[100]}`,
      dark: `${rawColors.orange[900]}/30`,
    },
    binance: {
      light: rawColors.web3.binance.light,
      dark: rawColors.web3.binance.dark,
    },
    binanceBg: {
      light: `${rawColors.amber[100]}`,
      dark: `${rawColors.amber[900]}/30`,
    },
    cardano: {
      light: rawColors.web3.cardano.light,
      dark: rawColors.web3.cardano.dark,
    },
    cardanoBg: {
      light: `${rawColors.blue[50]}`,
      dark: `${rawColors.blue[900]}/20`,
    },
    avalanche: {
      light: rawColors.web3.avalanche.light,
      dark: rawColors.web3.avalanche.dark,
    },
    avalancheBg: {
      light: `${rawColors.red[100]}`,
      dark: `${rawColors.red[900]}/30`,
    },
    arbitrum: {
      light: rawColors.web3.arbitrum.light,
      dark: rawColors.web3.arbitrum.dark,
    },
    arbitrumBg: {
      light: `${rawColors.neutral[100]}`,
      dark: `${rawColors.neutral[800]}/50`,
    },
    optimism: {
      light: rawColors.web3.optimism.light,
      dark: rawColors.web3.optimism.dark,
    },
    optimismBg: {
      light: `${rawColors.red[50]}`,
      dark: `${rawColors.red[900]}/20`,
    },
  }
} as const;

// =============================================================================
// EXPORTS
// =============================================================================

/**
 * Main colors export with organized structure
 */
export const colors = {
  // Raw color palette (use sparingly, prefer semantic tokens)
  raw: rawColors,
  
  // Semantic color tokens (recommended for most use cases)
  semantic: semanticColors,
} as const;

export default colors;
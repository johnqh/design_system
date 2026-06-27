/**
 * Tailwind Preset Generator
 *
 * Generates Tailwind CSS config presets from a ThemeDefinition.
 * Consuming apps use this to extend their Tailwind config with
 * theme-aware semantic color mappings and structural tokens.
 */

import type { ThemeDefinition } from './types';

/**
 * Create a Tailwind CSS preset from a theme definition.
 * Maps semantic color names to CSS custom properties.
 *
 * Usage in consuming app's tailwind.config.js:
 * ```
 * import { createTailwindPreset } from '@sudobility/design/themes';
 * import { cyberpunk } from '@sudobility/design/themes';
 * export default { presets: [createTailwindPreset(cyberpunk)], ... };
 * ```
 */
export function createTailwindPreset(_theme?: ThemeDefinition) {
  return {
    theme: {
      extend: {
        colors: {
          border: 'hsl(var(--border) / <alpha-value>)',
          input: 'hsl(var(--input) / <alpha-value>)',
          ring: 'hsl(var(--ring) / <alpha-value>)',
          background: 'hsl(var(--background) / <alpha-value>)',
          foreground: 'hsl(var(--foreground) / <alpha-value>)',
          primary: {
            DEFAULT: 'hsl(var(--primary) / <alpha-value>)',
            foreground: 'hsl(var(--primary-foreground) / <alpha-value>)',
          },
          secondary: {
            DEFAULT: 'hsl(var(--secondary) / <alpha-value>)',
            foreground: 'hsl(var(--secondary-foreground) / <alpha-value>)',
          },
          destructive: {
            DEFAULT: 'hsl(var(--destructive) / <alpha-value>)',
            foreground: 'hsl(var(--destructive-foreground) / <alpha-value>)',
          },
          muted: {
            DEFAULT: 'hsl(var(--muted) / <alpha-value>)',
            foreground: 'hsl(var(--muted-foreground) / <alpha-value>)',
          },
          accent: {
            DEFAULT: 'hsl(var(--accent) / <alpha-value>)',
            foreground: 'hsl(var(--accent-foreground) / <alpha-value>)',
          },
          popover: {
            DEFAULT: 'hsl(var(--popover) / <alpha-value>)',
            foreground: 'hsl(var(--popover-foreground) / <alpha-value>)',
          },
          card: {
            DEFAULT: 'hsl(var(--card) / <alpha-value>)',
            foreground: 'hsl(var(--card-foreground) / <alpha-value>)',
          },
          success: {
            DEFAULT: 'hsl(var(--success) / <alpha-value>)',
            foreground: 'hsl(var(--success-foreground) / <alpha-value>)',
          },
          warning: {
            DEFAULT: 'hsl(var(--warning) / <alpha-value>)',
            foreground: 'hsl(var(--warning-foreground) / <alpha-value>)',
          },
          info: {
            DEFAULT: 'hsl(var(--info) / <alpha-value>)',
            foreground: 'hsl(var(--info-foreground) / <alpha-value>)',
          },
        },
        borderRadius: {
          lg: 'var(--radius)',
          md: 'calc(var(--radius) - 2px)',
          sm: 'calc(var(--radius) - 4px)',
        },
        borderWidth: {
          DEFAULT: 'var(--border-width)',
        },
        boxShadow: {
          sm: 'var(--shadow-sm)',
          md: 'var(--shadow-md)',
          lg: 'var(--shadow-lg)',
        },
        fontFamily: {
          sans: 'var(--font-sans)',
          mono: 'var(--font-mono)',
        },
      },
    },
  };
}

/**
 * Create a NativeWind-compatible preset with resolved color values.
 * NativeWind doesn't support CSS custom properties, so colors are
 * resolved to direct HSL values from the theme's light mode tokens.
 */
export function createNativeWindPreset(theme: ThemeDefinition) {
  const { light } = theme;

  function hsl(value: string) {
    return `hsl(${value})`;
  }

  return {
    theme: {
      extend: {
        colors: {
          border: hsl(light.border),
          input: hsl(light.input),
          ring: hsl(light.ring),
          background: hsl(light.background),
          foreground: hsl(light.foreground),
          primary: {
            DEFAULT: hsl(light.primary),
            foreground: hsl(light.primaryForeground),
          },
          secondary: {
            DEFAULT: hsl(light.secondary),
            foreground: hsl(light.secondaryForeground),
          },
          destructive: {
            DEFAULT: hsl(light.destructive),
            foreground: hsl(light.destructiveForeground),
          },
          muted: {
            DEFAULT: hsl(light.muted),
            foreground: hsl(light.mutedForeground),
          },
          accent: {
            DEFAULT: hsl(light.accent),
            foreground: hsl(light.accentForeground),
          },
          popover: {
            DEFAULT: hsl(light.popover),
            foreground: hsl(light.popoverForeground),
          },
          card: {
            DEFAULT: hsl(light.card),
            foreground: hsl(light.cardForeground),
          },
          success: {
            DEFAULT: hsl(light.success),
            foreground: hsl(light.successForeground),
          },
          warning: {
            DEFAULT: hsl(light.warning),
            foreground: hsl(light.warningForeground),
          },
          info: {
            DEFAULT: hsl(light.info),
            foreground: hsl(light.infoForeground),
          },
        },
        borderRadius: {
          lg: light.radius,
          md: light.radius,
          sm: light.radius,
        },
      },
    },
  };
}

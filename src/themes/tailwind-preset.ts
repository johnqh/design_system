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
          border: 'hsl(var(--border))',
          input: 'hsl(var(--input))',
          ring: 'hsl(var(--ring))',
          background: 'hsl(var(--background))',
          foreground: 'hsl(var(--foreground))',
          primary: {
            DEFAULT: 'hsl(var(--primary))',
            foreground: 'hsl(var(--primary-foreground))',
          },
          secondary: {
            DEFAULT: 'hsl(var(--secondary))',
            foreground: 'hsl(var(--secondary-foreground))',
          },
          destructive: {
            DEFAULT: 'hsl(var(--destructive))',
            foreground: 'hsl(var(--destructive-foreground))',
          },
          muted: {
            DEFAULT: 'hsl(var(--muted))',
            foreground: 'hsl(var(--muted-foreground))',
          },
          accent: {
            DEFAULT: 'hsl(var(--accent))',
            foreground: 'hsl(var(--accent-foreground))',
          },
          popover: {
            DEFAULT: 'hsl(var(--popover))',
            foreground: 'hsl(var(--popover-foreground))',
          },
          card: {
            DEFAULT: 'hsl(var(--card))',
            foreground: 'hsl(var(--card-foreground))',
          },
          success: {
            DEFAULT: 'hsl(var(--success))',
            foreground: 'hsl(var(--success-foreground))',
          },
          warning: {
            DEFAULT: 'hsl(var(--warning))',
            foreground: 'hsl(var(--warning-foreground))',
          },
          info: {
            DEFAULT: 'hsl(var(--info))',
            foreground: 'hsl(var(--info-foreground))',
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

/**
 * Component helper utilities for common patterns
 */

import { cn } from './utils';
import { toSemantic } from '../core/variants';
import { getActiveTheme, onThemeConfigured } from '../themes/configure';

/** The legacy classes, or their semantic form while a theme is active. */
function themedLegacy(legacy: string, semantic?: string): string {
  if (!getActiveTheme()) return legacy;
  return semantic ?? toSemantic(legacy);
}

export type ComponentSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type ComponentVariant =
  | 'default'
  | 'primary'
  | 'secondary'
  | 'destructive'
  | 'outline'
  | 'ghost';

/**
 * Size mappings for different component types
 */
export const sizeClasses = {
  button: {
    xs: 'h-7 px-2 text-xs',
    sm: 'h-8 px-3 text-sm',
    md: 'h-10 px-4 text-sm',
    lg: 'h-11 px-8 text-base',
    xl: 'h-12 px-10 text-lg',
  },
  input: {
    xs: 'h-7 px-2 text-xs',
    sm: 'h-8 px-3 text-sm',
    md: 'h-10 px-3 text-sm',
    lg: 'h-11 px-4 text-base',
    xl: 'h-12 px-4 text-lg',
  },
  icon: {
    xs: 'w-3 h-3',
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6',
    xl: 'w-8 h-8',
  },
} as const;

/**
 * Get size classes for component type
 */
export function getSizeClasses<T extends keyof typeof sizeClasses>(
  type: T,
  size: ComponentSize = 'md'
): string {
  return sizeClasses[type][size];
}

/**
 * Focus ring classes
 */
const LEGACY_FOCUS_RING = 'focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2';
const LEGACY_FOCUS_VISIBLE =
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2';

/*
  Strings, not getters, so they cannot ask for the theme when read; they are
  re-assigned when a theme is configured instead. A value copied out before
  that keeps the legacy colour — read them at render time.
*/
export let focusRing = themedLegacy(LEGACY_FOCUS_RING);
export let focusVisible = themedLegacy(LEGACY_FOCUS_VISIBLE);
onThemeConfigured(() => {
  focusRing = themedLegacy(LEGACY_FOCUS_RING);
  focusVisible = themedLegacy(LEGACY_FOCUS_VISIBLE);
});

/**
 * Common transition classes
 */
export const transitions = {
  default: 'transition-colors duration-200',
  all: 'transition-all duration-200',
  fast: 'transition-all duration-100',
  slow: 'transition-all duration-300',
  colors: 'transition-colors duration-200',
  opacity: 'transition-opacity duration-200',
  transform: 'transition-transform duration-200',
} as const;

/**
 * Create hover state classes
 */
export function hoverState(classes: string): string {
  return classes
    .split(' ')
    .map((cls) => `hover:${cls}`)
    .join(' ');
}

/**
 * Create disabled state classes
 */
export function disabledState(
  classes: string = 'opacity-50 cursor-not-allowed pointer-events-none'
): string {
  return `disabled:${classes.replace(/\s+/g, ' disabled:')}`;
}

/**
 * Loading state classes
 */
export const loadingState = 'opacity-70 cursor-wait pointer-events-none';

/**
 * Create variant classes for buttons
 */
export function buttonVariant(variant: ComponentVariant): string {
  const base = 'px-4 py-2';
  const variants = {
    default: 'bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800',
    primary: 'bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800',
    secondary:
      'bg-gray-100 text-gray-900 hover:bg-gray-200 active:bg-gray-300 dark:bg-gray-800 dark:text-gray-100 dark:hover:bg-gray-700',
    destructive: 'bg-red-600 text-white hover:bg-red-700 active:bg-red-800',
    outline:
      'border border-gray-300 bg-transparent hover:bg-gray-50 active:bg-gray-100 dark:border-gray-600 dark:hover:bg-gray-800',
    ghost: 'bg-transparent hover:bg-gray-100 active:bg-gray-200 dark:hover:bg-gray-800',
  };

  const semantic = {
    default: 'bg-primary text-primary-foreground hover:bg-primary/90 active:bg-primary/80',
    primary: 'bg-primary text-primary-foreground hover:bg-primary/90 active:bg-primary/80',
    secondary:
      'bg-secondary text-secondary-foreground hover:bg-secondary/80 active:bg-secondary/70',
    destructive:
      'bg-destructive text-destructive-foreground hover:bg-destructive/90 active:bg-destructive/80',
    outline:
      'border border-input bg-transparent text-foreground hover:bg-accent active:bg-accent/80',
    ghost: 'bg-transparent text-foreground hover:bg-accent active:bg-accent/80',
  };

  return cn(
    base,
    themedLegacy(variants[variant], semantic[variant]),
    transitions.default,
    focusVisible
  );
}

/**
 * Create input variant classes
 */
export function inputVariant(variant: 'default' | 'error' | 'success' = 'default'): string {
  const base =
    'w-full rounded-md border bg-white px-3 py-2 text-sm placeholder:text-gray-500 dark:bg-gray-800 dark:text-gray-100 dark:placeholder:text-gray-400';

  const variants = {
    default:
      'border-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-400',
    error: 'border-red-300 dark:border-red-600 focus:border-red-500 dark:focus:border-red-400',
    success:
      'border-green-300 dark:border-green-600 focus:border-green-500 dark:focus:border-green-400',
  };

  return themedLegacy(cn(base, variants[variant], focusRing, transitions.colors));
}

/**
 * Card variant classes
 */
export function cardVariant(variant: 'default' | 'bordered' | 'elevated' = 'default'): string {
  const base = 'rounded-lg bg-white dark:bg-gray-800';

  const variants = {
    default: base,
    bordered: `${base} border border-gray-200 dark:border-gray-700`,
    elevated: `${base} shadow-md`,
  };

  return themedLegacy(variants[variant]);
}

/**
 * Text variant classes
 */
export function textVariant(
  size: 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl' = 'base',
  weight: 'normal' | 'medium' | 'semibold' | 'bold' = 'normal',
  color: 'default' | 'muted' | 'primary' = 'default'
): string {
  const sizes = {
    xs: 'text-xs',
    sm: 'text-sm',
    base: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl',
    '2xl': 'text-2xl',
  };

  const weights = {
    normal: 'font-normal',
    medium: 'font-medium',
    semibold: 'font-semibold',
    bold: 'font-bold',
  };

  const colors = {
    default: 'text-gray-900 dark:text-gray-100',
    muted: 'text-gray-600 dark:text-gray-400',
    primary: 'text-blue-600 dark:text-blue-400',
  };

  return cn(sizes[size], weights[weight], themedLegacy(colors[color]));
}

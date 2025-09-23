/**
 * Advanced Type Definitions for the Design System
 *
 * This module provides comprehensive type definitions that improve
 * TypeScript intellisense, enable better error detection, and
 * facilitate AI-assisted development.
 *
 * @module VariantTypes
 * @author Design System Team
 * @since 1.0.17
 */

/**
 * Base function type for variant functions that return CSS class strings.
 */
export type VariantFunction = () => string;

/**
 * Function type for variants that accept optional parameters.
 */
export type VariantWithArgs<T = string> = (variant?: T) => string;

/**
 * Union type of all possible variant value types.
 */
export type VariantValue = VariantFunction | VariantWithArgs | string;

/**
 * Nested variant structure for complex component hierarchies.
 */
export type NestedVariant = {
  [key: string]: VariantValue | NestedVariant;
};

/**
 * Standard component sizes supported across the design system.
 */
export type ComponentSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';

/**
 * Standard component variants supported across the design system.
 */
export type ComponentVariant =
  | 'default'
  | 'primary'
  | 'secondary'
  | 'outline'
  | 'ghost'
  | 'destructive'
  | 'success'
  | 'warning'
  | 'info';

/**
 * Enhanced button variant structure with better type safety.
 */
export interface TypedButtonVariants {
  primary: {
    default: VariantFunction;
    small: VariantFunction;
    large: VariantFunction;
    withIcon: VariantFunction;
    fullWidth: VariantFunction;
  } & Record<ComponentSize, VariantFunction>;

  secondary: {
    default: VariantFunction;
    small: VariantFunction;
    large: VariantFunction;
    withIcon: VariantFunction;
  } & Record<ComponentSize, VariantFunction>;

  outline: {
    default: VariantFunction;
  } & Record<string, VariantFunction>;

  destructive: {
    default: VariantFunction;
    outline: VariantFunction;
  } & Record<string, VariantFunction>;

  ghost: {
    default: VariantFunction;
    icon: VariantFunction;
  } & Record<string, VariantFunction>;

  link: {
    default: VariantFunction;
    muted: VariantFunction;
  } & Record<string, VariantFunction>;

  gradient: {
    primary: VariantFunction;
    success: VariantFunction;
  } & Record<ComponentVariant, VariantFunction>;

  web3: {
    wallet: VariantFunction;
    connect: VariantFunction;
    disconnect: VariantFunction;
  } & Record<string, VariantFunction>;
}

/**
 * Type-safe card variant structure.
 */
export interface TypedCardVariants {
  default: {
    default: VariantFunction;
  } & Record<ComponentSize, VariantFunction>;

  elevated: {
    default: VariantFunction;
  } & Record<ComponentSize, VariantFunction>;

  interactive: {
    default: VariantFunction;
  } & Record<ComponentSize, VariantFunction>;

  [key: string]: Record<string, VariantFunction>;
}

/**
 * Type-safe badge variant structure.
 */
export interface TypedBadgeVariants {
  default: VariantFunction;
  secondary: VariantFunction;
  outline: VariantFunction;
  destructive: VariantFunction;
  success: VariantFunction;
  warning: VariantFunction;
  info: VariantFunction;
  [key: string]: VariantFunction | VariantWithArgs;
}

/**
 * Type-safe input variant structure.
 */
export interface TypedInputVariants {
  default: VariantFunction;
  search: VariantFunction;
  error: VariantFunction;
  success: VariantFunction;
  [key: string]: VariantFunction | VariantWithArgs;
}

/**
 * Type-safe alert variant structure.
 */
export interface TypedAlertVariants {
  default:
    | VariantFunction
    | {
        default: VariantFunction;
        [key: string]: VariantFunction;
      };
  info:
    | VariantFunction
    | {
        default: VariantFunction;
        [key: string]: VariantFunction;
      };
  success:
    | VariantFunction
    | {
        default: VariantFunction;
        [key: string]: VariantFunction;
      };
  warning:
    | VariantFunction
    | {
        default: VariantFunction;
        [key: string]: VariantFunction;
      };
  destructive:
    | VariantFunction
    | {
        default: VariantFunction;
        [key: string]: VariantFunction;
      };
  [key: string]: VariantFunction | Record<string, VariantFunction>;
}

/**
 * Enhanced variant configuration with better type safety.
 * Replaces the previous `any` types with specific, typed structures.
 */
export interface TypedVariantsType {
  button: TypedButtonVariants;
  card: TypedCardVariants;
  badge: TypedBadgeVariants;
  input: TypedInputVariants;
  alert: TypedAlertVariants;
  loading: {
    [key: string]: {
      [key: string]: VariantFunction | VariantWithArgs;
    };
  };
  /** Additional component variants can be added here with proper typing */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [K: string]: any;
}

/**
 * Enhanced variant configuration for the SimpleVariants class.
 * Provides better type safety while maintaining flexibility.
 */
export interface TypedVariantConfig {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [componentName: string]: any;
}

/**
 * Utility type to extract component names from variant configuration.
 */
export type ComponentNames<T extends TypedVariantConfig> = keyof T;

/**
 * Utility type to extract variant names for a specific component.
 */
export type VariantNames<T extends TypedVariantConfig, C extends ComponentNames<T>> =
  T[C] extends Record<string, unknown> ? keyof T[C] : never;

/**
 * Type-safe variant getter function signature.
 */
export type TypedVariantGetter = <
  T extends TypedVariantConfig,
  C extends ComponentNames<T>,
  V extends VariantNames<T, C>,
>(
  component: C,
  variant?: V
) => string;

/**
 * Options for variant resolution with validation.
 */
export interface VariantResolutionOptions {
  /** Whether to throw errors for missing variants */
  strict?: boolean;
  /** Whether to log warnings for missing variants */
  logWarnings?: boolean;
  /** Custom fallback function */
  fallback?: (component: string, variant: string) => string;
}

/**
 * Result type for variant resolution operations.
 */
export interface VariantResolutionResult {
  /** The resolved CSS classes */
  classes: string;
  /** Whether a fallback was used */
  usedFallback: boolean;
  /** Any warnings or errors encountered */
  warnings?: string[];
  /** The original component and variant requested */
  requested: {
    component: string;
    variant: string;
  };
}

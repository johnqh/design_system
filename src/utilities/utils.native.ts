/**
 * Core utility functions for the design system (React Native version).
 *
 * This module provides essential utilities for class name manipulation,
 * specifically optimized for NativeWind class handling.
 *
 * @module Utils (React Native)
 * @author Design System Team
 * @since 1.1.0
 */

import { type ClassValue, clsx } from 'clsx';

/**
 * Combines CSS class names for React Native with NativeWind.
 *
 * Unlike the web version, we don't need tailwind-merge since NativeWind
 * processes Tailwind classes at build time and handles merging internally.
 *
 * @param inputs - Variable number of class values (strings, objects, arrays)
 * @returns Merged class string
 *
 * @example
 * ```typescript
 * import { cn } from '@sudobility/design';
 *
 * // Basic usage
 * cn('text-red-500', 'bg-blue-500') // "text-red-500 bg-blue-500"
 *
 * // Conditional classes
 * cn('base-class', {
 *   'active-class': isActive,
 *   'disabled-class': isDisabled
 * })
 *
 * // With NativeWind className prop
 * <View className={cn('flex-1', props.className)} />
 * ```
 */
function cn(...inputs: ClassValue[]): string {
  return clsx(inputs);
}

export { cn };

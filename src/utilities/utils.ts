/**
 * Core utility functions for the design system.
 *
 * This module provides essential utilities for class name manipulation,
 * specifically optimized for Tailwind CSS class merging and conditional
 * class application.
 *
 * @module Utils
 * @author Design System Team
 * @since 1.0.0
 */

import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Combines and merges CSS class names intelligently.
 *
 * This utility combines the power of `clsx` for conditional classes
 * and `tailwind-merge` for intelligent Tailwind CSS class merging.
 * It handles conflicts between Tailwind classes automatically.
 *
 * @param inputs - Variable number of class values (strings, objects, arrays)
 * @returns Merged and deduplicated class string
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
 * }) // "base-class active-class" (if isActive is true)
 *
 * // Tailwind conflict resolution
 * cn('text-red-500', 'text-blue-500') // "text-blue-500" (latter wins)
 *
 * // Complex combinations
 * cn(
 *   'px-4 py-2',
 *   isLarge && 'px-6 py-3',
 *   {
 *     'bg-blue-500': variant === 'primary',
 *     'bg-gray-500': variant === 'secondary'
 *   },
 *   className // External className prop
 * )
 * ```
 */
function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

export { cn };

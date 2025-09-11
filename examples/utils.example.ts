/**
 * Utility functions for examples
 * Simple implementations for demonstration purposes
 */

/**
 * Class name utility - simple alternative to clsx/cn
 * Combines class names and filters out falsy values
 */
export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ').trim();
}

/**
 * TouchableOpacity mock for React Native examples
 * In real implementation, import from react-native
 */
export const TouchableOpacity = 'TouchableOpacity' as any;

/**
 * Text mock for React Native examples
 * In real implementation, import from react-native
 */
export const Text = 'Text' as any;
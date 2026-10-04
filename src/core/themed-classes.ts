/**
 * Theme-aware class tables
 *
 * Several exports are plain objects of class strings (status colours,
 * gradients, UI constants). Read as written, they would emit the legacy
 * palette under every theme. `themedClasses()` mirrors such a table with
 * getters, so each read answers for the theme active at that moment — a theme
 * configured after this module loads is honoured, as `colors.component` does.
 */

import { getActiveTheme } from '../themes/configure';
import { toSemantic } from './variants';

/** A class table as `themedClasses()` returns it: every leaf a string. */
export type ThemedClasses<T> = T extends string
  ? string
  : { readonly [K in keyof T]: ThemedClasses<T[K]> };

/** Semantic strings to use for chosen leaves in place of the derived ones. */
export type SemanticOverrides<T> = T extends string
  ? string
  : { readonly [K in keyof T]?: SemanticOverrides<T[K]> };

/**
 * Mirror a table of legacy class strings with getters that return the legacy
 * string when no theme is active (unchanged output for un-themed hosts) and
 * its semantic form when one is: the matching entry of `semantic` where
 * given, otherwise {@link toSemantic} of the legacy string.
 */
export function themedClasses<T extends object>(
  legacy: T,
  semantic: SemanticOverrides<T> = {} as SemanticOverrides<T>
): ThemedClasses<T> {
  const out: Record<string, unknown> = {};
  for (const key of Object.keys(legacy)) {
    const value = (legacy as Record<string, unknown>)[key];
    const override = (semantic as Record<string, unknown>)[key];
    if (typeof value === 'string') {
      Object.defineProperty(out, key, {
        enumerable: true,
        get: () =>
          getActiveTheme() ? (typeof override === 'string' ? override : toSemantic(value)) : value,
      });
    } else if (value && typeof value === 'object') {
      out[key] = themedClasses(value as object, (override ?? {}) as SemanticOverrides<object>);
    } else {
      out[key] = value;
    }
  }
  return out as ThemedClasses<T>;
}

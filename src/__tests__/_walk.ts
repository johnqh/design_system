/**
 * Shared test helper (not a test file — excluded from the *.test.ts run).
 * Recursively invokes every function found in a nested object with a spread of
 * argument shapes, to exercise argument-dependent branches (variant lookups,
 * boolean ternaries, numeric defaults) without needing each exact call path.
 */
const ARGS: unknown[] = [undefined, true, false, 'default', 'primary', 'error', 'zzz', 0, 1];

export function callAllArgs(node: unknown): number {
  let count = 0;
  if (typeof node === 'function') {
    for (const a of ARGS) {
      try {
        (node as (x?: unknown) => unknown)(a);
        count++;
      } catch {
        /* argument shape not supported — ignore */
      }
    }
    return count;
  }
  if (node && typeof node === 'object') {
    for (const v of Object.values(node as Record<string, unknown>)) {
      count += callAllArgs(v);
    }
  }
  return count;
}

/** Force-evaluate all getter-backed groups of the `ui` object. */
export function touchUi(ui: Record<string, unknown>): void {
  for (const key of Object.keys(ui)) {
    const group = ui[key]; // triggers getter
    if (group && typeof group === 'object') {
      for (const v of Object.values(group as Record<string, unknown>)) {
        if (typeof v === 'function') {
          try {
            (v as (x?: unknown) => unknown)('ethereum');
            (v as (x?: unknown) => unknown)('solana');
          } catch {
            /* ignore */
          }
        }
      }
    }
  }
}

/** Arguments `collectStrings` tries on every function: the variant names in use. */
const VARIANT_ARGS: unknown[] = [
  undefined,
  'default',
  'primary',
  'secondary',
  'outline',
  'ghost',
  'destructive',
  'link',
  'muted',
  'success',
  'warning',
  'attention',
  'error',
  'info',
  'neutral',
  'bordered',
  'elevated',
  'xs',
  'sm',
  'md',
  'base',
  'lg',
  'xl',
  '2xl',
  'normal',
  'medium',
  'semibold',
  'bold',
  'ethereum',
  'solana',
];

/**
 * Every string reachable from `root`: properties and getters are read, and
 * functions are called with each of `VARIANT_ARGS` (plus a size/weight/colour
 * triple for `textVariant`-shaped helpers). Keyed by access path, e.g.
 * `variants.button.primary.default()` or `buttonVariant(outline)`.
 */
export function collectStrings(
  root: Record<string, unknown>,
  skip: ReadonlySet<string> = new Set()
): Map<string, string> {
  // Calling everything with arbitrary arguments trips the lookups' own
  // warnings thousands of times; they say nothing about this walk.
  const warn = console.warn;
  console.warn = () => undefined;
  try {
    return walkStrings(root, skip);
  } finally {
    console.warn = warn;
  }
}

function walkStrings(
  root: Record<string, unknown>,
  skip: ReadonlySet<string>
): Map<string, string> {
  const out = new Map<string, string>();
  const seen = new WeakSet<object>();
  const visit = (node: unknown, path: string, depth: number): void => {
    if (depth > 9) return;
    if (typeof node === 'string') {
      out.set(path, node);
      return;
    }
    if (typeof node === 'function') {
      const fn = node as (...args: unknown[]) => unknown;
      for (const a of VARIANT_ARGS) {
        try {
          visit(fn(a), `${path}(${String(a)})`, depth + 1);
        } catch {
          /* argument shape not supported — ignore */
        }
      }
      try {
        visit(fn('sm', 'medium', 'muted'), `${path}(sm,medium,muted)`, depth + 1);
      } catch {
        /* ignore */
      }
      return;
    }
    if (node && typeof node === 'object') {
      if (seen.has(node)) return;
      seen.add(node);
      for (const key of Object.keys(node)) {
        let child: unknown;
        try {
          child = (node as Record<string, unknown>)[key];
        } catch {
          continue;
        }
        visit(child, `${path}.${key}`, depth + 1);
      }
    }
  };
  for (const key of Object.keys(root).sort()) {
    if (!skip.has(key)) visit(root[key], key, 0);
  }
  return out;
}

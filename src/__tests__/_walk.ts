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

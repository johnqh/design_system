# Component Styling Standard

**Status:** Authoritative. Every visual component in every consumer repo
(`mail_box_components`, `mail_box_components_rn`, `building_blocks`,
`building_blocks_rn`, and all their `packages/*`) must comply.

**Goal:** All visual styling derives from `@sudobility/design`. Components carry
**no hardcoded styling**, so every component is fully theme-aware (responds to all
15 theme presets and light/dark automatically).

---

## 1. The core rule

> **No hardcoded visual styling in component source.** Colors, typography,
> radius, borders, shadows, and component "looks" come exclusively from the design
> system (`variants`, `ui`, `textVariants`, `designTokens`, and semantic theme
> tokens). When the design system lacks something a component needs, **extend the
> design system** — never inline a literal.

This is the strict, `variants()`-first standard. The design system is the single
source of truth for appearance.

### 1a. Banned in component source (hard failures)

- **Palette color utilities:** `bg-{c}-{n}`, `text-{c}-{n}`, `border-{c}-{n}`,
  `ring-{c}-{n}`, `from/to/via-{c}-{n}`, `fill/stroke-{c}-{n}`, `divide-{c}-{n}`,
  `placeholder-{c}-{n}`, `shadow-{c}-{n}` — where `{c}` is a Tailwind palette name
  (`red, orange, amber, yellow, lime, green, emerald, teal, cyan, sky, blue,
  indigo, violet, purple, fuchsia, pink, rose, gray, slate, zinc, neutral, stone`)
  and any `white`/`black` color utilities.
- **`dark:` color variants** (e.g. `dark:bg-gray-800`). Theme tokens are already
  light/dark aware — `dark:` color overrides become unnecessary and are banned.
- **Literal colors:** hex (`#1a2b3c`), `rgb(...)`, `rgba(...)`, `hsl(...)` inside
  component styles or `style={{}}`.
- **Hardcoded typography clusters:** ad-hoc `text-2xl font-bold leading-tight ...`
  → use `textVariants`.
- **Arbitrary color/size values:** `bg-[#...]`, `text-[14px]`, `text-[#...]`.

### 1b. Allowed: structural layout geometry (the one exception)

Pure layout/positioning utilities that carry **no theme/brand meaning** may remain,
because the design system cannot enumerate every bespoke layout:

`flex`, `grid`, `grid-cols-*`, `col/row-span-*`, `items-*`, `justify-*`,
`gap-*`, `space-*`, `w-*`, `h-*`, `min/max-*`, `p-*`, `m-*`, `inset/top/left-*`,
`relative`, `absolute`, `fixed`, `sticky`, `overflow-*`, `z-*`, `hidden`,
`block`, `inline-*`, `truncate`, `aspect-*`, and responsive/`group`/`peer`
prefixes applied to these.

> **Decision flagged for the owner:** the strict reading is "no raw Tailwind at
> all." Visual styling (color/typography/radius/shadow/border) is held to that
> 100%. Layout geometry uses this bounded exception so we don't pollute `ui` with
> hundreds of one-off layout helpers. If you want layout routed through `ui.*` too,
> say so and this exception is removed. Until then: **visual = 100% design system;
> layout geometry = raw structural utilities permitted.**

---

## 2. Literal → design system mapping (cheat sheet)

| Hardcoded (before) | Design system (after) |
|---|---|
| `bg-blue-600 hover:bg-blue-700` (brand action) | `variants.button.primary.default()` or `bg-primary hover:bg-primary/90` |
| `text-gray-900 dark:text-white` (body text) | `text-foreground` |
| `text-gray-500 dark:text-gray-400` (secondary) | `text-muted-foreground` |
| `bg-white dark:bg-gray-900` (page surface) | `bg-background` |
| `bg-white dark:bg-gray-800` (card surface) | `bg-card text-card-foreground` or `variants.card.default.padded()` |
| `bg-gray-100 dark:bg-gray-800` (muted fill) | `bg-muted` or `bg-secondary` |
| `border-gray-200 dark:border-gray-700` | `border border-border` |
| `bg-red-600` / `text-red-600` (danger) | `bg-destructive` / `text-destructive` |
| `text-green-600` (success) | `text-success` |
| `text-amber-600` / `text-yellow-600` (warning) | `text-warning` |
| `text-blue-600` (info / link) | `text-info` or `textVariants.link.default()` |
| `text-2xl font-bold ...` (heading) | `textVariants.heading.h2()` (and `.h1/.h3/...`) |
| `text-sm text-gray-600` (caption) | `textVariants.caption.default()` / `textVariants.body.sm()` |
| ad-hoc badge pills | `variants.badge.{default,primary,success,warning,error}()` |
| ad-hoc inputs | `variants.input.{default,search,error}()` |
| `rounded-lg`, `shadow-md`, `font-sans` | keep — the Tailwind preset maps these to theme tokens (`--radius`, `--shadow-*`, `--font-*`) |

Compose class strings with `cn(...)` from `@sudobility/design` (web) — the native
entry exports the RN-safe `cn`. Never hand-concatenate with template strings where
`cn` applies.

---

## 3. When the design system lacks something → extend it

Per the "always extend the design system" policy, do **not** keep a local style.
Instead:

1. **New semantic color need** → add a token to `src/tokens/colors.ts` and, if it
   should be themeable, add it to `ThemeTokens` (`src/themes/types.ts`), every
   preset in `src/themes/presets/*.ts`, the CSS generator
   (`src/themes/css-generator.ts`), and both Tailwind presets
   (`src/themes/tailwind-preset.ts`).
2. **New component variant** → add it to `src/core/variants.ts` using the existing
   `themed(component, semantic, legacy)` pattern so it stays theme-aware.
3. **New typography style** → add to `src/core/typography.ts` (`textVariants`).
4. **New layout/UI pattern** → add to the `ui` object in `src/index.ts`.
5. Add/extend a unit test in `src/__tests__/` for the new export.
6. Rebuild design_system, verify its gate (§5), publish (per-repo deploy), and bump
   the consumer's dependency before consuming the new export.

Every addition must be **theme-aware** (light + dark via tokens, not literals).

---

## 4. Per-component conversion procedure

1. Read the component; list every banned token (§1a) it uses.
2. Map each to a design-system equivalent (§2). For gaps, extend the DS (§3).
3. Replace; keep allowed structural layout (§1b) untouched.
4. Preserve behavior, props, and accessibility attributes exactly.
5. Run the package gate (§5). Fix until clean.

Work **package by package**; a package is "done" only when its full gate is green.

---

## 5. Per-package verification gate (all must pass, zero tolerance)

```bash
# from the repo root (or package dir, per repo conventions)
<build>        # e.g. bun run build  — must exit 0, no errors/warnings
<typecheck>    # e.g. tsc --noEmit   — exit 0
<test>         # e.g. vitest run / jest — all pass
<lint>         # eslint ... --max-warnings 0  — zero warnings AND zero errors
```

Each repo's exact commands live in its `package.json`. Lint is always run with a
**zero-warning** threshold, regardless of the repo's default `--max-warnings`.

---

## 6. Detection helper (find remaining hardcoded styling)

```bash
# palette color utilities + dark: color variants + hex literals
grep -rnE \
  '(bg|text|border|ring|from|to|via|fill|stroke|divide|placeholder|shadow)-(red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose|gray|slate|zinc|neutral|stone)(-[0-9]{2,3})?|dark:(bg|text|border|ring)-|#[0-9a-fA-F]{3,8}\b' \
  src --include='*.tsx' --include='*.ts' | grep -vE '__tests__|\.test\.'
```

A package is visually converted when this returns nothing (modulo intentional,
documented exceptions).

---

## 7. RN specifics

- Import from `@sudobility/design` — Metro resolves the `react-native` entry
  (`index.native.js`) automatically; the RN-safe `cn` is used there.
- RN repos use NativeWind; wire `createNativeWindPreset(theme)` into the repo's
  `tailwind.config.js` so semantic tokens resolve to concrete HSL values
  (NativeWind can't use CSS custom properties).
- Mirror the corresponding web component's structure (use the web repo as the
  reference) but respect RN constraints (no `backdrop-blur`, etc. — use
  `nativeClassOverrides`).

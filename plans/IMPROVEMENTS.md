# Improvement Plans for @sudobility/design

## Priority 1 - High Impact

### 1. Add Visual Regression Testing
- **Current state**: 11 test files with 95% coverage threshold, but tests only verify string outputs, not visual rendering
- **Recommendation**: Add visual snapshot tests (e.g., via Chromatic, Percy, or HTML snapshots) for key variant combinations. This catches regressions where class strings are valid but produce unexpected visual results (e.g., conflicting Tailwind classes).
- **Effort**: Medium

### 2. Validate Dark Mode Contrast Ratios
- **Current state**: Every color/component has explicit `dark:` Tailwind variants, but there is no automated WCAG contrast validation
- **Recommendation**: Add a test that resolves semantic color pairs (text + background) for both light and dark themes and validates they meet WCAG AA contrast ratios (4.5:1 for normal text, 3:1 for large text)
- **Effort**: Medium

### 3. Document the Three-Tier Color Architecture ✅
- **Current state**: The raw -> semantic -> component color architecture is documented in CLAUDE.md but the source code comments are minimal. Developers may use `colors.raw` directly when they should use `colors.component`.
- **Recommendation**: Add prominent JSDoc warnings on `rawColors` discouraging direct use, and add a "Color Usage Guide" section to CLAUDE.md or a dedicated color docs file
- **Effort**: Low

## Priority 2 - Medium Impact

### 4. Audit and Prune AI Helper Functions ✅
- **Current state**: `ai-helpers.ts` exports 10+ functions (`getSemanticColor`, `applyUIPattern`, `createSizedComponent`, `createComponentWithIntent`, `validateVariantConfig`, `safeResolveVariant`, `getVariantSuggestions`, `analyzeVariantUsage`). It's unclear which are actively used by downstream packages.
- **Recommendation**: Check usage across the Sudobility ecosystem. Deprecate or remove unused functions. The `analyzeVariantUsage` and `getVariantSuggestions` functions seem development-time only and may not belong in the production bundle.
- **Effort**: Medium

### 5. Add CSS Custom Property Output
- **Current state**: All tokens are Tailwind class strings. Runtime theme switching requires full Tailwind class swapping.
- **Recommendation**: Generate CSS custom properties (e.g., `--color-primary: #3b82f6`) from design tokens as an alternative output format. This enables runtime theming without reloading stylesheets.
- **Effort**: High

### 6. Consolidate `ui` Object with Existing Exports ✅
- **Current state**: The `ui` object is defined inline in `index.ts` (~200 lines) and partially overlaps with `textVariants`, `variants`, and `designTokens`. For example, `ui.text.h1` duplicates functionality available via `textVariants.heading.h1()`.
- **Recommendation**: Consider whether the `ui` object should be auto-generated from existing token/variant exports, or document clearly when to use `ui` vs the primary exports
- **Effort**: Medium

## Priority 3 - Architecture

### 7. Add Tree-shaking Verification
- **Current state**: Package declares `"sideEffects": false` and exports are named, but there is no CI check verifying tree-shaking effectiveness
- **Recommendation**: Add a bundle size CI check (e.g., `size-limit`) that imports individual exports and verifies the bundle only includes what's imported. This is especially important given the three output formats (ESM, CJS, native).
- **Effort**: Low-medium

### 8. Improve SimpleVariants Type Inference
- **Current state**: `SimpleVariants.get('button', 'primary')` accepts `string` parameters. Invalid component/variant names are not caught at compile time.
- **Recommendation**: Make `SimpleVariants` generic over the config type so that `.get()`, `.sized()`, and `.nested()` only accept valid keys. This would provide autocomplete and compile-time validation.
- **Effort**: Medium-high

### 9. Add Animation Token System
- **Current state**: `designTokens.animation` and `designTokens.ease` provide basic Tailwind animation classes, but there are no spring physics presets or enter/exit transition compositions
- **Recommendation**: Add composable animation presets (e.g., `fadeIn`, `slideUp`, `scaleIn`) as token functions, similar to how `textVariants` works. Include both CSS-based (Tailwind) and RN-compatible (Animated API config) outputs.
- **Effort**: Medium

## Priority 4 - Developer Experience

### 10. Add Token Reference Site or Storybook
- **Current state**: Token documentation lives only in CLAUDE.md and JSDoc comments. No visual reference exists.
- **Recommendation**: Create a static site (or Storybook) that renders all colors, typography variants, component variants, and gradients with live examples
- **Effort**: Medium

### 11. Add Migration Guide for Breaking Changes
- **Current state**: No CHANGELOG.md or migration guide. The package is at v1.1.19, implying past minor releases may have had additions.
- **Recommendation**: Add a changelog to help consumers of the package track what changed between versions
- **Effort**: Low

### 12. Improve SEO Content Relevance
- **Current state**: `content/seo-keywords.ts` and `content/structured-data.ts` contain hardcoded 0xmail/Web3 email domain content that is not configurable
- **Recommendation**: Either make these configurable (accept domain/product name as parameters) or document that they are 0xmail-specific and may need to be overridden by other Sudobility products
- **Effort**: Low-medium

/**
 * Theme System Types
 *
 * Defines the contract for design system themes. Each theme provides:
 * - Color tokens as HSL channel values (e.g., "221.2 83.2% 53.3%")
 * - Structural tokens (radius, borders, shadows, fonts)
 * - Optional class overrides for structural differences (e.g., neo-brutalism thick borders)
 */

/**
 * Color and structural tokens for a theme.
 * Color values are HSL channels without `hsl()` wrapper, e.g., "221.2 83.2% 53.3%".
 * These get used as `hsl(var(--primary))` in Tailwind config.
 */
export interface ThemeTokens {
  // Core colors
  background: string;
  foreground: string;
  card: string;
  cardForeground: string;
  popover: string;
  popoverForeground: string;
  primary: string;
  primaryForeground: string;
  secondary: string;
  secondaryForeground: string;
  muted: string;
  mutedForeground: string;
  accent: string;
  accentForeground: string;
  destructive: string;
  destructiveForeground: string;
  // State colors
  success: string;
  successForeground: string;
  warning: string;
  warningForeground: string;
  info: string;
  infoForeground: string;
  // Utility colors
  border: string;
  input: string;
  ring: string;
  /**
   * Recessed surface: the plane that sits *below* `background` — code wells,
   * input troughs, table bodies. GitHub Primer calls this `canvas.inset`;
   * the role is named `well` here because a Tailwind color named `inset`
   * would shadow the built-in `ring-inset` utility.
   * Optional so themes authored before this role stay valid; when absent the
   * CSS generator falls back to `background`, rendering the plane flat rather
   * than broken.
   */
  well?: string;
  wellForeground?: string;
  // Structural tokens
  radius: string;
  borderWidth: string;
  shadowSm: string;
  shadowMd: string;
  shadowLg: string;
  fontSans: string;
  fontMono: string;
}

/** Class overrides for components that need structural changes beyond CSS vars. */
export interface ThemeClassOverrides {
  button?: { base?: string };
  card?: { base?: string };
  input?: { base?: string };
  badge?: { base?: string };
  alert?: { base?: string };
}

/** Complete theme definition. */
export interface ThemeDefinition {
  name: string;
  displayName: string;
  description?: string;
  light: ThemeTokens;
  dark: ThemeTokens;
  classOverrides?: ThemeClassOverrides;
  /** React Native-specific overrides (e.g., no backdrop-blur). */
  nativeClassOverrides?: ThemeClassOverrides;
}

export type ThemeName =
  | 'default'
  | 'navy'
  | 'radiograph'
  | 'neo-brutalism'
  | 'glassmorphism'
  | 'retro'
  | 'y2k'
  | 'cyberpunk'
  | 'vaporwave'
  | 'swiss'
  | 'linear'
  | 'notion'
  | 'web3'
  | 'gaming'
  | 'defi'
  | 'prediction-market'
  | 'gambling'
  | 'terminal'
  | 'windows-3.1'
  | 'windows-2000'
  // Real-world design systems
  | 'material'
  | 'fluent'
  | 'carbon'
  | 'polaris'
  | 'primer'
  | 'atlassian'
  | 'spectrum'
  | 'base-web'
  | 'lightning'
  | 'ant-design'
  | 'astryx'
  | 'apple'
  | 'govuk'
  | 'uswds'
  // Retro computers
  | 'classic-mac'
  | 'commodore-64'
  | 'game-boy'
  | 'amiga'
  | 'nextstep'
  // Game consoles
  | 'playstation'
  | 'xbox'
  | 'nintendo'
  | 'steam'
  // Color-scheme design systems
  | 'nord'
  | 'dracula'
  | 'solarized'
  | 'catppuccin'
  | 'gruvbox';

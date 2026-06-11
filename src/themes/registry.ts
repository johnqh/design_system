/**
 * Theme Registry
 *
 * All themes indexed by name for programmatic access.
 */

import type { ThemeDefinition, ThemeName } from './types';
import { defaultTheme } from './presets/default';
import { neoBrutalismTheme } from './presets/neo-brutalism';
import { glassmorphismTheme } from './presets/glassmorphism';
import { cyberpunkTheme } from './presets/cyberpunk';
import { vaporwaveTheme } from './presets/vaporwave';
import { retroTheme } from './presets/retro';
import { y2kTheme } from './presets/y2k';
import { swissTheme } from './presets/swiss';
import { linearTheme } from './presets/linear';
import { notionTheme } from './presets/notion';
import { web3Theme } from './presets/web3';
import { gamingTheme } from './presets/gaming';
import { defiTheme } from './presets/defi';
import { predictionMarketTheme } from './presets/prediction-market';
import { gamblingTheme } from './presets/gambling';

export const themes: Record<ThemeName, ThemeDefinition> = {
  default: defaultTheme,
  'neo-brutalism': neoBrutalismTheme,
  glassmorphism: glassmorphismTheme,
  cyberpunk: cyberpunkTheme,
  vaporwave: vaporwaveTheme,
  retro: retroTheme,
  y2k: y2kTheme,
  swiss: swissTheme,
  linear: linearTheme,
  notion: notionTheme,
  web3: web3Theme,
  gaming: gamingTheme,
  defi: defiTheme,
  'prediction-market': predictionMarketTheme,
  gambling: gamblingTheme,
};

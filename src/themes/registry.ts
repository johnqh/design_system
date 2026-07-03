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
import { terminalTheme } from './presets/terminal';
import { windows31Theme } from './presets/windows-3-1';
import { windows2000Theme } from './presets/windows-2000';
// Real-world design systems
import { materialTheme } from './presets/material';
import { fluentTheme } from './presets/fluent';
import { carbonTheme } from './presets/carbon';
import { polarisTheme } from './presets/polaris';
import { primerTheme } from './presets/primer';
import { atlassianTheme } from './presets/atlassian';
import { spectrumTheme } from './presets/spectrum';
import { baseWebTheme } from './presets/base-web';
import { lightningTheme } from './presets/lightning';
import { antDesignTheme } from './presets/ant-design';
import { astryxTheme } from './presets/astryx';
import { appleTheme } from './presets/apple';
import { govukTheme } from './presets/govuk';
import { uswdsTheme } from './presets/uswds';

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
  terminal: terminalTheme,
  'windows-3.1': windows31Theme,
  'windows-2000': windows2000Theme,
  // Real-world design systems
  material: materialTheme,
  fluent: fluentTheme,
  carbon: carbonTheme,
  polaris: polarisTheme,
  primer: primerTheme,
  atlassian: atlassianTheme,
  spectrum: spectrumTheme,
  'base-web': baseWebTheme,
  lightning: lightningTheme,
  'ant-design': antDesignTheme,
  astryx: astryxTheme,
  apple: appleTheme,
  govuk: govukTheme,
  uswds: uswdsTheme,
};

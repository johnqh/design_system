/**
 * Exercises every variant / typography / ui function with NO active theme,
 * covering the legacy (non-themed) branches of themed()/tc().
 * This file never calls configureTheme().
 */
import { describe, it, expect } from 'vitest';
import { variants } from '../core/variants';
import { textVariants } from '../core/typography';
import { ui } from '../index';
import { callAllArgs, touchUi } from './_walk';

describe('exhaustive variant invocation (legacy / no theme)', () => {
  it('invokes every variants function without throwing', () => {
    expect(callAllArgs(variants)).toBeGreaterThan(500);
  });
  it('invokes every textVariants function', () => {
    expect(callAllArgs(textVariants)).toBeGreaterThan(50);
  });
  it('evaluates every ui getter group', () => {
    touchUi(ui as unknown as Record<string, unknown>);
    expect(ui.web3.chainBadge('ethereum')).toContain('inline-flex');
    expect(ui.web3.chainBadge('solana')).toContain('inline-flex');
  });
});

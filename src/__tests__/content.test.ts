/**
 * Coverage for content/ (SEO keyword getters + structured-data factories).
 */
import { describe, it, expect } from 'vitest';
import {
  BASE_KEYWORDS,
  createCompanyKeywords,
  combineKeywords,
  getHomePageKeywords,
  getAboutPageKeywords,
  getDocumentationKeywords,
  getUserPageKeywords,
  getDeveloperPageKeywords,
  getWeb3ProjectsKeywords,
  getSubscriptionKeywords,
  getContactKeywords,
} from '../content/seo-keywords';
import {
  createBaseOrganization,
  createSoftwareApplicationData,
  createWebPageData,
  createAboutPageData,
  createTechArticleData,
} from '../content/structured-data';

describe('seo-keywords', () => {
  it('combineKeywords dedupes across sets', () => {
    expect(combineKeywords(['a', 'b'], ['b', 'c'])).toEqual(['a', 'b', 'c']);
    expect(combineKeywords()).toEqual([]);
  });

  it('createCompanyKeywords embeds the domain', () => {
    expect(createCompanyKeywords('0xmail.io')[0]).toContain('0xmail.io');
  });

  it('every page getter returns a non-empty deduped keyword list', () => {
    const getters = [
      getHomePageKeywords(),
      getAboutPageKeywords('0xmail.io'),
      getDocumentationKeywords(),
      getUserPageKeywords(),
      getDeveloperPageKeywords(),
      getWeb3ProjectsKeywords(),
      getSubscriptionKeywords(),
      getContactKeywords('0xmail.io'),
    ];
    for (const kw of getters) {
      expect(kw.length).toBeGreaterThan(0);
      expect(new Set(kw).size).toBe(kw.length); // deduped
      expect(kw).toEqual(expect.arrayContaining([BASE_KEYWORDS[0]]));
    }
  });
});

describe('structured-data factories', () => {
  it('createBaseOrganization', () => {
    const org = createBaseOrganization('0xmail.io');
    expect(org['@type']).toBe('Organization');
    expect(org.url).toBe('https://0xmail.io');
  });

  it('factories build valid schema.org objects and honor overrides', () => {
    const app = createSoftwareApplicationData('0xmail.io', { applicationCategory: 'Email' });
    expect(app['@type']).toBe('SoftwareApplication');
    expect(app.applicationCategory).toBe('Email');

    expect(createWebPageData('0xmail.io')['@type']).toBe('WebPage');
    expect(createWebPageData('0xmail.io', { name: 'Custom' }).name).toBe('Custom');

    const about = createAboutPageData('0xmail.io');
    expect(about['@type']).toBe('AboutPage');
    expect(about.mainEntity?.['@id']).toContain('0xmail.io');

    const article = createTechArticleData('0xmail.io', { headline: 'H' });
    expect(article['@type']).toBe('TechArticle');
    expect(article.headline).toBe('H');
  });
});

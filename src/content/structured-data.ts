interface Organization {
  '@type': 'Organization';
  name: string;
  url?: string;
  contactPoint?: {
    '@type': 'ContactPoint';
    contactType: string;
    email?: string;
  };
}

interface BaseStructuredData {
  '@context': 'https://schema.org';
  name: string;
  description: string;
  url: string;
}

interface SoftwareApplicationData extends BaseStructuredData {
  '@type': 'SoftwareApplication';
  applicationCategory?: string;
  operatingSystem?: string;
  programmingLanguage?: string[];
  offers?: {
    '@type': 'Offer';
    price: string;
    priceCurrency: string;
    availability?: string;
  };
  aggregateRating?: {
    '@type': 'AggregateRating';
    ratingValue: string;
    ratingCount: string;
    bestRating: string;
    worstRating: string;
  };
  features?: string[];
  author?: Organization;
}

interface WebPageData extends BaseStructuredData {
  '@type': 'WebPage';
  mainEntity?: {
    '@type': 'Product' | 'SoftwareApplication';
    name: string;
    description: string;
    category?: string;
    applicationCategory?: string;
    operatingSystem?: string;
    programmingLanguage?: string[];
    offers?: {
      '@type': 'Offer';
      price: string;
      priceCurrency: string;
    };
  };
}

interface AboutPageData extends BaseStructuredData {
  '@type': 'AboutPage';
  mainEntity?: Organization & {
    '@id': string;
    foundingDate?: string;
  };
}

interface TechArticleData extends BaseStructuredData {
  '@type': 'TechArticle';
  headline: string;
  author?: Organization;
  datePublished?: string;
  dateModified?: string;
  publisher?: Organization;
}

export type StructuredData =
  | SoftwareApplicationData
  | WebPageData
  | AboutPageData
  | TechArticleData;

// Common organization data factory
export const createBaseOrganization = (emailDomain: string): Organization => ({
  '@type': 'Organization',
  name: emailDomain,
  url: `https://${emailDomain}`,
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer service',
    email: 'support@sudobility.com',
  },
});

// Factory functions for common structured data patterns
export const createSoftwareApplicationData = (
  emailDomain: string,
  overrides: Partial<SoftwareApplicationData> = {}
): SoftwareApplicationData => ({
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: emailDomain,
  description:
    'Web3 email platform connecting wallets to email addresses with ENS/SNS domain support and smart contract integration',
  url: `https://${emailDomain}`,
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
    availability: 'https://schema.org/InStock',
  },
  author: createBaseOrganization(emailDomain),
  ...overrides,
});

export const createWebPageData = (
  emailDomain: string,
  overrides: Partial<WebPageData> = {}
): WebPageData => ({
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: emailDomain,
  description: 'Web3 email platform connecting wallets to email addresses',
  url: `https://${emailDomain}`,
  ...overrides,
});

export const createAboutPageData = (
  emailDomain: string,
  overrides: Partial<AboutPageData> = {}
): AboutPageData => ({
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  name: `About ${emailDomain}`,
  description:
    `Learn about the team behind ${emailDomain}, the revolutionary Web3 email platform that connects wallets to email addresses without passwords.`,
  url: `https://${emailDomain}/about`,
  mainEntity: {
    ...createBaseOrganization(emailDomain),
    '@id': `https://${emailDomain}/#organization`,
    foundingDate: '2024',
  },
  ...overrides,
});

export const createTechArticleData = (
  emailDomain: string,
  overrides: Partial<TechArticleData> = {}
): TechArticleData => ({
  '@context': 'https://schema.org',
  '@type': 'TechArticle',
  name: 'Documentation',
  headline: `${emailDomain} Documentation - Web3 Email Platform Guide`,
  description:
    `Complete documentation for ${emailDomain} Web3 email platform. Learn how to connect wallets, manage ENS/SNS domain emails, integrate smart contracts, and use Web3 communication features.`,
  url: `https://${emailDomain}/document`,
  datePublished: '2025-01-12',
  dateModified: '2025-01-12',
  author: createBaseOrganization(emailDomain),
  publisher: createBaseOrganization(emailDomain),
  ...overrides,
});

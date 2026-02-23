/**
 * @fileoverview SEO keyword sets and page-specific keyword combinators.
 *
 * Provides curated keyword arrays for different audience segments and page types.
 * Use the page-specific getters (e.g., `getHomePageKeywords()`) to combine
 * relevant keyword sets for meta tags and structured data.
 */

/** Core Web3 email platform keywords */
export const BASE_KEYWORDS = [
  'Web3 email platform',
  'wallet email',
  'ENS email',
  'SNS email',
  'smart contract integration',
  'decentralized email',
  'blockchain messaging',
  'crypto email',
  'Web3 communication',
  'secure email',
];

/** Keywords targeting end users of the platform */
export const USER_FOCUSED_KEYWORDS = [
  'Web3 email for users',
  'wallet email address',
  'passwordless email',
  'secure Web3 communication',
  'ENS domain email',
  'SNS domain email',
  'crypto wallet email',
  'Web2 Web3 bridge',
  'decentralized identity',
  'blockchain email',
];

/** Keywords targeting developers and API consumers */
export const DEVELOPER_KEYWORDS = [
  'Web3 email API',
  'smart contract email integration',
  'blockchain developer tools',
  'Web3 SDK',
  'decentralized messaging API',
  'smart contract notifications',
  'Web3 developer platform',
  'blockchain email service',
  'crypto developer tools',
  'Web3 infrastructure',
];

/** Keywords for documentation and tutorial pages */
export const DOCUMENTATION_KEYWORDS = [
  'Web3 email documentation',
  'wallet email guide',
  'ENS email setup',
  'SNS email integration',
  'smart contract email API',
  'Web3 communication docs',
  'blockchain email tutorial',
  'crypto wallet email',
  'decentralized email guide',
  'Web3 developer documentation',
];

/**
 * Generate company-specific keywords for About/Contact pages.
 *
 * @param emailDomain - The company's email domain (e.g., '0xmail.io')
 * @returns Array of company-specific keyword strings
 */
export const createCompanyKeywords = (emailDomain: string): string[] => [
  `about ${emailDomain}`,
  'Web3 email team',
  'blockchain email company',
  'crypto email platform',
  'decentralized email team',
  'wallet email founders',
  'Web3 communication team',
  'blockchain messaging company',
  'ENS email team',
  'crypto startup team',
];

/** Trending Web3 ecosystem keywords for broader SEO reach */
export const WEB3_TRENDING_KEYWORDS = [
  'DeFi email notifications',
  'DAO communication platform',
  'NFT email alerts',
  'crypto airdrop notifications',
  'Web3 social platform',
  'blockchain KYC email',
  'DeFi yield farming alerts',
  'GameFi notification system',
  'Layer 2 email integration',
  'cross-chain messaging protocol',
  'multichain email support',
  'decentralized identity verification',
  'Web3 reputation system',
  'crypto compliance email',
];

/** Technical and protocol-level SEO keywords */
export const TECHNICAL_SEO_KEYWORDS = [
  'EIP-712 signature authentication',
  'SIWE Sign-In with Ethereum',
  'multi-signature wallet email',
  'hardware wallet email support',
  'Web3 API integration',
  'smart contract event notifications',
  'IPFS email storage',
  'ENS subdomain email routing',
  'Chainlink oracle integration',
  'Web3 SDK documentation',
  'blockchain webhook notifications',
  'crypto API endpoints',
  'decentralized email protocol',
  'Web3 developer tools',
];

/** Accessibility-focused keywords for inclusive design messaging */
export const ACCESSIBILITY_KEYWORDS = [
  'accessible Web3 email',
  'screen reader crypto wallet',
  'Web3 accessibility features',
  'inclusive blockchain platform',
  'accessible wallet integration',
  'Web3 WCAG compliance',
  'keyboard navigation Web3',
  'voice control crypto email',
  'high contrast Web3 interface',
  'accessible blockchain tools',
];

/**
 * Combine multiple keyword sets into a deduplicated array.
 *
 * @param keywordSets - One or more keyword arrays to merge
 * @returns Deduplicated array of keyword strings
 */
export const combineKeywords = (...keywordSets: string[][]): string[] => {
  const combined = new Set<string>();
  keywordSets.forEach((set) => set.forEach((keyword) => combined.add(keyword)));
  return Array.from(combined);
};

// Page-specific keyword getters

/** @returns Keywords optimized for the home/landing page */
export const getHomePageKeywords = () =>
  combineKeywords(BASE_KEYWORDS, USER_FOCUSED_KEYWORDS, WEB3_TRENDING_KEYWORDS);

/**
 * @param emailDomain - Company email domain for brand keywords
 * @returns Keywords optimized for the about page
 */
export const getAboutPageKeywords = (emailDomain: string) =>
  combineKeywords(BASE_KEYWORDS, createCompanyKeywords(emailDomain));

/** @returns Keywords optimized for documentation pages */
export const getDocumentationKeywords = () =>
  combineKeywords(BASE_KEYWORDS, DOCUMENTATION_KEYWORDS, TECHNICAL_SEO_KEYWORDS);

/** @returns Keywords optimized for user-facing pages */
export const getUserPageKeywords = () =>
  combineKeywords(BASE_KEYWORDS, USER_FOCUSED_KEYWORDS, ACCESSIBILITY_KEYWORDS);

/** @returns Keywords optimized for developer-facing pages */
export const getDeveloperPageKeywords = () =>
  combineKeywords(BASE_KEYWORDS, DEVELOPER_KEYWORDS, TECHNICAL_SEO_KEYWORDS);

/** @returns Keywords optimized for Web3 project listing pages */
export const getWeb3ProjectsKeywords = () =>
  combineKeywords(BASE_KEYWORDS, DEVELOPER_KEYWORDS, WEB3_TRENDING_KEYWORDS);

/** @returns Keywords optimized for subscription/pricing pages */
export const getSubscriptionKeywords = () =>
  combineKeywords(BASE_KEYWORDS, WEB3_TRENDING_KEYWORDS, TECHNICAL_SEO_KEYWORDS);

/**
 * @param emailDomain - Company email domain for brand keywords
 * @returns Keywords optimized for the contact page
 */
export const getContactKeywords = (emailDomain: string) =>
  combineKeywords(BASE_KEYWORDS, createCompanyKeywords(emailDomain), ACCESSIBILITY_KEYWORDS);

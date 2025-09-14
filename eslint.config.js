import js from '@eslint/js';
import tseslint from '@typescript-eslint/eslint-plugin';
import tsparser from '@typescript-eslint/parser';

export default [
  // Base configuration for all files
  {
    files: ['**/*.{js,ts}'],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      parser: tsparser,
    },
    plugins: {
      '@typescript-eslint': tseslint,
    },
    rules: {
      // Base ESLint rules
      ...js.configs.recommended.rules,
      
      // TypeScript-specific rules
      '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
      '@typescript-eslint/no-explicit-any': 'warn',
      
      // Code quality rules
      'prefer-const': 'error',
      'no-var': 'error',
      'object-shorthand': 'error',
      'prefer-template': 'error',
      'prefer-arrow-callback': 'error',
      
      // Disabled base rules (handled by TypeScript)
      'no-undef': 'off',
      'no-unused-vars': 'off',
    },
  },
  
  // Test files configuration
  {
    files: ['**/*.test.{js,ts}', '**/__tests__/**/*.{js,ts}'],
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
    },
  },
  
  // Ignore patterns
  {
    ignores: [
      'dist/**',
      'coverage/**',
      '*.config.{js,ts}',
      'node_modules/**',
    ],
  },
];
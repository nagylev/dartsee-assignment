// @ts-check
import eslint from '@eslint/js';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import globals from 'globals';
import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import tseslint from 'typescript-eslint';

const rootDir = dirname(fileURLToPath(import.meta.url));
/** @type {import('eslint').Linter.Config['rules']} */

const sharedRules = {
  '@typescript-eslint/no-explicit-any': 'off',
  '@typescript-eslint/no-floating-promises': 'warn',
  '@typescript-eslint/no-unsafe-argument': 'warn',
  'simple-import-sort/imports': 'error',
  'simple-import-sort/exports': 'error',
  'no-console': ['error', { allow: ['warn', 'error'] }],
  curly: ['error', 'all'],
  camelcase: ['error', { properties: 'never' }],
  'prefer-const': 'error',
  yoda: ['error', 'never'],
  semi: ['error', 'always'],
  'max-lines': [
    'error',
    { max: 300, skipBlankLines: true, skipComments: true },
  ],
};

export default tseslint.config(
  {
    ignores: ['**/node_modules/**', '**/dist/**', '**/generated-api/**'],
  },
  eslint.configs.recommended,
  eslintPluginPrettierRecommended,
  {
    files: ['packages/backend/{src,apps,libs,test}/**/*.ts'],
    extends: [...tseslint.configs.recommendedTypeChecked],
    plugins: {
      'simple-import-sort': simpleImportSort,
    },
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.jest,
      },
      sourceType: 'commonjs',
      parserOptions: {
        projectService: true,
        tsconfigRootDir: rootDir,
      },
    },
    rules: sharedRules,
  },
  {
    files: ['packages/frontend/**/*.{ts,tsx}'],
    extends: [
      ...tseslint.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    plugins: {
      'simple-import-sort': simpleImportSort,
    },
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        projectService: true,
        tsconfigRootDir: rootDir,
      },
    },
    rules: sharedRules,
  },
);

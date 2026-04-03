import { defineConfig, globalIgnores } from 'eslint/config';
import base from './packages/lint-config/eslint/base.mjs';
import uniappVue from './packages/lint-config/eslint/uniapp-vue.mjs';
import nest from './packages/lint-config/eslint/nest.mjs';
import adminVue from './packages/lint-config/eslint/admin-vue.mjs';

export default defineConfig([
  globalIgnores([
    '**/node_modules/**',
    '**/dist/**',
    '**/build/**',
    '**/coverage/**',
    '**/.turbo/**',
    '**/.git/**',
    'apps/mobile-uniapp/unpackage/**',
    '**/*.min.*',
    '**/*.png',
    '**/*.jpg',
    '**/*.jpeg',
    '**/*.svg',
    '**/*.webp',
    '**/*.ico'
  ]),
  ...base,
  ...uniappVue,
  ...nest,
  ...adminVue,
  {
    files: [
      '*.config.{js,cjs,mjs,ts}',
      '*.config.*',
      'packages/**/*.{js,mjs,cjs,ts}',
      '.husky/**/*'
    ],
    rules: {
      '@typescript-eslint/no-require-imports': 'off'
    }
  }
]);

export default {
  extends: ['stylelint-config-standard-scss', 'stylelint-config-recommended'],
  ignoreFiles: [
    '**/node_modules/**',
    '**/dist/**',
    '**/build/**',
    '**/coverage/**',
    '**/.turbo/**',
    'apps/mobile-uniapp/unpackage/**'
  ],
  rules: {
    'import-notation': null,
    'no-empty-source': null,
    'no-descending-specificity': null,
    'font-family-no-duplicate-names': null,
    'function-url-quotes': 'always',
    'declaration-no-important': null,
    'selector-class-pattern': '^[a-z][a-zA-Z0-9]*(?:-[a-zA-Z0-9]+)*(?:--[a-zA-Z0-9]+)*$',
    'selector-id-pattern': '^[a-z][a-zA-Z0-9-]*$',
    'value-keyword-case': ['lower', { ignoreProperties: [/^(font|font-family)$/] }]
  },
  overrides: []
};

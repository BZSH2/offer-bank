const utilityAtRules = ['use', 'forward', 'mixin', 'include', 'extend', 'at-root'];
const vuePseudoClasses = ['deep', 'global', 'slotted'];

export default {
  overrides: [
    {
      files: ['apps/**/*.{css}'],
      rules: {
        'at-rule-no-unknown': [true, { ignoreAtRules: utilityAtRules }],
        'scss/at-rule-no-unknown': null
      }
    },
    {
      files: ['apps/**/*.{scss}'],
      customSyntax: 'postcss-scss',
      rules: {
        'at-rule-no-unknown': null,
        'scss/at-rule-no-unknown': [true, { ignoreAtRules: utilityAtRules }]
      }
    },
    {
      files: ['apps/**/*.{vue}'],
      customSyntax: 'postcss-html',
      rules: {
        'at-rule-no-unknown': null,
        'selector-pseudo-class-no-unknown': [
          true,
          {
            ignorePseudoClasses: vuePseudoClasses
          }
        ]
      }
    }
  ]
};

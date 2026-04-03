import base from './packages/lint-config/stylelint/base.mjs';
import vue from './packages/lint-config/stylelint/vue.mjs';

export default {
  ...base,
  overrides: [...base.overrides, ...vue.overrides],
};

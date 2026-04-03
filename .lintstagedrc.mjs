export default {
  '*.{js,mjs,cjs,ts,mts,cts,vue}': ['eslint --fix --max-warnings=0', 'prettier --write'],
  '*.{css,scss}': ['stylelint --fix --allow-empty-input', 'prettier --write'],
  '*.{json,md,mdx,yml,yaml}': ['prettier --write'],
};

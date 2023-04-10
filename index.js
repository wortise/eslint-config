module.exports = {

  extends: [
    'eslint-config-airbnb-base',
    './rules/best-practices',
    './rules/node',
    './rules/style',
    './rules/functions',
    './rules/es6',
    './rules/imports'
  ].map(require.resolve),

  parserOptions: {
    ecmaVersion: 2020,
    sourceType:  'module'
  },

  rules: {}
};

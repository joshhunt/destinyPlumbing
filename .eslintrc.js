module.exports = {
  extends: ['prettier'],
  plugins: ['prettier'],
  env: {
    node: true,
    es6: true,
  },
  rules: {
    'no-undef': 'error',
    'prettier/prettier': ['error', { singleQuote: true, parser: 'flow' }],
  },
  parserOptions: {
    ecmaVersion: 2017,
  },
};

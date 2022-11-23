module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: 'airbnb-base',
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    'max-params': ['error', 3],
    'max-lines-per-function': ['error', 10],
    'max-depth': ['error', 2],
  },
};

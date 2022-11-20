module.exports = {
  env: {
    node: true,
    commonjs: true,
    jest: true,
  },
  parserOptions: {
    ecmaVersion: 2022,
  },
  extends: 'eslint:recommended',
  rules: {
    'max-depth': ['error', 2],
    'max-lines-per-function': ['error', 10],
  },
};


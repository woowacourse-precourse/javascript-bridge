module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: ['airbnb-base', 'plugin:prettier/recommended'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  qutoes: ['error', 'single'],
  rules: {
    'max-depth': ['error', 2],
    'max-lines-per-function': ['error', 10],

    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
        bracketSpacing: true,
        printWidth: 100,
        semi: true,
        trailingComma: 'all',
        tabWidth: 2,
      },
    ],
  },
};

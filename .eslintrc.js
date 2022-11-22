module.exports = {
  env: {
    node: true,
    commonjs: true,
  },
  extends: ['airbnb-base', 'plugin:prettier/recommended'],
  parserOptions: {
    ecmaVersion: '2022',
  },
  rules: {
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        parser: 'flow',
      },
    ],
    indent: ['error', 2],
    'max-depth': ['error', 2],
    'max-lines-per-function': ['error', 10],
    'max-params': ['error', 3],
    quotes: ['error', 'single'],
  },
  overrides: [
    {
      files: '__tests__/*',
      env: {
        jest: true,
      },
      rules: {
        'max-lines-per-function': ['error', 100],
      },
    },
  ],
};

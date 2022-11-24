module.exports = {
  env: {
    browser: true,
    es2022: true,
    node: true,
  },
  extends: ['eslint:recommended', 'airbnb-base', 'prettier'],
  plugins: ['prettier'],
  rules: {
    'import/prefer-default-export': 'off',
    'import/extensions': ['off'],
    'class-methods-use-this': 'off',
    'no-alert': 'off',
    'no-undef': 'off',
    'no-new': 'off',
    'max-lines-per-function': ['error', 12], // 함수(또는 메서드)의 길이가 10라인을 넘어가지 않도록 구현한다.
    'max-params': ['error', 3], // 메서드의 파라미터 개수는 최대 3개까지만 허용한다.
    'prefer-destructuring': 'off',
    'no-unused-expressions': 'off',
    'lines-between-class-members': 'off',
  },
  parserOptions: {
    ecmaVersion: 13,
  },
};

module.exports = {
  env: {
    node: true,
    commonjs: true,
    jest: true,
  },
  parserOptions: {
    ecmaVersion: 2022,
  },
  extends: ['airbnb', 'plugin:jsdoc/recommended'],
  rules: {
    'linebreak-style': ['error', 'windows'],

    // 우아한테크코스 프로그래밍 요구사항
    // https://github.com/solo5star/javascript-bridge#-%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%B0%8D-%EC%9A%94%EA%B5%AC-%EC%82%AC%ED%95%AD
    'no-process-exit': 'error',
    'max-depth': ['error', 2],

    // 우아한테크코스 프로그래밍 요구사항 - 추가된 요구사항
    // https://github.com/solo5star/javascript-bridge#%EC%B6%94%EA%B0%80%EB%90%9C-%EC%9A%94%EA%B5%AC-%EC%82%AC%ED%95%AD
    'max-lines-per-function': ['error', 10],
    'max-params': ['error', 3],

    // JSDoc과 관련된 오류 침묵
    'jsdoc/require-param-description': 'off',
    'jsdoc/require-returns-description': 'off',
    'jsdoc/require-yield': 'off',
  },
  overrides: [
    // 테스트 파일을 대상으로 일부 규칙 비활성화
    {
      files: ['__tests__/**/*.js'],
      rules: {
        'max-lines-per-function': 'off',
        'no-new': 'off',
      },
    },
  ],
};

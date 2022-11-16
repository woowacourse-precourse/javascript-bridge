const InputValidator = require('../src/utils/InputValidator');

describe('입력 유효성 검사 테스트', () => {
  test('빈 값 유효성 검증.', () => {
    const input = '';

    expect(() => {
      InputValidator.validateEmpty(input);
    }).toThrow('[ERROR]');
  });

  test('공백 포함 유효성 검증.', () => {
    const input = ' 1';

    expect(() => {
      InputValidator.validateSpace(input);
    }).toThrow('[ERROR]');
  });

  test('숫자 유효성 검증.', () => {
    const input = 'a';

    expect(() => {
      InputValidator.validateNumber(input);
    }).toThrow('[ERROR]');
  });
});

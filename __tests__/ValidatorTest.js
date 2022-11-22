const Validator = require('../src/Validator');

describe('사이즈 입력 값 유효성 테스트', () => {
  test('숫자 이외의 한글 문자를 입력한 경우 예외 처리한다.', () => {
    expect(() => {
      Validator.bridgeSize('김');
    }).toThrow('[ERROR]');
  });
  test('숫자 이외의 영어 문자를 입력한 경우 예외 처리한다.', () => {
    expect(() => {
      Validator.bridgeSize('r');
    }).toThrow('[ERROR]');
  });
  test('3미만인 숫자를 입력한 경우 예외 처리한다.', () => {
    expect(() => {
      Validator.bridgeSize(1);
    }).toThrow('[ERROR]');
  });
  test('20초과인 숫자를 입력한 경우 예외 처리한다.', () => {
    expect(() => {
      Validator.bridgeSize(21);
    }).toThrow('[ERROR]');
  });
  test('특수 문자를 입력한 경우 예외 처리한다.', () => {
    expect(() => {
      Validator.bridgeSize('@');
    }).toThrow('[ERROR]');
  });
});

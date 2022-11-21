const validator = require('../src/validator/validator');
const ERROR_MESSAGES = require('../src/constants/ErrorMessages');

describe('다리 길이 입력값 테스트', () => {
  // Bridge Length
  test('다리 길이 입력값 테스트 ( 문자 )', () => {
    expect(() => {
      validator.validateBridgeSize('a');
    }).toThrow(ERROR_MESSAGES.NAN);
  });

  test('다리 길이 입력값 테스트 ( 특수문자 )', () => {
    expect(() => {
      validator.validateBridgeSize('@');
    }).toThrow(ERROR_MESSAGES.NAN);
  });

  test('다리 길이 범위 테스트 1', () => {
    expect(() => {
      validator.validateBridgeSize('2');
    }).toThrow(ERROR_MESSAGES.SIZE);
  });

  test('다리 길이 범위 테스트 2', () => {
    expect(() => {
      validator.validateBridgeSize('21');
    }).toThrow(ERROR_MESSAGES.SIZE);
  });

  test('다리 길이 범위 테스트 3', () => {
    expect(() => {
      validator.validateBridgeSize('3');
    }).toBeTruthy();
  });
});

describe('사용자 이동 입력값 테스트', () => {
  test('사용자 이동 입력값 테스트 ( 문자 )', () => {
    expect(() => {
      validator.validateMove('a');
    }).toThrow(ERROR_MESSAGES.MOVING);
  });

  test('사용자 이동 입력값 테스트 ( 문자 )', () => {
    expect(() => {
      validator.validateMove('UD');
    }).toThrow(ERROR_MESSAGES.MOVING);
  });

  test('사용자 이동 입력값 테스트 ( 문자 )', () => {
    expect(() => {
      validator.validateMove('U');
    }).toBeTruthy();
  });
});

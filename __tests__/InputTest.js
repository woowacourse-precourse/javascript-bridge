const InputView = require('../src/InputView');
const ERROR_MESSAGES = require('../src/constants/ErrorMessages');

describe('다리 길이 입력값 테스트', () => {
  // Bridge Length
  test('다리 길이 입력값 테스트 ( 문자 )', () => {
    expect(() => {
      InputView.validateBridgeSize('a');
    }).toThrow(ERROR_MESSAGES.NAN);
  });

  test('다리 길이 입력값 테스트 ( 특수문자 )', () => {
    expect(() => {
      InputView.validateBridgeSize('@');
    }).toThrow(ERROR_MESSAGES.NAN);
  });

  test('다리 길이 범위 테스트 (*3 ~ 20)', () => {
    expect(() => {
      InputView.validateBridgeSize('2');
    }).toThrow(ERROR_MESSAGES.SIZE);
  });

  test('다리 길이 범위 테스트 (*3 ~ 20)', () => {
    expect(() => {
      InputView.validateBridgeSize('21');
    }).toThrow(ERROR_MESSAGES.SIZE);
  });

  test('다리 길이 범위 테스트 (*3 ~ 20)', () => {
    expect(() => {
      InputView.validateBridgeSize('3');
    }).toBeTruthy();
  });
});

describe('사용자 이동 입력값 테스트', () => {
  test('사용자 이동 입력값 테스트 ( 문자 )', () => {
    expect(() => {
      InputView.validateMoving('a');
    }).toThrow(ERROR_MESSAGES.MOVING);
  });

  test('사용자 이동 입력값 테스트 ( 문자 )', () => {
    expect(() => {
      InputView.validateMoving('UD');
    }).toThrow(ERROR_MESSAGES.MOVING);
  });

  test('사용자 이동 입력값 테스트 ( 문자 )', () => {
    expect(() => {
      InputView.validateMoving('U');
    }).toBeTruthy();
  });
});

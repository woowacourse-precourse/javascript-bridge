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

  test('다리 길이 범위 ( 2 )', () => {
    expect(() => {
      validator.validateBridgeSize('2');
    }).toThrow(ERROR_MESSAGES.SIZE);
  });

  test('다리 길이 범위 ( 21 )', () => {
    expect(() => {
      validator.validateBridgeSize('21');
    }).toThrow(ERROR_MESSAGES.SIZE);
  });

  test('다리 길이 범위 ( 3 )', () => {
    expect(() => {
      validator.validateBridgeSize('3');
    }).toBeTruthy();
  });
});

describe('사용자 이동 입력값 테스트', () => {
  test('사용자 이동 입력값  ( a )', () => {
    expect(() => validator.validateMove('a')).toThrow(ERROR_MESSAGES.MOVING);
  });

  test('사용자 이동 입력값  ( 2 )', () => {
    expect(() => validator.validateMove('2')).toThrow(ERROR_MESSAGES.MOVING);
  });

  test('사용자 이동 입력값  ( UD )', () => {
    expect(() => validator.validateMove('UD')).toThrow(ERROR_MESSAGES.MOVING);
  });

  test('사용자 이동 입력값  ( U )', () => {
    expect(() => validator.validateMove('U')).toBeTruthy();
  });

  test('사용자 이동 입력값  ( P )', () => {
    expect(() => validator.validateMove('P')).toBeTruthy();
  });
});

describe('재시도 입력값 테스트', () => {
  test('재시도 입력값 ( 2 )', () => {
    expect(() => validator.validateCommand('2')).toThrow(
      ERROR_MESSAGES.COMMAND
    );
  });

  test('재시도 입력값 ( RQ )', () => {
    expect(() => validator.validateCommand('RQ')).toThrow(
      ERROR_MESSAGES.COMMAND
    );
  });

  test('재시도 입력값 ( R )', () => {
    expect(() => validator.validateCommand('R')).toBeTruthy();
  });

  test('재시도 입력값 ( Q )', () => {
    expect(() => validator.validateCommand('Q')).toBeTruthy();
  });
});

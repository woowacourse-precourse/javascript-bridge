/* eslint max-lines-per-function: 0 */
const Validator = require('../src/Validator');

const ERROR_PREFIX = '[ERROR]';

describe('다리 길이 입력값 유효성 검사', () => {
  test.each([['삼'], ['three'], ['3s']])(
    '입력값이 숫자가 아니면 예외가 발생한다.',
    (bridgeSize) => {
      expect(() => {
        Validator.validateType(bridgeSize);
      }).toThrow(ERROR_PREFIX);
    }
  );

  test.each([['2'], ['-1'], ['21']])(
    '입력값이 3~20 사이의 범위를 벗어나면 예외가 발생한다.',
    (bridgeSize) => {
      expect(() => {
        Validator.validateRange(bridgeSize);
      }).toThrow(ERROR_PREFIX);
    }
  );

  test.each([['삼'], ['three'], ['3s'], ['2'], ['-1'], ['21']])(
    '입력값이 숫자가 아니거나 3~20 사이의 범위를 벗어나면 예외가 발생한다.',
    (bridgeSize) => {
      expect(() => {
        Validator.validateBridgeSize(bridgeSize);
      }).toThrow(ERROR_PREFIX);
    }
  );

  test.each([['3'], ['12'], ['20']])(
    '입력값이 3~20 사이의 숫자이면 예외가 발생하지 않는다.',
    (bridgeSize) => {
      expect(() => {
        Validator.validateBridgeSize(bridgeSize);
      }).not.toThrow();
    }
  );
});

describe('이동할 칸 (위: U, 아래: D) 입력값 유효성 검사', () => {
  test.each([['u'], ['d'], ['UD'], ['R']])(
    '입력값이 "U" 또는 "D" 중 한 알파벳이 아니면 예외가 발생한다.',
    (direction) => {
      expect(() => {
        Validator.validateDirection(direction);
      }).toThrow(ERROR_PREFIX);
    }
  );

  test.each([['U'], ['D']])(
    '입력값이 "U" 또는 "D" 중 한 알파벳이면 예외가 발생하지 않는다.',
    (direction) => {
      expect(() => {
        Validator.validateDirection(direction);
      }).not.toThrow();
    }
  );
});

describe('재시도 여부 (재시도: R, 종료: Q) 입력값 유효성 검사', () => {
  test.each([['r'], ['q'], ['RQ'], ['U']])(
    '입력값이 "R" 또는 "Q" 중 한 알파벳이 아니면 예외가 발생한다.',
    (command) => {
      expect(() => {
        Validator.validateGameCommand(command);
      }).toThrow(ERROR_PREFIX);
    }
  );

  test.each([['R'], ['Q']])(
    '입력값이 "R" 또는 "Q" 중 한 알파벳이면 예외가 발생하지 않는다.',
    (command) => {
      expect(() => {
        Validator.validateGameCommand(command);
      }).not.toThrow();
    }
  );
});

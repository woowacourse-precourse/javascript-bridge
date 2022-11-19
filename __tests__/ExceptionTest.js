/* eslint-disable max-lines-per-function */
const { ERROR_MESSAGE_HEADER } = require('../src/utils/Constant');
const Exception = require('../src/utils/Exception');
const Validator = require('../src/utils/Validator');

const runException = (validatorMethod, inputData) => {
  expect(() => validatorMethod(inputData)).toThrow(ERROR_MESSAGE_HEADER);
};

describe('사용자 입력 형식 예외 테스트', () => {
  test.each(['a', '', ' ', '에이', '.'])(
    '다리 길이가 숫자가 아니면 예외가 발생한다.',
    (bridgeLength) => {
      runException(Validator.bridgeSize, bridgeLength);
    },
  );

  test.each(['0', '2', '21'])(
    '다리 길이가 3부터 20 사이의 숫자가 아니면 예외가 발생한다.',
    (bridgeLength) => {
      runException(Validator.bridgeSize, bridgeLength);
    },
  );

  test.each(['a', 'A', ' ', '', 'u', 'd'])(
    '방향이 U 또는 D의 값이 아니면 예외가 발생한다.',
    (command) => {
      runException(Validator.direction, command);
    },
  );

  test.each(['abc', 'r', 'q', '1', ' '])(
    '게임 종료 후 입력값이 R 또는 Q의 값이 아니면 예외가 발생한다.',
    (command) => {
      runException(Validator.finalGame, command);
    },
  );

  test('예외가 발생하면 false를 반환한다.', () => {
    const bridgeLength = 'a';
    const result = Exception.isThrow(Validator.bridgeSize, bridgeLength);

    expect(result).toBeFalsy();
  });

  test('예외가 발생하지 않으면 true를 반환한다.', () => {
    const bridgeLength = '4';
    const result = Exception.isThrow(Validator.bridgeSize, bridgeLength);

    expect(result).toBeTruthy();
  });
});

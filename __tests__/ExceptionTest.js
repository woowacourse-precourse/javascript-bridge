/* eslint-disable max-lines-per-function */
const Validator = require('../src/utils/Validator');

const runException = (validatorMethod, inputData) => {
  expect(() => validatorMethod(inputData)).toThrow();
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
});

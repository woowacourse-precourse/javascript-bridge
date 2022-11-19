/* eslint-disable max-lines-per-function */
const Validator = require('../src/utils/Validator');

describe('사용자 입력 형식 예외 테스트', () => {
  test.each(['a', '', ' ', '에이', '.'])(
    '다리 길이가 숫자가 아니면 예외가 발생한다.',
    (bridgeLength) => {
      expect(() => Validator.bridgeSize(bridgeLength)).toThrow();
    },
  );

  test.each(['0', '2', '21'])(
    '다리 길이가 3부터 20 사이의 숫자가 아니면 예외가 발생한다.',
    (bridgeLength) => {
      expect(() => Validator.bridgeSize(bridgeLength)).toThrow();
    },
  );
});

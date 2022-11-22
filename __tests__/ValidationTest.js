/* eslint-disable max-lines-per-function */
const {
  validate,
  isBridgeSize,
  isMovingInput,
  isCommandInput,
} = require('../src/utils/Validator');

describe('Validator 테스트', () => {
  test.each(['-1', '0', '3.3', '21', 'abc'])(
    '다리의 길이가 3부터 20 사이의 숫자가 아니면 예외 발생',
    (size) => {
      expect(() => {
        validate(size, isBridgeSize);
      }).toThrow('[ERROR]');
    },
  );

  test.each(['u', 'd', '0', 'abc'])(
    'U(위 칸)와 D(아래 칸) 중 하나의 문자가 아니면 예외 발생',
    (input) => {
      expect(() => {
        validate(input, isMovingInput);
      }).toThrow('[ERROR]');
    },
  );

  test.each(['r', 'q', '0', 'abc'])(
    'R(재시도)와 Q(종료) 중 하나의 문자가 아니면 예외 발생',
    (input) => {
      expect(() => {
        validate(input, isCommandInput);
      }).toThrow('[ERROR]');
    },
  );
});

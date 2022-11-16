const Validator = require('../src/Validator');

describe('예외처리 테스트', () => {
  test.each(['a', '하', '1,2,3', '', '   '])(
    '숫자가 아니라면 예외처리',
    (input) => {
      expect(() => Validator.validateIsNumber(input)).toThrow('[ERROR]');
    },
  );

  test.each([1, 21, -1, 2, -30])(
    '범위를 벗어나면 예외처리',
    (input) => {
      expect(() => Validator.validateInRange(3, 20, input)).toThrow('[ERROR]');
    },
  );
});

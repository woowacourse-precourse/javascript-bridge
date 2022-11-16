const Validator = require('../src/Validator');

describe('예외처리 테스트', () => {
  test.each(['a', '하', '1,2,3'])(
    '숫자가 아니라면 예외처리',
    (input) => {
      expect(Validator.validateIsNumber).toThrow();
    },
  );
});

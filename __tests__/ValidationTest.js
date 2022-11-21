const { validate, isCommandInput } = require('../src/Validator');

describe('Validator 테스트', () => {
  test.each(['r', 'q', '123'])(
    'R(재시도)와 Q(종료) 중 하나의 문자가 아니면 예외 발생',
    (input) => {
      expect(() => {
        validate(input, isCommandInput);
      }).toThrow('[ERROR]');
    },
  );
});

const MovingValidator = require('../src/validator/MovingValudator');

describe('이동할 칸 입력 테스트', () => {
  test.each([['Q'], ['UD'], [' '], ['UU'], ['u '], ['d']])(
    'U 혹은 D가 입력되는지 테스트',
    () => {
      expect((input) => {
        new MovingValidator(input).validate();
      }).toThrow('[ERROR]');
    }
  );
});

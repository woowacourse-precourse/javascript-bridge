const GameCommandValidator = require('../src/validator/GameCommandValidator');

describe('게임 커맨드 입력 테스트', () => {
  test.each([['D'], ['QD'], [' '], ['QR'], ['r '], ['q']])(
    'Q 혹은 R이 입력되는지 테스트',
    () => {
      expect((input) => {
        new GameCommandValidator(input).validate();
      }).toThrow('[ERROR]');
    }
  );
});

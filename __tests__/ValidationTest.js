const Validation = require('../src/utils/Validation');

describe('사용자 입력 예외 처리', () => {
  test.each([[2], [5.2], [21], ['U'], ['!'], ['ㄱ']])(
    '다리 길이 입력에 대한 예외 처리',
    (input) => {
      expect(() => {
        Validation.validateSize(input);
      }).toThrow('[ERROR]');
    },
  );

  test.each([[1], ['u'], ['d'], ['R'], ['ㄷ'], ['!']])(
    '다리 이동 입력에 대한 예외 처리',
    (input) => {
      expect(() => {
        Validation.validateMove(input);
      }).toThrow('[ERROR]');
    },
  );

  test.each([[1], ['r'], ['q'], ['U'], ['ㄷ'], ['!']])(
    '게임 재시도 및 종료 입력에 대한 예외 처리',
    (input) => {
      expect(() => {
        Validation.validateReGame(input);
      }).toThrow('[ERROR]');
    },
  );
});

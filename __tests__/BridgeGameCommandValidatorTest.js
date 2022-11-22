const BridgeGameCommandValidator = require('../src/validators/BridgeGameCommandValidator');

describe('사용자가 입력한 게임 명령의 유효성을 검사하는 객체 테스트', () => {
  test.each([['RR'], ['QQ'], ['A'], ['ABC'], ['']])(
    '유효하지 않은 게임 명령인 경우 예외 처리',
    () => {
      expect(input => BridgeGameCommandValidator.validate(input)).toThrow(
        '[ERROR]',
      );
    },
  );
});

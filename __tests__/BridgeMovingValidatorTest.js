const BridgeMovingValidator = require('../src/validators/BridgeMovingValidator');

describe('사용자가 입력한 이동할 칸의 유효성을 검사하는 객체 테스트', () => {
  test.each([['DD'], ['UU'], ['A'], ['ABC'], ['']])(
    '유효하지 않은 이동인 경우 예외 처리',
    () => {
      expect(input => BridgeMovingValidator.validate(input)).toThrow('[ERROR]');
    },
  );
});

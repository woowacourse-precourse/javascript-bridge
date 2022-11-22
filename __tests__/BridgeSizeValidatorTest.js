const BridgeSizeValidator = require('../src/validators/BridgeSizeValidator');

describe('사용자가 입력한 다리 길이의 유효성을 검사하는 객체 테스트', () => {
  test.each([['a'], ['abc'], ['a3'], ['2a']])(
    '다리 길이를 위한 입력값에 숫자가 아닌 문자가 포함된 경우 예외처리',
    () => {
      expect(input => BridgeSizeValidator.validate(input)).toThrow('[ERROR]');
    },
  );

  test.each([['21'], ['-1'], ['1'], ['2'], ['999']])(
    '유효한 다리 길이 범위 이외의 값인 경우 예외처리',
    () => {
      expect(input => BridgeSizeValidator.validate(input)).toThrow('[ERROR]');
    },
  );
});

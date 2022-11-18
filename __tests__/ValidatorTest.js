const Validator = require('../src/Validator');

describe('유효성 검사 테스트', () => {
  test.each(['a', -1, 2, 21])(
    '다리 길이가 3 이상 20 이하가 아닐 경우 예외가 발생한다.',
    (input) => {
      expect(() => {
        Validator.validateBridgeLength(input);
      }).toThrow('[ERROR]');
    }
  );
  test.each(['UU', 'DD', 'u', 'd', 'A', 1])(
    '이동할 칸이 U 나 D 가 아닌 경우 예외가 발생한다.',
    (input) => {
      expect(() => {
        Validator.validateSpace(input);
      }).toThrow('[ERROR]');
    }
  );
  test.each(['QQ', 'RR', 'q', 'r', 'A', 1])(
    '재시도 여부 커맨드가 Q 나 R 이 아닌 경우 예외가 발생한다.',
    (input) => {
      expect(() => {
        Validator.validateCommand(input);
      }).toThrow('[ERROR]');
    }
  );
});

const {
  validateBridgeLength,
  validateMovingValue,
  validateEndValue
} = require('../src/Validation');

describe('사용자 입력 예외 테스트', () => {
  test('다리 길이 범위는 3이상 ~ 20 이하의 숫자여야 한다.', () => {
    expect(() => {
      validateBridgeLength(2);
    }).toThrow('[ERROR]');
  });

  const moveCommands = ['d', 'u', 'abc', 3];
  const retryCommands = ['r', 'q', 'abc', 1];

  test('라운드마다 요구되는 이동 입력은 대문자 "U", 대문자 "D" 중 하나의 문자여야 한다.', () => {
    moveCommands.forEach(cmd => {
      expect(() => {
        validateMovingValue(cmd);
      }).toThrow('[ERROR]');
    });
  });

  test('게임 재시작 및 종료 여부 입력은 대문자 "R"(재시작)과 대문자 "Q"(종료) 중 하나의 문자여야 한다.', () => {
    retryCommands.forEach(cmd => {
      expect(() => {
        validateEndValue(cmd);
      }).toThrow('[ERROR]');
    });
  });
});

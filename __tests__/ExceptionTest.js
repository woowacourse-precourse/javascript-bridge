const Exception = require('../src/Exception');

describe('예외 클래스 테스트', () => {
  test('다리 길이 입력 값이 3~20 사이의 숫자가 아닌 경우 예외가 발생한다', () => {
    const exception = new Exception();
    const INPUTS = ['two', 'abc', 48, 32, 0, -100];

    INPUTS.forEach((input) => {
      expect(() => {
        exception.validateBridgeSize(input);
      }).toThrow('[ERROR]');
    });
  });

  test('이동 값이 "U", "D"가 아닌 문자인 경우 예외가 발생한다', () => {
    const exception = new Exception();
    const INPUTS = ['two', 2, 'u', 'd', 'A'];

    INPUTS.forEach((input) => {
      expect(() => {
        exception.validateMove(input);
      }).toThrow('[ERROR]');
    });
  });

  test('재시작/종료 값이 "R", "Q"가 아닌 문자인 경우 예외가 발생한다', () => {
    const exception = new Exception();
    const INPUTS = ['two', 2, 'U', 'D', 'r', 'q'];

    INPUTS.forEach((input) => {
      expect(() => {
        exception.validateRestartInput(input);
      }).toThrow('[ERROR]');
    });
  });
});

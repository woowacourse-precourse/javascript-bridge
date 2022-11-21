const InputView = require('../src/InputView');

describe('InputView 클래스 테스트', () => {
  test('다리 길이 입력에 예외가 발생하지 않으면 숫자로 반환', () => {
    expect(InputView.parseBridgeSize('3')).toBe(3);
  });

  test('공백(스페이스)가 있으면 예외 발생', () => {
    expect(() => InputView.parseBridgeSize('3 ')).toThrow('[ERROR]');
  });

  test('다리 길이 입력이 3 이상 20 이하의 숫자가 아니면 예외 발생', () => {
    expect(() => InputView.parseBridgeSize('2')).toThrow('[ERROR]');
  });

  test('다리 길이 입력이 3 이상 20 이하의 숫자가 아니면 예외 발생', () => {
    expect(() => InputView.parseBridgeSize('21')).toThrow('[ERROR]');
  });
});

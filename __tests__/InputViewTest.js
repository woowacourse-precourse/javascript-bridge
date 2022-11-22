const InputView = require('../src/view/InputView');

describe('사용자 입력 값 테스트', () => {
  test('다리 길이 확인', () => {
    expect(() => {
      InputView.validateBridgeSize(3);
    }).not.toThrow();
  });

  test.each([[2], ['*'], ['안녕']])('다리 길이가 3이상 20이하 숫자가 아닌 경우', (input) => {
    expect(() => {
      InputView.validateBridgeSize(input);
    }).toThrow('[ERROR]');
  });

  test('이동할 칸 확인', () => {
    expect(() => {
      InputView.validateMoving('D');
    }).not.toThrow();
  });

  test.each([['u'], [1], ['*'], ['안녕']])('이동할 칸이 "U" 또는 "D"가 아닌 경우', (input) => {
    expect(() => {
      InputView.validateMoving(input);
    }).toThrow('[ERROR]');
  });

  test('재시작/종료 확인', () => {
    expect(() => {
      InputView.validateGameCommand('R');
    }).not.toThrow();
  });

  test.each([['q'], [1], ['*'], ['안녕']])('"R" 또는 "Q"를 입력하지 않은 경우', (input) => {
    expect(() => {
      InputView.validateGameCommand(input);
    }).toThrow('[ERROR]');
  });
});

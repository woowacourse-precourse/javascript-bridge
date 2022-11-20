const InputView = require('../src/Views/InputView');

describe('예외처리 테스트', () => {
  test.each(['1a', '8e8', 'a'])('숫자가 아닌 입력값 테스트', (input) => {
    expect(() => {
      InputView.validateBridgeSize(input);
    }).toThrow('[ERROR]');
  });

  test('숫자 범위 예외 테스트', () => {
    const size = '2';
    expect(() => {
      InputView.validateBridgeSize(size);
    }).toThrow('[ERROR]');
  });
});

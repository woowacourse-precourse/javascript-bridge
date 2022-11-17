const errorMessage = require('../src/constants/errorMessage');
const InputView = require('../src/views/InputView');

describe('사용자의 입력 테스트', () => {
  test.each([['.'], ['a'], ['+']])('다리 길이 입력이 숫자가 아닐 경우 예외 발생', (input) => {
    expect(() => {
      InputView.validateBridgeSize(input);
    }).toThrow(errorMessage.NOT_NUMBER);
  });
});

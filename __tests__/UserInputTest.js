const errorMessage = require('../src/constants/errorMessage');
const InputView = require('../src/views/InputView');

describe('사용자의 입력 테스트', () => {
  test.each([['.'], ['a'], ['+']])('다리 길이 입력이 숫자가 아닐 경우 예외 발생', (input) => {
    expect(() => {
      InputView.validateBridgeSize(input);
    }).toThrow(errorMessage.NOT_NUMBER);
  });

  test.each([['-1'], ['2'], ['30']])('다리 길이 입력이 정해진 범위가 아닐 경우 예외 발생', (input) => {
    expect(() => {
      InputView.validateBridgeSize(input);
    }).toThrow(errorMessage.OUT_RANGE_NUMBER);
  });

  test.each([['+'], ['u'], ['d']])("이동할 칸의 입력이 'U' 또는 'D'가 아닐 경우 예외 발생" , (input) => {
    expect(() => {
      InputView.validateMovingDirection(input);
    }).toThrow(errorMessage.MOVE_DIRECTION);
  });
});

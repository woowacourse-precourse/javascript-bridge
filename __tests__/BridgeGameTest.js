const { Console } = require("@woowacourse/mission-utils");
const BridgeGame = require("../src/BridgeGame");

afterEach(() => {
  Console.close();
});

describe('BridgeGame 클래스의 stackOfUserMovingInput() 메서드 테스트', () => {
  test('this.userInput 멤버변수에 쌓아줄 입력값이 잘 들어가는지 확인', () => {
    const bridge = new BridgeGame();
    const userInput = 'D';
    bridge.stackOfUserMovingInput(userInput);
    const result = 'D';
    expect(...bridge.userInput).toContain(result);
  });
});

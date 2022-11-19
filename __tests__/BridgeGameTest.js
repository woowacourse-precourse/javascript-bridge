const { Console } = require("@woowacourse/mission-utils");
const BridgeGame = require("../src/BridgeGame");

afterEach(() => {
  Console.close();
});

describe('BridgeGame 클래스의 setBeginningMapToUserInput() 메서드 테스트', () => {
  test('생성된 password의 첫번째 다리정답이 userinput 배열에 들어가는지 확인', () => {
    const bridge = new BridgeGame(3);
    bridge.setBeginningMapToUserInput();
    const result = ['U', 'D'];
    const beginningUserInput = bridge.userInput;
    expect(result).toContain(...beginningUserInput);
  });
});

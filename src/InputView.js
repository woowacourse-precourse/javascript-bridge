const MissionUtils = require("@woowacourse/mission-utils");
const Console = MissionUtils.Console;
const BridgeMaker = require("./BridgeMaker");
const BridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator");
const BridgeGame = require("./BridgeGame");

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const game = new BridgeGame();
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize() {
    Console.readLine('다리의 길이를 입력해주세요.', (bridgeLen) => {
      console.log(`다리 길이 : ${bridgeLen}`);

      const bridge = BridgeMaker.makeBridge(bridgeLen, BridgeRandomNumberGenerator.generate); // 이거 찾아보자.
      this.readMoving(bridge);
    })
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving(bridge) {
    Console.readLine('이동할 칸을 선택해주세요. (위: U, 아래: D)', (index) => {
      console.log(`이동할 칸 : ${index}`);
      game.move(bridge, index); // class
    })
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {},
};

module.exports = InputView;

const { Console } = require("@woowacourse/mission-utils");
const BridgeMaker = require("./BridgeMaker");
const BridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator");
const BridgeGame = require("./BridgeGame");
const bridgeGame = new BridgeGame();
const OutputView = require("./OutputView");

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  readBridgeSize() {
    Console.readLine("다리의 길이를 입력해주세요.", (answer) => {
      const bridge = BridgeMaker.makeBridge(
        answer,
        BridgeRandomNumberGenerator.generate
      );
      InputView.readMoving(bridge);
    });
  },

  readMoving(bridge) {
    console.log(bridge);
    Console.readLine(
      "이동할 칸을 선택해주세요. (위: U, 아래: D).",
      (answer) => {
        const map = bridgeGame.move(answer, bridge);
        if (map[map.length - 1].result === "O") {
          OutputView.printMap(map);
          InputView.readMoving(bridge);
        } else {
          OutputView.printMap(map);
        }
      }
    );
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {},
};

module.exports = InputView;

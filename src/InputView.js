const MissionUtils = require("@woowacourse/mission-utils");
const BridgeGame = require("./BridgeGame");
const BridgeMaker = require("./BridgeMaker");
const BridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator");
const OutputView = require("./OutputView");
/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize() {
    MissionUtils.Console.readLine(
      "\n다리의 길이를 입력해주세요.\n",
      (answer) => {
        const bridge = BridgeMaker.makeBridge(
          answer,
          BridgeRandomNumberGenerator.generate
        );
        const bridgeGame = new BridgeGame();
        this.readMoving(bridgeGame, bridge);
      }
    );
  },
  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving(bridgeGame, bridge) {
    MissionUtils.Console.readLine(
      "\n이동할 칸을 선택해주세요. (위: U, 아래: D)\n",
      (choice) => {
        bridgeGame.move(choice, bridge);
        OutputView.printMap(bridgeGame.choices, bridge, bridgeGame);
      }
    );
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand(bridge) {
    MissionUtils.Console.readLine(
      "\n게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n",
      (answer) => {}
    );
  },
};

module.exports = InputView;

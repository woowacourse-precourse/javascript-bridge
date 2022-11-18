const MissionUtils = require("@woowacourse/mission-utils");
const BridgeGame = require("./BridgeGame");
const BridgeMaker = require("./BridgeMaker");
const BridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator");
const OutputView = require("./OutputView");
const Console = MissionUtils.Console;

const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
   readBridgeSize() {
    Console.readLine("\n다리의 길이를 입력해주세요.\n", (inputBridgeSize) => {
      bridge = BridgeMaker.makeBridge(inputBridgeSize, BridgeRandomNumberGenerator.generate);
      InputView.readMoving(bridge, 0);
      // Console.close();
      return bridge;
    });
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving(bridge, turnNumber) {
    const brgGame = new BridgeGame();
    Console.readLine("\n이동할 칸을 선택해주세요. (위: U, 아래: D)\n", (inputMoveUpDown) => {
      bridge = brgGame.move(turnNumber, bridge, inputMoveUpDown);
      if (bridge.length > 0) this.readMoving(bridge, turnNumber + 1);
      else Console.close();
    })
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {
    Console.readLine("\n게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n", (inputRetry) => {
      if (inputRetry == "R") return 0;
      if (inputRetry == "Q") OutputView.printResult();
      Console.close();
    })
    return 1;
  },
};

module.exports = InputView;

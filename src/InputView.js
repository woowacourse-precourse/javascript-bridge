const MissionUtils = require("@woowacourse/mission-utils");
const BridgeGame = require("./BridgeGame");
const BridgeMaker = require("./BridgeMaker");
const BridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator");
const Console = MissionUtils.Console;

const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize() {
    Console.readLine("\n다리의 길이를 입력해주세요.\n", (inputBridgeSize) => {
      let bridge = BridgeMaker.makeBridge(inputBridgeSize, BridgeRandomNumberGenerator.generate);
      Console.close();
      return bridge;
    });
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving(bridge) {
    Console.readLine("\n이동할 칸을 선택해주세요. (위: U, 아래: D)\n", (inputMoveUpDown) => {
      BridgeGame.move(bridge, inputMoveUpDown);
      Console.close();
    })
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {
    Console.readLine("\n게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n", (inputRetry) => {
      //
      Console.close();
    })
  },
};

module.exports = InputView;

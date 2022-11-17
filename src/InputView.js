const { Console } = require("@woowacourse/mission-utils");
const Validation = require("./Validation");
const { INPUT_MESSAGE } = require("./utils/constans");

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize(makeBridge) {
    Console.readLine(INPUT_MESSAGE.BRIDGE_SIZE, (bridgeSize) => {
      try {
        Validation.bridgeSize(Number(bridgeSize));
        makeBridge(Number(bridgeSize));
      } catch {
        this.readBridgeSize(makeBridge);
      }
    });
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving(playerMove) {
    Console.readLine(INPUT_MESSAGE.MOVING_COMMAND, (movingCommand) => {
      try {
        Validation.movingCommand(movingCommand);
        playerMove(movingCommand);
      } catch {
        this.readMoving(playerMove);
      }
    });
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand(callback) {
    Console.readLine(INPUT_MESSAGE.GAME_COMMAND, callback);
  },
};

module.exports = InputView;

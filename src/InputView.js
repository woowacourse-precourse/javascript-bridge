const { Console } = require("@woowacourse/mission-utils");
const Validater = require("./Validater");
const { INPUT_MESSAGE } = require("./utils/constans");

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize(makeBridge) {
    Console.readLine(INPUT_MESSAGE.BRIDGE_SIZE, (inputBridgeSize) => {
      try {
        const bridgeSize = Number(inputBridgeSize);
        Validater.bridgeSize(bridgeSize);
        makeBridge(bridgeSize);
      } catch {
        this.readBridgeSize(makeBridge);
      }
    });
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving(callback) {
    Console.readLine(INPUT_MESSAGE.MOVING_COMMAND, callback);
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand(callback) {
    Console.readLine(INPUT_MESSAGE.GAME_COMMAND, callback);
  },
};

module.exports = InputView;

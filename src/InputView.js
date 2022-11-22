const { Console } = require("@woowacourse/mission-utils");
const BridgeGame = require("./BridgeGame");
const { CONSOLE_MESSAGE } = require("./constants/Message");
const Validator = require("./utils/Validation");

const InputView = {
  readBridgeSize(bridgeGame) {
    Console.readLine(CONSOLE_MESSAGE.INPUT_BRIDGE_LENGTH, (size) => {
      Validator.validateBridgeSize(size);
      bridgeGame.makeBridge(size);
      return this.readMoving();
    });
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving(bridgeGame) {
    Console.readLine(CONSOLE_MESSAGE.INPUT_MOVE, (direction) => {
      Validator.validateMove(direction);
    });
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {},
};

module.exports = InputView;

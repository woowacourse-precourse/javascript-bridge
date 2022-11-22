const { QUESTION } = require("../constants/message");
const BridgeLengthValidator = require("../utils/BridgeLengthValidator");
const { readLine } = require("../utils/utils");

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize(generateBridge) {
    readLine(QUESTION.BRIDGE_LENGTH, (bridgeSize) => {
      generateBridge(bridgeSize);
    });
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving(callBack) {
    readLine(QUESTION.DIRECTION_TO_MOVE, (beMovedDirection) => {
      callBack(beMovedDirection);
    });
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand(callback) {
    readLine(QUESTION.RESTART_OR_NOT, (RestartOrExit) => {
      callback(RestartOrExit);
    });
  },
};

module.exports = InputView;

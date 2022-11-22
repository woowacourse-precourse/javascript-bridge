const { Console } = require("@woowacourse/mission-utils");
const { INPUT_VIEW_CONSTANT } = require("../utils/constants");

const InputView = {
  readBridgeSize(bridgeSizeFunc) {
    Console.readLine(INPUT_VIEW_CONSTANT.BRIDGE_SIZE_MENT, bridgeSizeFunc);
  },

  readMoving(movingFunc) {
    Console.readLine(INPUT_VIEW_CONSTANT.MOVING_MENT, movingFunc);
  },

  readGameCommand(retryFunc) {
    Console.readLine(INPUT_VIEW_CONSTANT.RETRY_MENT, retryFunc);
  },
};

module.exports = InputView;

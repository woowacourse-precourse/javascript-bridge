const { Console } = require("@woowacourse/mission-utils");
const { INPUT_VIEW_CONSTANT } = require("../utils/constants");
const { validateReadBridgeSize, validateReadMoving, validateReadGameCommand } = require("./Validator");

const InputView = {
  readBridgeSize(callback) {
    Console.readLine(INPUT_VIEW_CONSTANT.BRIDGE_SIZE_MENT, (bridgeSize) => {
      if (!validateReadBridgeSize(bridgeSize)) {
        this.readBridgeSize(callback);
        return;
      }
      callback(bridgeSize);
    });
  },

  readMoving(callback) {
    Console.readLine(INPUT_VIEW_CONSTANT.MOVING_MENT, (moveKey) => {
      if (!validateReadMoving(moveKey)) {
        this.readMoving(callback);
        return;
      }
      callback(moveKey);
    });
  },

  readGameCommand(callback) {
    Console.readLine(INPUT_VIEW_CONSTANT.RETRY_MENT, (retryKey) => {
      if (!validateReadGameCommand(retryKey)) {
        this.readGameCommand(callback);
        return;
      }
      callback(retryKey);
    });
  },
};

module.exports = InputView;

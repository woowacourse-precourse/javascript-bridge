const { MOVE_STRING, INPUT_RETRY } = require("../constants");
const ERROR_MESSAGE = require("../constants/ErrorMessage");

class BridgeGameValidator {
  bridgeSizeValidate(bridgeSize) {
    this.isNaNValidate(bridgeSize);
    this.isIntegerValidate(bridgeSize);
    this.sizeValidate(bridgeSize);
  }

  movingValidate(moving) {
    if (moving !== MOVE_STRING.UP && moving !== MOVE_STRING.DOWN) {
      throw Error(ERROR_MESSAGE.INPUT_MOVING);
    }
  }

  retryValidate(retry) {
    if (retry !== INPUT_RETRY.RETRY && retry !== INPUT_RETRY.QUIT) {
      throw Error(ERROR_MESSAGE.INPUT_RETRY);
    }
  }

  sizeValidate(bridgeSize) {
    if (bridgeSize < 3 || bridgeSize > 20) {
      throw Error(ERROR_MESSAGE.BRIDGE_LENGTH);
    }
  }

  isNaNValidate(bridgeSize) {
    if (isNaN(bridgeSize)) {
      throw Error(ERROR_MESSAGE.BRIDGE_LENGTH);
    }
  }

  isIntegerValidate(bridgeSize) {
    if (!Number.isInteger(bridgeSize)) {
      throw Error(ERROR_MESSAGE.BRIDGE_LENGTH);
    }
  }
}

module.exports = BridgeGameValidator;

const { ERROR } = require('./Constants');

const Validation = {
  isValidBridgeSize(bridgeSize) {
    if (!bridgeSize) return;
    if (bridgeSize.match(/[^0-9]/g)) {
      throw new Error(ERROR.BRIDGE_SIZE_MUST_BE_NUMBER);
    }
    if (bridgeSize < 3 || bridgeSize > 20) {
      throw new Error(ERROR.BRIDGE_SIZE_MUST_BE_3_TO_20)
    }
  }
}

module.exports = Validation;
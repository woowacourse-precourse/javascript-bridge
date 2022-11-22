const ERROR_MESSAGE = require("../constants/ErrorMessage");

class BridgeGameValidator {
  bridgeSizeValidate(bridgeSize) {
    this.sizeValidate(bridgeSize);
    this.isNaNValidate(bridgeSize);
  }

  movingValidate(moving){
    if(moving !== 'U' && moving !== 'D'){
      throw ERROR_MESSAGE.INPUT_MOVING;
    }
  }

  sizeValidate(bridgeSize) {
    if(bridgeSize < 3 || bridgeSize > 20) {
      throw ERROR_MESSAGE.BRIDGE_LENGTH;
    }
  }

  isNaNValidate(bridgeSize) {
    if(isNaN(bridgeSize)) {
      throw ERROR_MESSAGE.BRIDGE_LENGTH;
    }
  }
}

module.exports = BridgeGameValidator;
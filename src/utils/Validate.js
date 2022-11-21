const Constant = require("./Constant");
class Validate {
  static validateBridgeSize(bridgeSize) {
    let bridgeSizeLength = String(bridgeSize).length;
    if (bridgeSize < 3 || bridgeSize > 20) {
      throw new Error(Constant.ERROR.BRIDGE_SIZE);
    }
    if (isNaN(Number(bridgeSize))) {
      throw new Error(Constant.ERROR.ONLY_NUMBER);
    }
    if (bridgeSizeLength >= 2) {
      throw new Error(Constant.ERROR.ONLY_ONE_NUMBER);
    }
    return true;
  }
}

module.exports = Validate;

const Validator = require('./Validator');

const BridgeChecker = {
  checkRowDataOfBridgeSize(rowDataOfBridgeSize) {
    Validator.checkTruthy(rowDataOfBridgeSize);
    Validator.checkStringType(rowDataOfBridgeSize);
    Validator.checkStringIncludes(rowDataOfBridgeSize);
  },

  checkBridgeSize(bridgeSize) {
    Validator.checkTruthy(bridgeSize);
    Validator.checkNumberType(bridgeSize);
    Validator.checkBridgeSizeRange(bridgeSize);
  },

  checkBridge(bridge) {
    Validator.checkTruthy(bridge);
    Validator.checkArrayType(bridge);
    Validator.checkBridgeSize(bridge);
    Validator.checkBridgeIncludes(bridge);
  },
};

module.exports = BridgeChecker;

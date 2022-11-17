const Validator = require('./Validator');

const BridgeChecker = {
  checkRowDataOfBridgeSize(rowDataOfBridgeSize) {
    Validator.checkTruthy(rowDataOfBridgeSize);
    Validator.checkStringType(rowDataOfBridgeSize);
    Validator.checkStringIncludesNumbers(rowDataOfBridgeSize);
  },

  checkBridgeSize(bridgeSize) {
    Validator.checkTruthy(bridgeSize);
    Validator.checkNumberType(bridgeSize);
    Validator.checkBridgeSizeRange(bridgeSize);
  },
};

module.exports = BridgeChecker;

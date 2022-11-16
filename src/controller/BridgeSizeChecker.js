const Validator = require('./Validator');

const BridgeSizeChecker = {
  check(rowDataOfBridgeSize) {
    Validator.checkTruthy(rowDataOfBridgeSize);
    Validator.checkStringType(rowDataOfBridgeSize);
    Validator.checkStringIncludesNumbers(rowDataOfBridgeSize);
    Validator.checkBridgeSizeRange(rowDataOfBridgeSize);
  },
};

module.exports = BridgeSizeChecker;

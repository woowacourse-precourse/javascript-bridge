const Validator = require('./Validator');
const { INPUT_ERROR, BRIDGE } = require('./constants');

class InputValidator extends Validator {
  static isValidBridgeSize(size) {
    const isValidBridgeSize =
      InputValidator.isNumericInput(size) &&
      !InputValidator.isZeroStartInput(size) &&
      InputValidator.isBetween(size, BRIDGE.MIN_SIZE, BRIDGE.MAX_SIZE);

    if (isValidBridgeSize) return true;
    throw new Error(INPUT_ERROR.BRIDGE_SIZE);
  }
}

module.exports = InputValidator;

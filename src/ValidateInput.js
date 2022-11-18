const OutputView = require("./OutputView");
const { MESSAGE } = require("../constants/Message");

const ValidateInput = {
  validate(size) {
    this.validateBridgeNumber(size);
    this.validateBridgeSize(size);
    this.validateBridgeInteger(size);
  },

  validateBridgeSize(size) {
    if (!(3 <= size && size <= 20)) {
      this.throwError(MESSAGE.ERROR_SIZE);
    }
  },

  validateBridgeNumber(size) {
    if (isNaN(size)) {
      this.throwError(MESSAGE.ERROR_NUMBER);
    }
  },

  validateBridgeInteger(size) {
    if (!Number.isInteger(size)) {
      this.throwError(MESSAGE.ERROR_INTEGER);
    }
  },

  validateDirection(direction) {
    if (direction !== "U" && direction !== "D") {
      this.throwError(MESSAGE.ERROR_DIRECTION);
    }
  },

  throwError(message) {
    OutputView.printMessage(message);
    throw new Error(message);
  },
};

module.exports = ValidateInput;

const OutputView = require("../View/OutputView");
const { MESSAGE } = require("../constants/Message");

const ValidateInput = {
  validate(size) {
    this.validateBridgeNumber(size);
    this.validateBridgeSize(size);
  },

  validateBridgeSize(size) {
    if (!(3 <= size && size <= 20)) {
      this.throwError(MESSAGE.ERROR_SIZE);
    }
  },

  validateBridgeNumber(size) {
    const check = /^[0-9]+$/;
    if (!check.test(size)) {
      this.throwError(MESSAGE.ERROR_NUMBER);
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

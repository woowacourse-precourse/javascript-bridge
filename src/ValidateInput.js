const OutputView = require("./OutputView");
const { MESSAGE } = require("../constants/Message");

const ValidateInput = {
  validate(size) {
    this.validateBridgeSize(size);
  },

  validateBridgeSize(size) {
    if (!(3 <= size && size <= 20)) {
      this.throwError(MESSAGE.ERROR_SIZE);
    }
  },

  throwError(message) {
    OutputView.printMessage(message);
    throw new Error(message);
  },
};

module.exports = ValidateInput;

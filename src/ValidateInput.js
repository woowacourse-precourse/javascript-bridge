const OutputView = require('./View/OutputView');
const { MESSAGE, COMMAND, CONSTANTS } = require('../constants/Message');

const ValidateInput = {
  validate(size) {
    this.validateBridgeNumber(size);
    this.validateBridgeSize(size);
  },

  validateBridgeSize(size) {
    if (
      !(CONSTANTS.MIN_BRIDGE_SIZE <= size && size <= CONSTANTS.MAX_BRIDGE_SIZE)
    ) {
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
    if (direction !== COMMAND.UP && direction !== COMMAND.DOWN) {
      this.throwError(MESSAGE.ERROR_DIRECTION);
    }
  },

  validateControl(command) {
    if (command !== COMMAND.RETRY && command !== COMMAND.QUIT) {
      this.throwError(MESSAGE.ERROR_CONTROL);
    }
  },

  throwError(message) {
    OutputView.printMessage(message);
    throw new Error(message);
  },
};

module.exports = ValidateInput;

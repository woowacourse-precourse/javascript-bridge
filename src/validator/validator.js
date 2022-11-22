const ERROR_MESSAGES = require('../constants/ErrorMessages');
const { BRIDGE, COMMAND } = require('../constants/constants');

const validator = {
  validateBridgeSize(size) {
    if (!this.isNumber(size)) {
      throw ERROR_MESSAGES.NAN;
    }
    if (!this.isValidSize(size)) {
      throw ERROR_MESSAGES.SIZE;
    }
  },
  validateMove(char) {
    switch (char) {
      case BRIDGE.UP_CHAR:
      case BRIDGE.DOWN_CHAR:
        return true;
      default:
        throw ERROR_MESSAGES.MOVING;
    }
  },
  validateCommand(command) {
    switch (command) {
      case COMMAND.RETRY:
      case COMMAND.QUIT:
        return true;
      default:
        throw ERROR_MESSAGES.COMMAND;
    }
  },
  isSameArr(arr1, arr2) {
    return JSON.stringify(arr1) === JSON.stringify(arr2);
  },
  isNumber(size) {
    return Number.isInteger(Number(size));
  },
  isValidSize(size) {
    return BRIDGE.MIN <= Number(size) && Number(size) <= BRIDGE.MAX;
  },
};

module.exports = validator;

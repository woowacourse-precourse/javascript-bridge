const { BRIDGE, COMMAND } = require('./constant/Bridge');
const { ERROR_MESSAGE } = require('./constant/Error');
const InvalidInputError = require('./error/InvalidInputError');

class Validator {
  static validateBridgeSize(size) {
    if (this.isValidSize(size)) return;
    this.throwException(InvalidInputError, ERROR_MESSAGE.BRIDGE_SIZE);
  }

  static validateSpace(space) {
    if (this.isValidSpace(space)) return;
    this.throwException(InvalidInputError, ERROR_MESSAGE.SPACE);
  }

  static validateCommand(command) {
    if (this.isValidCommand(command)) return;
    this.throwException(InvalidInputError, ERROR_MESSAGE.COMMAND);
  }

  static throwException(Error, message) {
    throw new Error(message);
  }

  static isValidSize(size) {
    return size >= BRIDGE.SIZE_MIN && size <= BRIDGE.SIZE_MAX;
  }

  static isValidSpace(space) {
    const spaceList = [BRIDGE.UP, BRIDGE.DOWN];
    return spaceList.includes(space);
  }

  static isValidCommand(command) {
    const commandList = [COMMAND.QUIT, COMMAND.RESTART];
    return commandList.includes(command);
  }
}

module.exports = Validator;

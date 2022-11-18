const { BRIDGE, COMMAND } = require('./constant/Bridge');
const { ERROR_MESSAGE } = require('./constant/Error');
const InvalidInputError = require('./error/InvalidInputError');

class Validator {
  static validateBridgeLength(length) {
    if (this.isValidLength(length)) return;
    this.throwException(InvalidInputError, ERROR_MESSAGE.BRIDGE_LENGTH);
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

  static isValidLength(length) {
    return length >= BRIDGE.LENGTH_MIN && length <= BRIDGE.LENGTH_MAX;
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

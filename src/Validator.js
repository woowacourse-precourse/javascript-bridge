const { ERROR_MESSAGE } = require('./constant/message');

class Validator {
  static chekcBridgeSizeValue(command) {
    Validator.checkInputIsNumber(command);
    Validator.checkBridgeSizeRange(command);
  }

  static checkInputIsNumber(command) {
    if (isNaN(command)) throw new Error(ERROR_MESSAGE.unexpected_input);
  }

  static checkCorrectDirection(direction) {
    if (direction !== 'U' && direction !== 'D')
      throw new Error(ERROR_MESSAGE.unexpected_input);
  }

  static checkBridgeSizeRange(size) {
    if (size < 3 || size > 20) throw Error(ERROR_MESSAGE.exceed_bridge_size);
  }

  static checkCorrectCommand(command) {
    if (command !== 'R' && command !== 'Q')
      throw Error(ERROR_MESSAGE.unexpected_input);
  }
}

module.exports = Validator;

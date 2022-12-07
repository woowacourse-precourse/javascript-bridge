const ErrorMessages = require('./ErrorMessage');

class Validator {
  static checkBridgeSize(input) {
    if (isNaN(input)) {
      throw new Error(ErrorMessages.NOT_NUMBER);
    }
    if (input * 1 < 3 || input * 1 > 20) {
      throw new Error(ErrorMessages.INVALID_SIZE);
    }
  }

  static checkUserMoving(input) {
    if (input !== 'U' && input !== 'D') {
      throw new Error(ErrorMessages.INVALID_MOVE);
    }
  }

  static checkRestartOrQuit(input) {
    if (input !== 'R' && input !== 'Q') {
      throw new Error(ErrorMessages.INVALID_COMMAND);
    }
  }
}
module.exports = Validator;

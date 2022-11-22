const ErrorMessages = require('./ErrorMessage');
const OutputView = require('./OutputView');

class Validator {
  checkBridgeSize(input) {
    if (isNaN(input)) {
      throw new Error(ErrorMessages.NOT_NUMBER);
    }
    if (input * 1 < 3 || input * 1 > 20) {
      throw new Error(ErrorMessages.INVALID_SIZE);
    }
  }
}
module.exports = Validator;

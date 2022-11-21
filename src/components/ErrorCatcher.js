const OutputView = require('../View/OutputView');

class ErrorCatcher {
  static catch(validateFunction, input) {
    let isValid = true;
    try {
      validateFunction(input);
    } catch (error) {
      OutputView.print(error.message);
      isValid = false;
    }
    return isValid;
  }
}

module.exports = ErrorCatcher;

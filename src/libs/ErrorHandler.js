const OutputView = require('../View/OutputView');

const ErrorHandler = {
  throwException(errorMsg, callback) {
    try {
      throw errorMsg;
    } catch (errorMsg) {
      OutputView.printMessage(errorMsg);

      return callback();
    }
  },
};

module.exports = ErrorHandler;

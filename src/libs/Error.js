const OutputView = require("../OutputView");

const Error = {
  throwException(errorMsg, callback) {
    try {
      throw errorMsg;
    } catch (errorMsg) {
      OutputView.printMessage(errorMsg);

      return callback();
    }
  },
};

module.exports = Error;

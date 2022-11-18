const OutputView = require("../src/console/OutputView");

class ErrorHandler {
  static test(validTarget, doCallBack, errorCallback) {
    try {
      validTarget();
      doCallBack();
    } catch (error) {
      OutputView.printLine(error.message);
      errorCallback();
    }
  }
}
module.exports = ErrorHandler;

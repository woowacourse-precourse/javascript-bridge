const OutputView = require("../src/console/OutputView");

class ErrorHandler {
  static test(validTarget, errorCallback, doCallBack) {
    try {
      validTarget();
      if (doCallBack) doCallBack();
    } catch (error) {
      OutputView.printLine(error.message);
      errorCallback();
    }
  }
}
module.exports = ErrorHandler;

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

  static testSimple(validTarget, errorCallBack) {
    try {
      validTarget();
    } catch (error) {
      OutputView.printLine(error.message);
      errorCallBack();
    }
  }
}
module.exports = ErrorHandler;

const OutputView = require("../view/OutputView");
const { FALLBACK_FN } = require("./stringsUtils");

class HandleError {
  static input(bridgeGamePresenter, errorType, errorMsg) {
    OutputView.printError(errorMsg);
    FALLBACK_FN[errorType](bridgeGamePresenter);
  }
}
module.exports = HandleError;

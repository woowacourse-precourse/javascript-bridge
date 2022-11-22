const InputView = require("./InputView");
const OutputView = require("./OutputView");

class IOHandler {
  static readBridgeSize(callback) {
    InputView.readBridgeSize(callback);
    return;
  }
  static readMoving(callback) {
    InputView.readMoving(callback);
    return;
  }
  static readGameCommand(callback) {
    InputView.readGameCommand(callback);
  }
  static printMap(resultMap) {
    OutputView.printMap(resultMap);
  }
  static printResult(result, tryCount, resultMap) {
    OutputView.printResult(result, tryCount, resultMap);
  }
}

module.exports = IOHandler;

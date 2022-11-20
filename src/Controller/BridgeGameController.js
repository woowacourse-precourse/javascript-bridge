const OutputView = require("../View/OutputView");
const InputView = require("../View/InputView");

class BridgeGameController {
  start() {
    OutputView.printStartMessage();
    InputView.readBridgeSize();
  }
}

module.exports = BridgeGameController;

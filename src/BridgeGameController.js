const OutputView = require("./OutputView");
const InputView = require("./InputView");

class BridgeGameController {
  startGame() {
    OutputView.printStart();
    this.createBridge();
  }

  createBridge() {
    InputView.readBridgeSize();
  }
}

module.exports = BridgeGameController;

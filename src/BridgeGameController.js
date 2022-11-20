const OutputView = require("./OutputView");
const InputView = require("./InputView");
const Validation = require("./Validation");

class BridgeGameController {
  startGame() {
    OutputView.printStart();
    this.getBridgeSize();
  }

  getBridgeSize() {
    InputView.readBridgeSize((size) => {
      try {
        Validation.checkBridgeSize(size);
        this.createBridge();
      } catch (err) {
        OutputView.printBridgeSizeError();
        this.getBridgeSize();
      }
    });
  }

  createBridge() {
    InputView.readMoving();
  }
}

module.exports = BridgeGameController;

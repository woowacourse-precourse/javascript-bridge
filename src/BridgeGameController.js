const OutputView = require("./OutputView");
const InputView = require("./InputView");
const Validation = require("./Validation");
const BridgeGame = require("./BridgeGame");

class BridgeGameController {
  constructor() {
    this.bridgeGame = new BridgeGame();
  }

  startGame() {
    OutputView.printStart();
    this.getBridgeSize();
  }

  getBridgeSize() {
    InputView.readBridgeSize((size) => {
      try {
        Validation.checkBridgeSize(size);
        this.createBridge(size);
      } catch (err) {
        OutputView.printBridgeSizeError();
        this.getBridgeSize();
      }
    });
  }

  createBridge(size) {
    this.bridgeGame.makeBridge(size);
    this.getDirection();
  }

  getDirection() {
    InputView.readMoving();
  }
}

module.exports = BridgeGameController;

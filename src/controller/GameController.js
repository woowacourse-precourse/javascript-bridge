const OutputView = require('../views/OutputView');
const InputView = require('../views/InputView');
const BridgeSizeChecker = require('./BridgeSizeChecker');

class GameController {
  playGame() {
    OutputView.printStartMessage();
    InputView.readBridgeSize(this.#makeBridge);
  }

  #makeBridge(rowDataOfBridgeSize) {
    BridgeSizeChecker.check(rowDataOfBridgeSize);
  }
}

module.exports = GameController;

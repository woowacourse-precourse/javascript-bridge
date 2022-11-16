const OutputView = require('../views/OutputView');
const InputView = require('../views/InputView');
const Validator = require('./Validator');

class GameController {
  playGame() {
    OutputView.printStartMessage();
    InputView.readBridgeSize(this.#makeBridge);
  }

  #makeBridge(rowDataOfBridgeSize) {}
}

module.exports = GameController;

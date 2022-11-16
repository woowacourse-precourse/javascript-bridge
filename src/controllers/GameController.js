const Bridge = require('../Bridge');
const BridgeMaker = require('../BridgeMaker');
const InputView = require('../views/InputView');
const OutputView = require('../views/OutputView');

class GameController {
  #bridge;

  gameStart() {
    OutputView.printStartMessage();
  }

  askBridgeSize() {
    InputView.readBridgeSize();
  }

  gameExit() {}
}

module.exports = GameController;

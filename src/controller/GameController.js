const OutputView = require('../views/OutputView');
const InputView = require('../views/InputView');

class GameController {
  playGame() {
    OutputView.printStartMessage();
    InputView.readBridgeSize();
  }
}

module.exports = GameController;

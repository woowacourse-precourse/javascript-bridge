const InputView = require('../views/InputView');
const OutputView = require('../views/OutputView');

class GameController {
  gameStart() {
    OutputView.printStartMessage();
  }

  gameExit() {}
}

module.exports = GameController;

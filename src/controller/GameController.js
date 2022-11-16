const OutputView = require('../views/OutputView');

class GameController {
  playGame() {
    OutputView.printStartMessage();
  }
}

module.exports = GameController;

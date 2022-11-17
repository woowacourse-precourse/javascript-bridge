const InputView = require('../Views/InputView');
const OutputView = require('../Views/OutputView');

class GameController {
  constructor() {
    this.outputView = OutputView;
    this.inputView = InputView;
    this.size = 0;
  }

  startGame() {
    this.outputView.printStart();
    this.selectBridgeSize();
  }

  selectBridgeSize() {
    this.inputView.readBridgeSize();
  }
}

module.exports = GameController;

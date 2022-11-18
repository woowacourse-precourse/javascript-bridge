const InputView = require('./InputView');
const OutputView = require('./OutputView');
const Bridge = require('./model/Bridge');

class GameController {
  #bridge;

  load() {
    InputView.readBridgeSize(this.setBridge.bind(this));
  }

  setBridge(size) {
    try {
      this.#bridge = new Bridge(size);
    } catch (error) {
      OutputView.printError(error.message);
      InputView.readBridgeSize(this.setBridge.bind(this));
    }
  }
}

module.exports = GameController;

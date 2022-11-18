const OutputView = require('../views/OutputView');

class BridgeGameController {
  #bridgeGame;
  constructor(bridgeGame) {
    this.#bridgeGame = bridgeGame;
  }

  start() {
    OutputView.printStart();
  }
}

module.exports = BridgeGameController;

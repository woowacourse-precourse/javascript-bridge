const Bridge = require('../model/Bridge');
const BridgeGame = require('../model/BridgeGame');
const BridgeLengthValidator = require('../validator/BridgeLengthValidator');
const InputView = require('../view/InputView');
const OutputView = require('../view/OutputView');

class BridgeGameController {
  #bridgeGame;

  start() {
    OutputView.printStart();
    InputView.readBridgeSize(this.set.bind(this));
  }

  set(length) {
    new BridgeLengthValidator(length).validate();

    this.#bridgeGame = new BridgeGame(length);
    this.#bridgeGame.setBridge();
  }
}

module.exports = BridgeGameController;

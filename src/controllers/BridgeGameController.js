const BridgeGame = require('../models/BridgeGame');
const InputValidator = require('../utils/InputValidator');
const InputView = require('../views/InputView');
const OutputView = require('../views/OutputView');

class BridgeGameController {
  #game = new BridgeGame();

  play() {
    InputView.readBridgeSize(this.#onBridgeSizeSubmit.bind(this));
  }

  #onBridgeSizeSubmit(size) {
    InputValidator.validateEmpty(size);
    InputValidator.validateSpace(size);
    InputValidator.validateNumber(size);

    this.#game.setBridge(+size);

    InputView.readMoving(this.#onMovingSubmit.bind(this));
  }

  #onMovingSubmit(input) {
    InputValidator.validateEmpty(input);

    this.#game.move(input);
    const bridgeMap = this.#game.getMap();

    OutputView.printMap(bridgeMap);
    InputView.readMoving(this.#onMovingSubmit.bind(this));
  }
}

module.exports = BridgeGameController;

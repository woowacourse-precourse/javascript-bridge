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
    const isCrossed = this.#game.move(input);
    const bridgeMap = this.#game.getMap();

    OutputView.printMap(bridgeMap);

    if (!isCrossed) {
      InputView.readGameCommand(this.#onGameCommandSubmit.bind(this));
      return;
    }

    InputView.readMoving(this.#onMovingSubmit.bind(this));
  }

  #onGameCommandSubmit(input) {}
}

module.exports = BridgeGameController;

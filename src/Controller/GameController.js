const InputView = require('../View/InputView');
const OutputView = require('../View/OutputView');
const BridgeGame = require('../Model/BridgeGame');

class GameController {
  #bridgeGame;

  constructor() {
    this.#bridgeGame = new BridgeGame();
  }

  play() {
    OutputView.printStart();
    InputView.readBridgeSize(this.setSize.bind(this));
  }

  setSize(size) {
    this.#bridgeGame.setBridgeSize(size);
    this.makeBridge();
  }

  makeBridge() {
    this.#bridgeGame.makeBridge();
    this.readDirection();
  }
}

const gc = new GameController();
gc.play();

module.exports = GameController;

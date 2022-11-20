const InputView = require('../View/InputView');
const OutputView = require('../View/OutputView');
const BridgeGame = require('../Model/BridgeGame');
const { REPLAY } = require('../../constants/string');

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

  readDirection() {
    InputView.readMoving(this.move.bind(this));
  }

  move(direction) {
    this.#bridgeGame.move(direction);
    this.showBridge();
  }

  showBridge() {
    const bridgeMap = this.#bridgeGame.mapBridge();

    OutputView.printMap(bridgeMap);
    this.checkPlay();
  }

  checkPlay() {
    if (this.#bridgeGame.canMove()) {
      this.readDirection();
    } else {
      InputView.readGameCommand(this.setGameCommand.bind(this));
    }
  }
}

const gc = new GameController();
gc.play();

module.exports = GameController;

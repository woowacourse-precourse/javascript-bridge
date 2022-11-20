const InputView = require('../View/InputView');
const OutputView = require('../View/OutputView');
const BridgeGame = require('../Model/BridgeGame');
const Move = require('../Model/Move');
const { REPLAY } = require('../../constants/command');

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

  setGameCommand(command) {
    if (command === REPLAY) {
      this.#bridgeGame.retry();
      this.readDirection();
    } else {
      this.end();
    }
  }

  end() {
    const bridgeMap = this.#bridgeGame.mapBridge();
    const playCount = this.#bridgeGame.getPlayCount();
    const isSuccess = Move.isSuccess();
    OutputView.printResult(bridgeMap, playCount, isSuccess);
  }
}

const gc = new GameController();
gc.play();

module.exports = GameController;

const InputView = require('../View/InputView');
const OutputView = require('../View/OutputView');
const BridgeGame = require('../Model/BridgeGame');
const Move = require('../Model/Move');
const { REPLAY } = require('../../constants/command');
const Bridge = require('../Model/Bridge');

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
    Bridge.setSize(size);
    this.makeBridge();
  }

  makeBridge() {
    this.#bridgeGame.makeBridge();
    this.readDirection();
  }

  readDirection() {
    InputView.readMoving(this.setDirection.bind(this));
  }

  setDirection(direction) {
    BridgeGame.move(direction);
    this.showBridge();
  }

  showBridge() {
    const bridgeMap = BridgeGame.mapBridge();

    OutputView.printMap(bridgeMap);
    this.checkPlay();
  }

  checkPlay() {
    if (BridgeGame.canMove()) {
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
    const bridgeMap = BridgeGame.mapBridge();
    const playCount = this.#bridgeGame.getPlayCount();
    const isSuccess = Move.isSuccess();
    OutputView.printResult(bridgeMap, playCount, isSuccess);
  }
}

const gc = new GameController();
gc.play();

module.exports = GameController;

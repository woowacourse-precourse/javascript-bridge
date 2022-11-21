const InputView = require('../View/InputView');
const OutputView = require('../View/OutputView');
const BridgeGame = require('../Model/BridgeGame');
const Move = require('../Model/Move');
const Bridge = require('../Model/Bridge');
const Exception = require('../components/Exception');
const Path = require('../Model/Path');
const { REPLAY } = require('../../constants/command');

class GameController {
  #bridgeGame;

  constructor() {
    this.#bridgeGame = new BridgeGame();
  }

  start() {
    OutputView.printStart();
    this.readSize();
  }

  readSize() {
    InputView.readBridgeSize(this.setSize.bind(this));
  }

  setSize(size) {
    if (Exception.bridgeSize(size)) {
      Bridge.setSize(size);
      this.makeBridge();
    } else {
      this.readSize();
    }
  }

  makeBridge() {
    Path.makePath();
    BridgeGame.init();
    this.readDirection();
  }

  readDirection() {
    InputView.readMoving(this.setDirection.bind(this));
  }

  setDirection(direction) {
    if (Exception.moveInput(direction)) {
      BridgeGame.move(direction);
      this.showBridge();
    } else {
      this.readDirection();
    }
  }

  showBridge() {
    const bridgeMap = BridgeGame.mapBridge();

    OutputView.printMap(bridgeMap);
    this.checkPlay();
  }

  checkPlay() {
    if (Move.canMove()) {
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
    const sucessMessage = Move.isSuccess();
    OutputView.printResult(bridgeMap, playCount, sucessMessage);
  }
}

module.exports = GameController;

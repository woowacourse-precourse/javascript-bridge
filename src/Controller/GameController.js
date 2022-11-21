const InputView = require('../View/InputView');
const OutputView = require('../View/OutputView');
const BridgeGame = require('../Model/BridgeGame');
const Move = require('../Model/Move');
const Bridge = require('../Model/Bridge');
const Validate = require('../components/Validate');
const Path = require('../Model/Path');

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
    InputView.readBridgeSize(this.validateSize.bind(this));
  }

  validateSize(size) {
    if (Validate.bridgeSize(size)) {
      Bridge.setSize(size);
      this.makeBridge(size);
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
    InputView.readMoving(this.validateDirection.bind(this));
  }

  validateDirection(direction) {
    if (Validate.moveInput(direction)) {
      this.move(direction);
    } else {
      this.readDirection();
    }
  }

  move(direction) {
    BridgeGame.move(direction);
    this.showBridge();
  }

  showBridge() {
    const bridgeMap = BridgeGame.mapBridge();

    OutputView.printMap(bridgeMap);
    this.checkArrive();
  }

  checkArrive() {
    if (Move.isArrived()) {
      this.end();
    } else {
      this.checkMove();
    }
  }

  checkMove() {
    if (Move.canMove()) {
      this.readDirection();
    } else {
      this.readGameCommand();
    }
  }

  readGameCommand() {
    InputView.readGameCommand(this.validateGameCommand.bind(this));
  }

  validateGameCommand(command) {
    if (Validate.gameCommand(command)) {
      this.checkRetry(command);
    } else {
      this.readGameCommand();
    }
  }

  checkRetry(command) {
    if (BridgeGame.keepPlay(command)) {
      this.#bridgeGame.retry();
      BridgeGame.init();
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

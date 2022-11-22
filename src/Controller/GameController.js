const Move = require('../Model/Move');
const Bridge = require('../Model/Bridge');
const Validate = require('../components/Validate');
const BridgeGame = require('../Model/BridgeGame');
const InputView = require('../View/InputView');
const OutputView = require('../View/OutputView');

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
      this.init(size);
    } else {
      this.readSize();
    }
  }

  init() {
    BridgeGame.init();
    BridgeGame.makePath();
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
    this.checkPassed();
  }

  checkPassed() {
    if (BridgeGame.isPassed()) {
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
      this.readDirection();
    } else {
      this.end();
    }
  }

  end() {
    const bridgeMap = BridgeGame.mapBridge();
    const playCount = this.#bridgeGame.getPlayCount();
    const successMessage = BridgeGame.showSucceedMessage();

    OutputView.printResult(bridgeMap, playCount, successMessage);
  }
}

module.exports = GameController;

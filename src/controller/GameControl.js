const VALID_VALUE = require('../constant/ValidValue');
const InputView = require('../view/InputView');
const OutputView = require('../view/OutputView');
const BridgeGame = require('../model/BridgeGame');

class GameControl {
  constructor() {
    this.bridgeGame = new BridgeGame();
  }

  start() {
    const size = InputView.readBridgeSize();
    if (isNaN(size)) {
      return;
    }
    this.bridgeGame.make(size);
    this.orderMoving();
  }

  orderMoving() {
    const direction = InputView.readMoving();
    this.bridgeGame.move(direction);
    this.checkResult();
  }

  checkResult() {
    const result = this.bridgeGame.getResult();
    const state = this.bridgeGame.getState();
    OutputView.printMap(state);
    if (result === true) this.checkEnd();
    if (result === false) this.askRetry();
  }

  checkEnd() {
    if (this.isEnd()) {
      const success = true;
      this.runFinalOutput(success);
    }
    if (!this.isEnd()) {
      this.orderMoving();
    }
  }

  isEnd() {
    const position = this.bridgeGame.getPosition();
    const size = this.bridgeGame.getSize();
    return size === position;
  }

  askRetry() {
    const retry = InputView.readGameCommand();
    if (retry === VALID_VALUE.RETRY.RETRY) {
      this.runRetry();
    }
    if (retry === VALID_VALUE.RETRY.QUIT) {
      this.runQuit();
    }
  }

  runRetry() {
    this.bridgeGame.retry();
    this.orderMoving();
  }

  runQuit() {
    const success = false;
    this.runFinalOutput(success);
  }

  runFinalOutput(success) {
    const state = this.bridgeGame.getState();
    const count = this.bridgeGame.getCount();
    OutputView.printResult(state, count, success);
  }
}
module.exports = GameControl;

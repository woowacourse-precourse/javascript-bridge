const InputView = require('../view/InputView');
const OutputView = require('../view/OutputView');
const BridgeGame = require('./BridgeGame');

class GameControl {
  constructor() {
    this.bridgeGame = new BridgeGame();
  }

  start() {
    const size = InputView.readBridgeSize();
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
}
module.exports = GameControl;

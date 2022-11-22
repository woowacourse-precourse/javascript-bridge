const InputView = require('../view/InputView');
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
}
module.exports = GameControl;

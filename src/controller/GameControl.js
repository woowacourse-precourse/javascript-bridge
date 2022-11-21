const InputView = require('../view/InputView');
const BridgeGame = require('./BridgeGame');

class GameControl {
  constructor() {
    this.bridgeGame = new BridgeGame();
  }

  start() {
    const size = InputView.readBridgeSize();
    this.bridgeGame.make(size);
  }
}
module.exports = GameControl;

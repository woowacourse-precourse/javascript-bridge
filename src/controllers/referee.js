const InputView = require('../views/InputView');
const BridgeGame = require('./BridgeGame');

class Referee {
  constructor() {
    this.bridgeGame = new BridgeGame();
  }

  init() {
    InputView.readBridgeSize((answer) => this.bridgeGame.bridge.makeBridge(answer));
  }
}
module.exports = Referee;

const BridgeGame = require('./BridgeGame.js');
const InputView = require('./InputView.js');
const BridgeMaker = require('./BridgeMaker.js');
const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator.js');
class BridgeGameController {
  constructor() {
    this.bridgeGame = new BridgeGame();
  }

  start() {
    InputView.readBridgeSize(this.createBridgeByUser.bind(this));
  }

  createBridgeByUser(bridgeLength) {
    const bridge = BridgeMaker.makeBridge(bridgeLength, BridgeRandomNumberGenerator.generate);
    this.bridgeGame.bridge = bridge;
  }
}

module.exports = BridgeGameController;

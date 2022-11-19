const BridgeGame = require('./BridgeGame.js');
const InputView = require('./InputView.js');
const BridgeMaker = require('./BridgeMaker.js');
const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator.js');
const Bridge = require('./model/Bridge.js');

class BridgeGameController {
  constructor() {
    this.bridgeGame = new BridgeGame();
    this.bridge = new Bridge();
  }

  start() {
    InputView.readBridgeSize(this.createBridgeByUser.bind(this));
  }

  createBridgeByUser(bridgeLength) {
    this.bridge.setData('length', bridgeLength);
    const blueprint = BridgeMaker.makeBridge(bridgeLength, BridgeRandomNumberGenerator.generate);
    this.bridge.setData('blueprint', blueprint);

    InputView.readMoving(this.movingByUser.bind(this));
  }

  movingByUser(move) {}
}

module.exports = BridgeGameController;

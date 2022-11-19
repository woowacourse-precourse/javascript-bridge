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

  movingByUser(move) {
    this.bridgeGame.move(move, this.bridge);
    if (this.bridge.data.turn >= this.bridge.data.length) {
      console.log(this.bridge.data.bridge);
      console.log(`[${this.bridge.data.upperBridge}]`);
      console.log(`[${this.bridge.data.lowerBridge}]`);
    } else InputView.readMoving(this.movingByUser.bind(this));
  }
}

module.exports = BridgeGameController;

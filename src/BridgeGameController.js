const BridgeGame = require('./BridgeGame.js');
const InputView = require('./InputView.js');
const OutputView = require('./OutputView.js');
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
    const isWrongAnswer = this.bridgeGame.move(move, this.bridge);
    OutputView.printMap(this.bridge);

    if (this.bridge.data.turn >= this.bridge.data.length) {
      OutputView.printMap(this.bridge);
    } else InputView.readMoving(this.movingByUser.bind(this));
  }
}

module.exports = BridgeGameController;

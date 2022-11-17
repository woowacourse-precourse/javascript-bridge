const Bridge = require('./bridge/Bridge');
const { makeBridge } = require('../BridgeMaker');
const { generate } = require('../BridgeRandomNumberGenerator');
const CrossingBridge = require('./result/Crossingbridge');

class BridgeGame {
  #bridge;

  #crossingBridge;

  execute(bridgeSize) {
    const panels = makeBridge(bridgeSize, generate);
    this.#bridge = new Bridge(panels);
    this.start();
  }

  start() {
    this.#crossingBridge = new CrossingBridge();
  }

  move(direction) {

  }

  retry() {
    this.start();
  }

  quit() {

  }
}

module.exports = BridgeGame;

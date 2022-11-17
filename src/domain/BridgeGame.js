const { Console } = require('@woowacourse/mission-utils');
const Bridge = require('./bridge/Bridge');
const { makeBridge } = require('../BridgeMaker');
const { generate } = require('../BridgeRandomNumberGenerator');
const { checkCrossingNext } = require('./Judgment');
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
    this.#crossingBridge.add({ isSuccess: this.#checkPanel(direction), direction });
    return this.#crossingBridge.print();
  }

  #checkPanel(direction) {
    return checkCrossingNext({
      bridge: this.#bridge,
      position: this.#crossingBridge.size(),
      direction,
    });
  }

  retry() {
    this.start();
  }

  quit() {
    Console.close();
    return this;
  }
}

module.exports = BridgeGame;

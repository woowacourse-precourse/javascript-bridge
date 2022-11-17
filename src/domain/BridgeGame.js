const { Console } = require('@woowacourse/mission-utils');
const Attempt = require('./result/Attempt');
const Bridge = require('./bridge/Bridge');
const { makeBridge } = require('../BridgeMaker');
const { generate } = require('../BridgeRandomNumberGenerator');
const CrossingBridge = require('./result/CrossingBridge');

class BridgeGame {
  #attempt;

  #bridge;

  #crossingBridge;

  execute(bridgeSize) {
    const panels = makeBridge(bridgeSize, generate);
    this.#bridge = new Bridge(panels);
    this.#attempt = new Attempt();
    this.start();
  }

  start() {
    this.#crossingBridge = new CrossingBridge();
  }

  move() {

  }

  retry() {

  }

  quit() {
    Console.close();
    return this;
  }
}

module.exports = BridgeGame;

const { Console } = require('@woowacourse/mission-utils');
const Attempt = require('./result/Attempt');
const Bridge = require('./bridge/Bridge');
const CrossingBridge = require('./result/CrossingBridge');
const Judgment = require('./Judgment');
const Result = require('./result/Result');
const { makeBridge } = require('../BridgeMaker');
const { generate } = require('../BridgeRandomNumberGenerator');

class BridgeGame {
  #attempt;

  #bridge;

  #crossingBridge;

  static printResult(type) {
    return Result.print(type);
  }

  execute(bridgeSize) {
    const panels = makeBridge(bridgeSize, generate);
    this.#bridge = new Bridge(panels);
    this.#attempt = new Attempt();
    this.start();
  }

  start() {
    this.#crossingBridge = new CrossingBridge();
  }

  move(direction, isPassed) {
    this.#crossingBridge.add({ direction, isPassed });
  }

  checkPanel(direction) {
    return Judgment.checkCrossingNext({
      bridge: this.#bridge,
      position: this.#crossingBridge.size(),
      direction,
    });
  }

  printCrossingBridge() {
    return this.#crossingBridge.print();
  }

  printAttempt() {
    return this.#attempt.print();
  }

  checkGameWin() {
    return Judgment.checkCrossingAll({
      crossingBridge: this.#crossingBridge,
      bridge: this.#bridge,
    });
  }

  retry() {
    this.#crossingBridge.initialize();
    this.#attempt.add();
    this.start();
  }

  quit() {
    Console.close();
    return this;
  }
}

module.exports = BridgeGame;

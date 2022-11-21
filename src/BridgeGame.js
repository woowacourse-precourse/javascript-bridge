const Bridge = require('./domain/Bridge');
const BridgeResult = require('./domain/BridgeResult');
const BridgeMaker = require('./BridgeMaker');
const { generate } = require('./BridgeRandomNumberGenerator');

class BridgeGame {
  #bridge;
  #bridgeResult;
  #player = { movings: [] };

  createBridge(bridgeSize) {
    const bridgePattern = BridgeMaker.makeBridge(bridgeSize, generate);
    this.#bridge = new Bridge(bridgePattern);
    this.#bridgeResult = new BridgeResult(bridgePattern.length);
  }

  move(moving) {
    this.#player.movings.push(moving);
    const { bridgeMap, checking } = this.#bridge.match(this.#player.movings);
    this.#bridgeResult.save(bridgeMap);
    const isSuccess = this.#bridgeResult.checkSuccess();
    return { bridgeMap, checking, isSuccess };
  }

  retry() {
    this.#player.movings = [];
    this.#bridgeResult.addTryCount();
  }

  quit() {
    return this.#bridgeResult.getResult();
  }
}

module.exports = BridgeGame;

const BridgeMaker = require("./BridgeMaker");
const BridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator");

class BridgeGame {
  #tryCount;
  #bridgeMap;

  constructor(size) {
    this.#tryCount = 1;
    this.#bridgeMap = BridgeMaker.makeBridge(
      size,
      BridgeRandomNumberGenerator.generate
    );
  }

  move(location, input) {
    if (this.#bridgeMap[location] === input) {
      return true;
    }
    return false;
  }

  retry() {
    this.#tryCount += 1;
  }

  getTryCount() {
    return this.#tryCount;
  }

  getBridgeMap() {
    return this.#bridgeMap;
  }
}

module.exports = BridgeGame;

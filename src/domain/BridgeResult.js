const { BRIDGE } = require('../utils/constants');

class BridgeResult {
  #isSuccess;
  #tryCount;
  #bridgeSize;
  #bridgeMap;

  constructor(bridgeSize) {
    this.#isSuccess = false;
    this.#tryCount = 1;
    this.#bridgeSize = bridgeSize;
  }

  save(bridgeMap) {
    this.#bridgeMap = bridgeMap;
  }

  addTryCount() {
    this.#tryCount += 1;
  }

  checkSuccess() {
    this.#isSuccess =
      this.#bridgeMap[BRIDGE.up].length === this.#bridgeSize &&
      !this.#bridgeMap[BRIDGE.up].some((element) => element === BRIDGE.wrong) &&
      !this.#bridgeMap[BRIDGE.down].some((element) => element === BRIDGE.wrong);
    if (this.#isSuccess) return true;
    return false;
  }

  getResult() {
    const bridgeMap = Object.freeze(this.#bridgeMap);
    const isSuccess = this.#isSuccess;
    const tryCount = this.#tryCount;
    return { bridgeMap, isSuccess, tryCount };
  }
}

module.exports = BridgeResult;

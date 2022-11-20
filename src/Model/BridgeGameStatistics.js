class BridgeStatistics {
  #bridgeSize = null;
  #moveCount = 0;
  #attempt = 0;

  increaseAttempt() {
    this.#attempt += 1;
  }

  increaseMoveCount() {
    this.#moveCount += 1;
  }

  getAttempt() {
    return this.#attempt;
  }

  getMoveCount() {
    return this.#moveCount;
  }

  setBridgeSize(bridgeSize) {
    this.#bridgeSize = bridgeSize;
  }

  isGameSuccess() {
    return this.#bridgeSize === this.#moveCount;
  }

  resetMoveCount() {
    this.#moveCount = 0;
  }
}

module.exports = BridgeStatistics;

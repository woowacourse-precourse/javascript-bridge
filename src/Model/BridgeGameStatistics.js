class BridgeStatistics {
  #bridgeSize;
  #moveCount;
  #attempt;

  constructor(bridgeSize) {
    this.#bridgeSize = bridgeSize;
    this.#moveCount = 0;
    this.#attempt = 0;
  }

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

  isGameWin() {
    return this.#bridgeSize === this.#moveCount;
  }

  resetMoveCount() {
    this.#moveCount = 0;
  }
}

module.exports = BridgeStatistics;

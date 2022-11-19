class Player {
  #bridgePostion;
  #gameTryCount;

  constructor() {
    this.#bridgePostion = 0;
    this.#gameTryCount = 1;
  }

  getCurrentPositionAndMovePlayer() {
    return this.#bridgePostion++;
  }

  bridgeGameRetry() {
    this.#bridgePostion = 0;
    this.#gameTryCount++;
    return this;
  }

  getBridgeGameTryCount() {
    return this.#gameTryCount;
  }
}

module.exports = Player;

class Player {
  #bridgePostion;
  #gameTryCount;

  constructor() {
    this.#bridgePostion = 0;
    this.#gameTryCount = 1;
  }

  getCurrentPositionAndMovePlayer(bridgeLength) {
    if (bridgeLength > this.#bridgePostion) this.#bridgePostion += 1;
    return this.#bridgePostion;
  }

  gameRetry() {
    this.#bridgePostion = 0;
    this.#gameTryCount += 1;
  }

  getBridgeGameTryCount() {
    return this.#gameTryCount;
  }
}

module.exports = Player;

class BridgeGameStatus {
  static initLocation = -1;

  static initTryCount = 0;

  #state = {
    location: BridgeGameStatus.initLocation,
    tryCount: BridgeGameStatus.initTryCount,
  };

  getLocation() {
    return this.#state.location;
  }

  getTryCount() {
    return this.#state.tryCount;
  }

  increaseLocation() {
    this.#state.location += 1;
  }

  increaseTryCount() {
    this.#state.tryCount += 1;
  }

  resetLocation() {
    this.#state.location = BridgeGameStatus.initLocation;
  }
}

module.exports = BridgeGameStatus;

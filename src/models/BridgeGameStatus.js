class BridgeGameStatus {
  #location = -1;

  #tryCount = 0;

  getLocation() {
    return this.#location;
  }

  getTryCount() {
    return this.#tryCount;
  }

  increaseLocation() {
    this.#location += 1;
  }

  increaseTryCount() {
    this.#tryCount += 1;
  }

  resetLocation() {
    this.#location = -1;
  }
}

module.exports = BridgeGameStatus;

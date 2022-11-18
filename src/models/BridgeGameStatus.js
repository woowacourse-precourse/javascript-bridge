class BridgeGameStatus {
  #location = 0;

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
    this.#location = 0;
  }

  isWin(size) {
    return size === this.#location;
  }
}

module.exports = BridgeGameStatus;

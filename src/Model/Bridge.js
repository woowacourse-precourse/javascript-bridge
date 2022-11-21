class Bridge {
  #bridge = [];

  canMove(moveCount, moving) {
    return this.#bridge[moveCount] === moving;
  }

  setBridge(bridge) {
    this.#bridge = bridge;
  }

  getBridgeSize() {
    return this.#bridge.length;
  }
}

module.exports = Bridge;

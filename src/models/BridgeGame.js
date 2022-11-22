class BridgeGame {
  #bridge;
  #moveList;
  #tryCount;

  constructor(bridge) {
    this.#bridge = bridge;
    this.#moveList = [];
    this.#tryCount = 1;
  }

  getMoveList() {
    return this.#moveList;
  }

  getTryCount() {
    return this.#tryCount;
  }

  move(moving) {
    const nextBridge = this.#bridge[this.#moveList.length];
    this.#moveList.push({
      moving,
      result: moving === nextBridge,
    });
  }

  retry() {
    this.#moveList = [];
    this.#tryCount += 1;
  }

  getLastResult() {
    return this.#moveList[this.#moveList.length - 1].result;
  }

  getFinalResult() {
    const lastResult = this.getLastResult();
    return lastResult === true && this.#moveList.length === this.#bridge.length;
  }
}

module.exports = BridgeGame;

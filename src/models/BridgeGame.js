class BridgeGame {
  #bridge;
  #moveList;
  #tryCount;

  constructor(bridge) {
    this.#bridge = bridge;
    this.#moveList = [];
    this.#tryCount = 1;
  }

  getBridge() {
    return this.#bridge;
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
}

module.exports = BridgeGame;

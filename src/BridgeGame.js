class BridgeGame {
  #bridge;
  #crossingOrder;
  #attemptCount;

  constructor(bridge) {
    this.#bridge = bridge;
    this.#crossingOrder = [];
    this.#attemptCount = 1;
  }
  move(direction) {
    this.#crossingOrder.push([direction, direction === "U" ? 0 : 1]);
  }

  retry() {}
}

module.exports = BridgeGame;

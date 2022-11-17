class BridgeGame {
  #bridge;
  #map;
  #tryCount;

  constructor(bridge) {
    this.#bridge = bridge;
    this.#map = [];
    this.#tryCount = 1;
  }

  getBridge() {
    return this.#bridge;
  }

  getMap() {
    return this.#map;
  }

  getTryCount() {
    return this.#tryCount;
  }

  move(moving) {
    const nextBridge = this.#bridge[this.#map.length];
    this.#map.push({
      moving,
      result: moving === nextBridge,
    });
  }

  retry() {
    this.#map = [];
    this.#tryCount += 1;
  }
}

module.exports = BridgeGame;

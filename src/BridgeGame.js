class BridgeGame {
  #bridge;
  #map;

  constructor(bridge) {
    this.#bridge = bridge;
    this.#map = [];
  }

  getBridge() {
    return this.#bridge;
  }

  getMap() {
    return this.#map;
  }

  move(moving) {
    const nextBridge = this.#bridge[this.#map.length];
    this.#map.push({
      moving,
      result: moving === nextBridge,
    });
  }

  retry() {}
}

module.exports = BridgeGame;

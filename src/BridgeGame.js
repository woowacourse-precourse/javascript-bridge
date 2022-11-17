class BridgeGame {
  #bridge;
  #map;
  #try;

  constructor(bridge) {
    this.#bridge = bridge;
    this.#map = [];
    this.#try = 1;
  }

  getBridge() {
    return this.#bridge;
  }

  getMap() {
    return this.#map;
  }

  getTry() {
    return this.#try;
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
    this.#try += 1;
  }
}

module.exports = BridgeGame;

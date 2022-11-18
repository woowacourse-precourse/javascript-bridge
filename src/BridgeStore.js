class BridgeStore {
  #bridge;

  constructor(bridge) {
    this.#bridge = bridge;
  }

  get bridge() {
    return this.#bridge;
  }
}

module.exports = BridgeStore;

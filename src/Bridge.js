class Bridge {
  #bridge;

  constructor(bridge) {
    this.#bridge = bridge;
  }

  getBridge() {
    return this.#bridge;
  }
}

module.exports = Bridge;

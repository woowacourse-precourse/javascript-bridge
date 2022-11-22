class Bridge {
  #bridge;

  constructor(bridge) {
    this.#bridge = bridge;
  }

  moveSuccess(position, direction) {
    if (this.#bridge[position] === direction) return true;
    return false;
  }

  length() {
    return this.#bridge.length;
  }
}

module.exports = Bridge;

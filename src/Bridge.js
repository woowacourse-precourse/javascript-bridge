class Bridge {
  #bridge;

  constructor(bridge) {
    this.#bridge = bridge;
  }

  moveSuccess(position, direction) {
    if (this.#bridge[position] === direction) return true;
    return false;
  }
}

module.exports = Bridge;

class Bridge {
  #bridge;

  constructor(path) {
    this.#bridge = path;
  }

  getBridge() {
    return this.#bridge;
  }
}

module.exports = Bridge;

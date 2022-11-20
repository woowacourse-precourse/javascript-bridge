class Bridge {
  #bridge;

  get bridge() {
    return this.#bridge;
  }

  set bridge(value) {
    this.#bridge = value;
  }
}

module.exports = Bridge;

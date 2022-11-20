class Bridge {
  #path;

  constructor(path) {
    this.#path = path;
  }

  getBridge() {
    return this.#path;
  }
}

module.exports = Bridge;

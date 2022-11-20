class Bridge {
  #path;

  constructor(path) {
    this.#path = path;
  }

  getBridge() {
    return this.#path;
  }

  checkPath(moving, location) {
    return this.#path[location] === moving;
  }
}

module.exports = Bridge;

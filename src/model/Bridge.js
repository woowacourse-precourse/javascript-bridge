class Bridge {
  #path;

  constructor(path) {
    this.#path = path;
  }

  getSize() {
    return this.#path.length;
  }

  checkPath(moving, location) {
    return this.#path[location] === moving;
  }
}

module.exports = Bridge;

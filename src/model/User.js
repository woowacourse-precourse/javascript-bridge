class User {
  #location;
  #tryCount;

  constructor() {
    this.#location = 0;
    this.#tryCount = 1;
  }

  setLocation() {
    this.#location += 1;
  }

  getLocation() {
    return this.#location;
  }

  setTryCount() {
    this.#tryCount += 1;
  }

  getTryCount() {
    return this.#tryCount;
  }
}

module.exports = User;

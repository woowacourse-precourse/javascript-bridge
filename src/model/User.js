class User {
  #location;
  #tryCount;

  constructor() {
    this.#location = 0;
    this.#tryCount = 1;
  }

  increaseLocation() {
    this.#location += 1;
  }

  increaseCount() {
    this.#tryCount += 1;
  }

  initLocation() {
    this.#location = 0;
  }

  getLocation() {
    return this.#location;
  }

  getTryCount() {
    return this.#tryCount;
  }

  isSameLocation(gameMapLength) {
    return this.#location === gameMapLength;
  }
}

module.exports = User;

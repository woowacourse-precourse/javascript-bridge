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

  decreaseLocation() {
    this.#location -= 1;
  }

  getLocation() {
    return this.#location;
  }

  getTryCount() {
    return this.#tryCount;
  }
}

module.exports = User;

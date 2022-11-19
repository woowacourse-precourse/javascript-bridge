class UserModel {
  #tryCount;

  constructor() {
    this.#tryCount = 0;
  }

  getTryCount() {
    return this.#tryCount;
  }

  increaseTryCount() {
    this.#tryCount = this.#tryCount + 1;
  }
}

module.exports = UserModel;

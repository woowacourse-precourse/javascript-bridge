class TryCnt {
  #tryCnt;

  constructor() {
    this.#tryCnt = 1;
  }

  get() {
    return this.#tryCnt;
  }

  add() {
    this.#tryCnt += 1;
  }

  reset() {
    this.#tryCnt = 1;
  }
}

module.exports = TryCnt;

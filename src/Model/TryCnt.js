class TryCnt {
  #cnt;

  constructor() {
    this.#cnt = 1;
  }

  get cnt() {
    return this.#cnt;
  }

  add() {
    this.#cnt += 1;
  }

  reset() {
    this.#cnt = 1;
  }
}

module.exports = TryCnt;

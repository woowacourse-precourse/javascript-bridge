// @ts-checkts-check

class TryCnt {
  /** @type {number} */
  #cnt;

  constructor() {
    this.#cnt = 1;
  }

  /**
   * @returns {number}
   */
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

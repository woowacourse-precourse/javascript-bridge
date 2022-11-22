// @ts-checkts-check

class TryCnt {
  /** @type {number} */
  #array;

  constructor() {
    this.#array = [];
  }

  /**
   * @returns {number}
   */
  get cnt() {
    return this.#array.length + 1;
  }

  add() {
    this.#array.push(1);
  }

  reset() {
    this.#array = [];
  }
}

module.exports = TryCnt;

// @ts-checkts-check
class Selected {
  /** @type {string[]}  */
  #selected;

  constructor() {
    this.#selected = [];
  }

  /**
   * @returns {number}
   */
  get level() {
    return this.#selected.length;
  }

  /**
   *
   * @param {string} input - "U"또는 "D"를 input으로 받는다
   */
  addElement(input) {
    this.#selected.push(input);
  }

  /**
   *
   * @param {number} level
   * @returns {string}
   */
  getElement(level) {
    return this.#selected[level];
  }

  reset() {
    this.#selected = [];
  }
}

module.exports = Selected;

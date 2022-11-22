const { PATH_TYPE, MARKING, PATH, UPSIDE } = require('./utils/const');
const Validator = require('./utils/Validator');

class Path {
  /** @type {string[]} */
  #path;

  /** @type {string[][]} */
  #pathMap;

  constructor() {
    this.#path = [];
    this.#pathMap = [[], []];
  }

  /**
   * @param {string} moving
   * @returns {string[]}
   */
  push(moving) {
    this.validate(moving);
    this.#path.push(moving);

    return this.#path;
  }

  /**
   * @param {string} moving
   */
  validate(moving) {
    Validator.validateEqual(moving, PATH_TYPE);
  }

  /**
   * @param {boolean} isCorrect
   * @return {string[][]}
   */
  markOX(isCorrect) {
    const currentPath = this.getCurrentPath();
    const mark = isCorrect ? MARKING.CORRECT : MARKING.WRONG;
    currentPath === UPSIDE ? this.markU(mark) : this.markD(mark);

    return this.#pathMap;
  }

  markU(mark) {
    this.#pathMap[PATH.UPSIDE][this.#path.length - 1] = mark;
    this.#pathMap[PATH.DOWNSIDE][this.#path.length - 1] = MARKING.BLANK;
  }

  markD(mark) {
    this.#pathMap[PATH.UPSIDE][this.#path.length - 1] = MARKING.BLANK;
    this.#pathMap[PATH.DOWNSIDE][this.#path.length - 1] = mark;
  }

  getPathMap() {
    return this.#pathMap;
  }

  getPath() {
    return this.#path;
  }

  getCurrentPath() {
    return this.#path[this.#path.length - 1];
  }
}

module.exports = Path;

const { BRIDGE_PATH_TYPE, MARKING, MOVING } = require('./utils/const');
const Validator = require('./utils/Validator');

class Path {
  /** @type {string[]} */
  #path;

  /** @type {string[][]} */
  #pathMap;

  constructor() {
    this.#path = [];
    this.#pathMap = new Array(2).fill(0).map(() => []);
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
    Validator.validateEqual(moving, BRIDGE_PATH_TYPE);
  }

  /**
   * @param {boolean} isCorrect
   * @return {string[][]}
   */
  markOX(isCorrect) {
    const currentPath = this.getCurrentPath();
    const mark = isCorrect ? MARKING.CORRECT : MARKING.WRONG;
    currentPath === 'U' ? this.markU(mark) : this.markD(mark);

    return this.#pathMap;
  }

  markU(mark) {
    this.#pathMap[MOVING.U][this.#path.length - 1] = mark;
    this.#pathMap[MOVING.D][this.#path.length - 1] = MARKING.BLANK;
  }

  markD(mark) {
    this.#pathMap[MOVING.U][this.#path.length - 1] = MARKING.BLANK;
    this.#pathMap[MOVING.D][this.#path.length - 1] = mark;
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

const { BRIDGE_PATH_TYPE, MARKING, MOVING } = require('./utils/const');
const Validator = require('./utils/Validator');

class Path {
  #path;
  #pathMap;

  constructor() {
    this.#path = [];
    this.#pathMap = new Array(2).fill(0).map(() => ['']);
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

  getCurrentPath() {
    return this.#path[this.#path.length - 1];
  }

  /**
   * @param {boolean} isCorrect O / X
   * @return {string[][]}
   */
  markOX(isCorrect) {
    const currentPath = this.getCurrentPath();
    const mark = isCorrect ? MARKING.CORRECT : MARKING.WRONG;
    currentPath === 'U' ? this.markU(mark) : this.markD(mark);

    return this.#pathMap;
  }

  /**
   * @param {string} mark O / X
   */
  markU(mark) {
    this.#pathMap[MOVING.U][this.#path.length - 1] = mark;
    this.#pathMap[MOVING.D][this.#path.length - 1] = MARKING.BLANK;
  }

  /**
   * @param {string} mark O / X
   */
  markD(mark) {
    this.#pathMap[MOVING.U][this.#path.length - 1] = MARKING.BLANK;
    this.#pathMap[MOVING.D][this.#path.length - 1] = mark;
  }

  /**
   * @returns {string[][]}
   */
  getPathMap() {
    return this.#pathMap;
  }

  /**
   * @returns {string[]}
   */
  getPath() {
    return this.#path;
  }
}

module.exports = Path;

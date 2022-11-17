const { MOVING, MARKING } = require('./utils/const');

class Player {
  #step;
  #markingPaper;

  constructor() {
    this.#step = 0;
    this.#markingPaper = new Array(2).fill(0).map(() => []);
  }

  /**
   * @param {string} moving
   * @param {boolean} isCorrect
   */
  markOX(moving, isCorrect) {
    const mark = isCorrect ? MARKING.CORRECT : MARKING.WRONG;

    if (moving === 'U') this.markU(mark);
    if (moving === 'D') this.markD(mark);

    return this.#markingPaper;
  }

  /**
   * @param {string} mark O / X
   */
  markU(mark) {
    this.#markingPaper[MOVING.U][this.#step] = mark;
    this.#markingPaper[MOVING.D][this.#step] = MARKING.BLANK;
  }

  /**
   * @param {string} mark O / X
   */
  markD(mark) {
    this.#markingPaper[MOVING.U][this.#step] = MARKING.BLANK;
    this.#markingPaper[MOVING.D][this.#step] = mark;
  }

  setNextStep() {
    this.#step += 1;
  }

  getStep() {
    return this.#step;
  }

  getMarkingPaper() {
    return this.#markingPaper;
  }
}

module.exports = Player;

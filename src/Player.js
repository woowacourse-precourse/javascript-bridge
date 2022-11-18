// @ts-check

const { MOVING, MARKING } = require('./utils/const');

class Player {
  #step;
  #markingPaper;

  constructor() {
    this.#step = 0;
    this.#markingPaper = new Array(2).fill(0).map(() => ['']);
  }

  /**
   * @param {string} moving
   * @param {string} mark O / X
   */
  markOX(moving, mark) {
    moving === 'U' ? this.markU(mark) : this.markD(mark);
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

  /**
   * @param {number} newStep
   */
  setStep(newStep) {
    this.#step = newStep;
  }

  getStep() {
    return this.#step;
  }

  getMarkingPaper() {
    return this.#markingPaper;
  }
}

module.exports = Player;

// @ts-check

const { MOVING, MARKING } = require('./utils/const');

class Player {
  #location;
  #map;

  constructor() {
    this.#location = 0;
    this.#map = new Array(2).fill(0).map(() => ['']);
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
    this.#map[MOVING.U][this.#location] = mark;
    this.#map[MOVING.D][this.#location] = MARKING.BLANK;
  }

  /**
   * @param {string} mark O / X
   */
  markD(mark) {
    this.#map[MOVING.U][this.#location] = MARKING.BLANK;
    this.#map[MOVING.D][this.#location] = mark;
  }

  /**
   * @param {number} location
   */
  setLocation(location) {
    this.#location = location;
  }

  getLocation() {
    return this.#location;
  }

  getMarkingPaper() {
    return this.#map;
  }
}

module.exports = Player;

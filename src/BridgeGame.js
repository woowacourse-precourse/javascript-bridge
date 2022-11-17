const Validation = require('./Validation');

/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #userPosition;

  constructor() {
    this.#userPosition = null;
  }

  static replaceString(value) {
    Validation.number(value);
    const [TOP_NUMBER, TOP] = [0, 'D'];
    const [BOTTOM_NUMBER, BOTTOM] = [1, 'U'];

    if (value === TOP_NUMBER) return TOP;
    if (value === BOTTOM_NUMBER) return BOTTOM;

    return Validation.throwError(Validation.RANGE_ERROR_TEXT);
  }

  isBeforeStart() {
    return this.#userPosition === null;
  }

  setFirstPosition() {
    this.#userPosition = 0;

    return this.#userPosition;
  }

  findUserPosition() {
    return this.#userPosition;
  }

  move() {
    if (this.isBeforeStart()) {
      return this.setFirstPosition();
    }

    this.#userPosition += 1;

    return this.#userPosition;
  }

  retry() {
    this.#userPosition = null;

    return this.#userPosition;
  }

  isBridgeEnd(arrayLength) {
    const MAX_INDEX_POINT = arrayLength - 1;
    const CURRENT_INDEX = this.findUserPosition();

    return MAX_INDEX_POINT === CURRENT_INDEX;
  }
}

module.exports = BridgeGame;

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

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {}
}

module.exports = BridgeGame;

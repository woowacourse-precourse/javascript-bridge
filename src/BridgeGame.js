// @type-check
const Bridge = require('./Model/Bridge');
const Selected = require('./Model/Selected');
const TryCnt = require('./Model/TryCnt');
const { INPUT_MESSAGE } = require('./Utils/Constant');

/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  /** @type {Selected} */
  #selected;

  /** @type {TryCnt} */
  #tryCnt;

  /** @type {boolean|undefined[]} */
  #result;

  /** @type {Bridge} */
  #bridge;

  /**
   *
   * @param {Selected} selected
   * @param {TryCnt} tryCnt
   */
  constructor(selected, tryCnt) {
    this.#selected = selected;
    this.#tryCnt = tryCnt;
    this.#result = Array.from({ length: 2 }, () => []);
  }

  /** @returns {number} */
  get totalLevel() {
    return this.#bridge.length;
  }

  /** @returns {number} */
  get levelCnt() {
    return this.#selected.level;
  }

  /** @returns {number} */
  get tryNumber() {
    return this.#tryCnt.cnt;
  }

  /** @returns {boolean|undefined[]} */
  get result() {
    this.#setResultMap();
    return this.#result;
  }

  /**
   *
   * @param {Bridge} bridge
   */
  createBridge(bridge) {
    this.#bridge = bridge;
  }

  /**
   *
   * @returns {boolean}
   */
  isReMoving() {
    return this.isWin() && this.totalLevel !== this.levelCnt;
  }

  /**
   *
   * @returns {boolean}
   */
  isEnd() {
    return this.isWin() && this.totalLevel === this.levelCnt;
  }

  /**
   *
   * @returns {boolean}
   */
  isWin() {
    for (let level = 0; level < this.levelCnt; level += 1) {
      if (!this.#isCorrect(level)) return false;
    }
    return true;
  }

  #setInitialResultMap() {
    const length = this.levelCnt;
    this.#result = Array.from({ length: 2 }, () =>
      Array.from({ length }, () => undefined),
    );
  }

  /**
   *
   * @param {number} level
   * @returns {boolean}
   */
  #isCorrect(level) {
    return this.#bridge.getElement(level) === this.#selected.getElement(level);
  }

  #setResultMap() {
    this.#setInitialResultMap();
    for (let level = 0; level < this.levelCnt; level += 1) {
      this.#setResultElement(level);
    }
  }

  /**
   *
   * @param {number} level
   * @returns {undefined}
   */
  #setResultElement(level) {
    if (this.#isCorrect(level)) {
      return this.#setBoolean(level, true);
    }
    return this.#setBoolean(level, false);
  }

  /**
   *
   * @param {number} level
   * @param {boolean} isCorrect
   */
  #setBoolean(level, isCorrect) {
    if (this.#selected.getElement(level) === INPUT_MESSAGE.UP)
      this.#result[0][level] = isCorrect;
    else if (this.#selected.getElement(level) === INPUT_MESSAGE.DOWN)
      this.#result[1][level] = isCorrect;
  }

  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   * 
   * @param {number} input
   */
  move(input) {
    this.#selected.addElement(input);
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {
    this.#selected.reset();
    this.#tryCnt.add();
  }
}

module.exports = BridgeGame;

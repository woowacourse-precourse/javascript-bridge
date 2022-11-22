// @ts-check
const { GAME_STATUS } = require('../constants');

/**
 * @typedef {Object} Bridge
 * @property {function(string, number): boolean} compare
 * @property {function(number): boolean} canMoveMore
 * @property {function(string[]): string} getMoveResult
 */

class BridgeGame {
  /** @type {Bridge} */
  #bridge;
  /** @type {string[]} */
  #inputs;

  /**
   * @param {Bridge} bridgeInstance Bridge 클래스의 인스턴스
   */
  constructor(bridgeInstance) {
    this.#bridge = bridgeInstance;
    this.#inputs = [];
  }

  retry() {
    this.#inputs = [];
  }

  /**
   * @param {string} input 플레이어의 입력
   */
  move(input) {
    if (this.#bridge.canMoveMore(this.#inputs.length)) {
      this.#inputs.push(input);
    }
  }

  /**
   * @return {number} gameStatus
   */
  getGameStatus() {
    if (this.#isGameOver()) return GAME_STATUS.OVER;
    if (this.#isGameEnd()) return GAME_STATUS.END;
    return GAME_STATUS.PROCEEDING;
  }

  /**
   * @return {string} 현재 다리결과를 반환
   */
  getMoveResult() {
    return this.#bridge.getMoveResult(this.#inputs);
  }

  /**
   * @return {boolean}
   */
  #isGameEnd() {
    if (!this.#bridge.canMoveMore(this.#inputs.length)) {
      return true;
    }
    return false;
  }

  /**
   * @return {boolean}
   */
  #isGameOver() {
    const lastInputIdx = this.#inputs.length - 1;

    if (!this.#bridge.compare(this.#inputs[lastInputIdx], lastInputIdx)) {
      return true;
    }
    return false;
  }
}

module.exports = BridgeGame;

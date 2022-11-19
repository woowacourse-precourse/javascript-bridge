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
  /** @type {number} */
  #gameStatus;

  /**
   * @param {Bridge} bridgeInstance Bridge 클래스의 인스턴스
   */
  constructor(bridgeInstance) {
    this.#bridge = bridgeInstance;
    this.#inputs = [];
    this.#gameStatus = GAME_STATUS.PROCEEDING;
  }

  retry() {
    this.#inputs = [];
    this.#gameStatus = GAME_STATUS.PROCEEDING;
  }

  /**
   * @typedef {Object} resultMap
   * @property {string} moveResult
   * @property {number} gameStatus
   */

  /**
   * @param {string | null} input 플레이어의 입력
   * @return {resultMap} 출력할 map을 반환
   */
  move(input = null) {
    if (input && this.#bridge.canMoveMore(this.#inputs.length)) {
      this.#inputs.push(input);
    }

    this.#refreshGameStatus();
    return this.#getResultMap();
  }

  #refreshGameStatus() {
    this.#checkGameEnd();
    this.#checkGameOver();
  }

  /**
   * @return {resultMap} 출력할 map을 반환
   */
  #getResultMap() {
    return {
      moveResult: this.#bridge.getMoveResult(this.#inputs),
      gameStatus: this.#gameStatus,
    };
  }

  #checkGameEnd() {
    if (!this.#bridge.canMoveMore(this.#inputs.length)) {
      this.#gameStatus = GAME_STATUS.END;
    }
  }

  #checkGameOver() {
    const lastInputIdx = this.#inputs.length - 1;

    if (!this.#bridge.compare(this.#inputs[lastInputIdx], lastInputIdx)) {
      this.#gameStatus = GAME_STATUS.OVER;
    }
  }
}

module.exports = BridgeGame;

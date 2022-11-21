const BridgeMaker = require('./BridgeMaker');
const { generate } = require('./BridgeRandomNumberGenerator');

/**
 * @typedef {object} GameStatus
 * @property {number} accMoveCount
 * @property {number} curMoveCount
 * @property {string[]} movedRoutes
 */

class BridgeGameStatus {
  /** @type {string[]} */
  #bridge;

  /** @type {GameStatus} */
  #gameStatus;

  /**
   * @param {number} size
   */
  constructor(size) {
    this.#bridge = BridgeMaker.makeBridge(size, generate);
    this.#gameStatus = { accMoveCount: 0, curMoveCount: 0, movedRoutes: [] };
  }

  /**
   * @param {GameStatus} status
   * @returns {GameStatus}
   */
  setGameStatus(status) {
    this.#gameStatus = status;

    return this.#gameStatus;
  }

  getBridge() {
    return this.#bridge;
  }

  getGameStatus() {
    return this.#gameStatus;
  }
}

module.exports = BridgeGameStatus;

// @ts-check
const BridgeMaker = require('./BridgeMaker');
const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator');
const { GAME_STATUS, BRIDGE } = require('./constants');

/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  /** @type {string[]} */
  #bridge;
  /** @type {string[]} */
  #inputs;
  /** @type {number} */
  #gameStatus;

  /**
   * @param {number} size 입력받은 다리의 길이
   */
  constructor(size) {
    this.#bridge = BridgeMaker.makeBridge(size, BridgeRandomNumberGenerator.generate);
    this.#inputs = [];
    this.#gameStatus = GAME_STATUS.PROCEEDING;
  }

  /**
   * @typedef {Object} resultMap
   * @property {string} resultToString
   * @property {number} gameStatus
   */

  /**
   * @param {string} input 플레이어의 입력
   * @return {resultMap} 출력할 map을 반환
   */
  move(input) {
    if (this.#inputs.length < this.#bridge.length) {
      this.#inputs.push(input);
    }
    this.#checkGameEnd();

    return this.getResultMap();
  }

  #checkGameEnd() {
    if (this.#bridge.length === this.#inputs.length) {
      this.#gameStatus = GAME_STATUS.END;
    }
  }

  /**
   * @return {resultMap} 출력할 map을 반환
   */
  getResultMap() {
    const abovePartString = `${BRIDGE.START} ${this.#makeAbovePart()} ${BRIDGE.END}`;
    const belowPartString = `${BRIDGE.START} ${this.#makeBelowPart()} ${BRIDGE.END}`;
    const resultToString = `${abovePartString}\n${belowPartString}`;

    return {
      resultToString,
      gameStatus: this.#gameStatus,
    };
  }

  /**
   * @return {string} 출력할 map의 윗부분
   */
  #makeAbovePart() {
    const abovePart = this.#inputs.map((input, idx) => {
      if (input !== BRIDGE.ABOVE) return BRIDGE.BLANK;
      if (input === this.#bridge[idx]) return BRIDGE.MOVE_SUCCESS;
      this.#gameStatus = GAME_STATUS.OVER;
      return BRIDGE.MOVE_FAIL;
    });

    return abovePart.join(BRIDGE.JOIN);
  }

  /**
   * @return {string} 출력할 map의 아랫부분
   */
  #makeBelowPart() {
    const belowPart = this.#inputs.map((input, idx) => {
      if (input !== BRIDGE.BELOW) return BRIDGE.BLANK;
      if (input === this.#bridge[idx]) return BRIDGE.MOVE_SUCCESS;
      this.#gameStatus = GAME_STATUS.OVER;
      return BRIDGE.MOVE_FAIL;
    });

    return belowPart.join(BRIDGE.JOIN);
  }

  retry() {
    this.#inputs = [];
    this.#gameStatus = GAME_STATUS.PROCEEDING;
  }
}

module.exports = BridgeGame;

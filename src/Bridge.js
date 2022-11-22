// @ts-check
const BridgeMaker = require('./BridgeMaker');
const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator');
const { BRIDGE } = require('./constants');

class Bridge {
  /** @type {string[]} */
  #bridge;

  constructor(size) {
    this.#bridge = BridgeMaker.makeBridge(size, BridgeRandomNumberGenerator.generate);
  }

  /**
   * @param {string} value
   * @param {number} idx
   * @returns {boolean}
   */
  compare(value, idx) {
    return value === this.#bridge[idx];
  }

  /**
   * @param {number} moveCount 움직인 횟수
   * @returns {boolean}
   */
  canMoveMore(moveCount) {
    return moveCount < this.#bridge.length;
  }

  /**
   * @param {string[]} inputs 비교할 플레이어의 입력
   * @return {string} 출력할 문자열을 반환
   */
  getMoveResult(inputs) {
    const abovePartString = `${BRIDGE.START} ${this.#makeAbovePart(inputs)} ${BRIDGE.END}`;
    const belowPartString = `${BRIDGE.START} ${this.#makeBelowPart(inputs)} ${BRIDGE.END}`;
    const moveResult = `${abovePartString}\n${belowPartString}`;

    return moveResult;
  }

  /**
   * @param {string[]} inputs 비교할 플레이어의 입력
   * @return {string} 출력할 map의 윗부분
   */
  #makeAbovePart(inputs) {
    return this.#makePart(BRIDGE.ABOVE, inputs);
  }

  /**
   * @param {string[]} inputs 비교할 플레이어의 입력
   * @return {string} 출력할 map의 아랫부분
   */
  #makeBelowPart(inputs) {
    return this.#makePart(BRIDGE.BELOW, inputs);
  }

  /**
   * @param {string} whichPart
   * @param {string[]} inputs
   * @return {string}
   */
  #makePart(whichPart, inputs) {
    const part = inputs.map((input, idx) => {
      if (input !== whichPart) return BRIDGE.BLANK;
      if (this.compare(input, idx)) return BRIDGE.MOVE_SUCCESS;
      return BRIDGE.MOVE_FAIL;
    });

    return part.join(BRIDGE.JOIN);
  }
}

module.exports = Bridge;

// @ts-check

const BridgeMaker = require('./BridgeMaker');
const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator');
const { BRIDGE } = require('./constants');

class Bridge {
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
    return !(moveCount >= this.#bridge.length);
  }

  /**
   * @param {string[]} inputs 비교할 플레이어의 입력
   * @return {string} 출력할 문자열을 반환
   */
  getResultToString(inputs) {
    const abovePartString = `${BRIDGE.START} ${this.#makeAbovePart(inputs)} ${BRIDGE.END}`;
    const belowPartString = `${BRIDGE.START} ${this.#makeBelowPart(inputs)} ${BRIDGE.END}`;
    const resultToString = `${abovePartString}\n${belowPartString}`;

    return resultToString;
  }

  /**
   * @param {string[]} inputs 비교할 플레이어의 입력
   * @return {string} 출력할 map의 윗부분
   */
  #makeAbovePart(inputs) {
    const abovePart = inputs.map((input, idx) => {
      if (input !== BRIDGE.ABOVE) return BRIDGE.BLANK;
      if (this.compare(input, idx)) return BRIDGE.MOVE_SUCCESS;
      return BRIDGE.MOVE_FAIL;
    });

    return abovePart.join(BRIDGE.JOIN);
  }

  /**
   * @param {string[]} inputs 비교할 플레이어의 입력
   * @return {string} 출력할 map의 아랫부분
   */
  #makeBelowPart(inputs) {
    const belowPart = inputs.map((input, idx) => {
      if (input !== BRIDGE.BELOW) return BRIDGE.BLANK;
      if (this.compare(input, idx)) return BRIDGE.MOVE_SUCCESS;
      return BRIDGE.MOVE_FAIL;
    });

    return belowPart.join(BRIDGE.JOIN);
  }
}

module.exports = Bridge;

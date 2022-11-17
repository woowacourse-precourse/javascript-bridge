const BridgeMaker = require('./BridgeMaker');
const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator');

/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #bridge;
  #inputs;
  #gameStatus;

  /**
   * @param {number} size 입력받은 다리의 길이
   */
  constructor(size) {
    this.#bridge = BridgeMaker.makeBridge(size, BridgeRandomNumberGenerator.generate);
    this.#inputs = [];
    this.#gameStatus = 0;
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
      this.#gameStatus = 2;
    }
  }

  /**
   * @return {resultMap} 출력할 map을 반환
   */
  getResultMap() {
    const upperPart = this.#makeUpperPart();
    const lowerPart = this.#makeLowerPart();
    const resultToString = `[ ${upperPart} ]\n[ ${lowerPart} ]`;

    return {
      resultToString,
      gameStatus: this.#gameStatus,
    };
  }

  /**
   * @return {string} 출력할 map의 윗부분
   */
  #makeUpperPart() {
    const upperPart = this.#inputs.map((e, i) => {
      if (e !== 'U') return ' ';
      if (e === this.#bridge[i]) return 'O';
      this.#gameStatus = 1;
      return 'X';
    });

    return upperPart.join(' | ');
  }

  /**
   * @return {string} 출력할 map의 아랫부분
   */
  #makeLowerPart() {
    const lowerPart = this.#inputs.map((e, i) => {
      if (e !== 'D') return ' ';
      if (e === this.#bridge[i]) return 'O';
      this.#gameStatus = 1;
      return 'X';
    });

    return lowerPart.join(' | ');
  }

  retry() {
    this.#inputs = [];
    this.#gameStatus = 0;
  }
}

module.exports = BridgeGame;

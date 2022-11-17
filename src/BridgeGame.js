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

  getGameStatus() {
    return this.#gameStatus;
  }

  /**
  * @typedef {object} MoveResultMap
  * @property {string} upperPart
  * @property {string} lowerPart
  * @property {boolean} gameStatus
  */

  /**
   * @param {string} input 플레이어의 입력
   * @return {MoveResultMap} 출력할 map을 반환
   */
  move(input) {
    if (this.#inputs.length < this.#bridge.length) {
      this.#inputs.push(input);
    }
    this.checkInputsLength();

    return {
      upperPart: this.makeUpperPart(),
      lowerPart: this.makeLowerPart(),
      gameStatus: this.#gameStatus,
    };
  }

  checkInputsLength() {
    if (this.#bridge.length === this.#inputs.length) {
      this.#gameStatus = 2;
    }
  }

  /**
   * @return {string} 출력할 map의 윗부분
   */
  makeUpperPart() {
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
  makeLowerPart() {
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

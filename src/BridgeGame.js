const { makeBridge } = require('./BridgeMaker');
const { generate } = require('./BridgeRandomNumberGenerator');
const { checkGameOver, checkSpaceCanMove } = require('./utils/Checker');
const { convertToBridgeMap } = require('./utils/Converter');
const { judgeGameSuccess } = require('./utils/Judge');

/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #bridge;
  #tryCnt;
  #movingState;
  constructor(n) {
    this.#bridge = makeBridge(n, generate);
    this.#tryCnt = 1;
    this.#movingState = [];
  }

  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * @param {string} dir 이동 방향
   */
  move(dir) {
    this.#movingState.push([
      dir,
      checkSpaceCanMove(dir, this.#bridge[this.#movingState.length]),
    ]);
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   */
  retry() {
    this.#movingState = [];
    this.#tryCnt += 1;
  }

  /**
   * 게임 종료 여부를 확인한다.
   * @returns {boolean}
   */
  getIsGameOver() {
    return checkGameOver(this.#movingState, this.#bridge);
  }

  /**
   * 게임 성공 여부를 확인한다.
   * @returns {boolean}
   */
  getIsGameSuccess() {
    return judgeGameSuccess(this.#movingState, this.#bridge);
  }

  /**
   * 게임 실행 횟수를 조회한다.
   * @returns {number}
   */
  getTryCnt() {
    return this.#tryCnt;
  }

  /**
   * 게임 이동 상태를 문자열로 반환한다.
   * @returns {string}
   */
  getMovingState() {
    return convertToBridgeMap(this.#movingState);
  }
}

module.exports = BridgeGame;

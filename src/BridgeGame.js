const { makeBridge } = require('./BridgeMaker');
const { generate } = require('./BridgeRandomNumberGenerator');
const Checker = require('./utils/Checker');
const Judge = require('./utils/Judge');

/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #bridge;
  #tryCnt;
  #movingState;
  constructor(n) {
    this.#bridge = makeBridge(n, generate);
    this.#tryCnt = 0;
    this.init();
  }

  /**
   * 다리 건너기 게임 라운드 초기화
   */
  init() {
    this.#movingState = [];
    this.countTry();
  }

  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * @param {string} dir 이동 방향
   */
  move(dir) {
    this.#movingState.push([
      dir,
      Checker.checkSpaceCanMove(dir, this.#bridge[this.#movingState.length]),
    ]);
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   */
  retry() {
    this.init();
  }

  /**
   * 게임 시도 횟수를 센다.
   */
  countTry() {
    this.#tryCnt++;
  }

  /**
   * 게임 종료 여부를 확인한다.
   * @returns {boolean}
   */
  checkGameOver() {
    return Checker.checkGameOver(this.#movingState, this.#bridge);
  }

  /**
   * 게임 성공 여부를 확인한다.
   * @returns {boolean}
   */
  judgeGameSuccess() {
    return Judge.judgeGameSuccess(this.#movingState, this.#bridge);
  }

  /**
   * 게임 실행 횟수를 조회한다.
   * @returns {number}
   */
  getTryCnt() {
    return this.#tryCnt;
  }

  /**
   * 게임 이동 상태를 조회한다.
   * @returns {[string, boolean][]}
   */
  getMovingState() {
    return this.#movingState;
  }
}

module.exports = BridgeGame;

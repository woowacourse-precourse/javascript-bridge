const { makeBridge } = require('./BridgeMaker');
const { generate } = require('./BridgeRandomNumberGenerator');
const Checker = require('./utils/Checker');

/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #bridge;
  constructor(n) {
    this.#bridge = makeBridge(n, generate);
    this.tryCnt = 0;
    this.init();
  }

  /**
   * 다리 건너기 게임 라운드 초기화
   */
  init() {
    this.movingState = [];
    this.countTry();
  }

  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * @param {string} dir 이동 방향
   * @returns {[string, boolean][]}
   */
  move(dir) {
    this.movingState.push([
      dir,
      Checker.checkSpaceCanMove(dir, this.#bridge[this.movingState.length]),
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
    this.tryCnt++;
  }
}

module.exports = BridgeGame;

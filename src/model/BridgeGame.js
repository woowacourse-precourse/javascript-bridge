const { RULES } = require('../constants/index.js');

/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  /** @type {number} #retryCount - 재시도 횟수 */
  /** @type {number} #turn - 사용자가 지나고 있는 다리의 index  */
  #retryCount;

  #turn;

  constructor() {
    this.#retryCount = 1;
    this.#turn = 0;
  }

  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * @param {string} thisTurnAnswer 이번 다리의 정답 (U 또는 D)
   * @param {string} move 사용자가 선택한 위치 (U 또는 D)
   * @param {StepResult} stepResult
   * @return isThisTurnCorrect의 리턴값에 따라 stepResult의 메소드가 실행된다.
   */
  move(thisTurnAnswer, move, stepResult) {
    if (this.#turn > 0) stepResult.insert(RULES.SEPERATION, RULES.SEPERATION);
    this.#turn += 1;

    if (this.isThisTurnCorrect(thisTurnAnswer, move)) return stepResult.correctStepRecord(move);

    return stepResult.wrongStepRecord(move);
  }

  /**
   * 이번턴의 결과가 정답인지 아닌지 반환하는 메소드
   * @param {string} thisTurnAnswer 이번 다리의 정답 (U 또는 D)
   * @param {string} move 사용자가 선택한 위치 (U 또는 D)
   * @return {boolean}
   */
  isThisTurnCorrect(thisTurnAnswer, move) {
    return thisTurnAnswer === move;
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   */
  retry() {
    this.#turn = 0;
    this.#retryCount += 1;
  }

  get retryCount() {
    return this.#retryCount;
  }

  get turn() {
    return this.#turn;
  }
}

module.exports = BridgeGame;

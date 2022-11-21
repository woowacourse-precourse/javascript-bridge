/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #retryCount;

  #turn;

  constructor() {
    this.#retryCount = 1;
    this.#turn = 0;
  }

  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move(thisTurnAnswer, move, stepResult) {
    if (this.#turn > 0) stepResult.insert('|', '|');
    this.#turn += 1;

    if (this.isThisTurnCorrect(thisTurnAnswer, move)) return stepResult.correctStepRecord(move);

    return stepResult.wrongStepRecord(move);
  }

  isThisTurnCorrect(thisTurnAnswer, move) {
    return thisTurnAnswer === move;
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {
    this.#turn = 0;
    this.#retryCount += 1;
  }

  get retryCount() {
    return this.#retryCount;
  }

  set retryCount(value) {
    this.#retryCount = value;
  }

  get turn() {
    return this.#turn;
  }

  set turn(value) {
    this.#turn = value;
  }
}

module.exports = BridgeGame;

/* eslint-disable class-methods-use-this */

/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #bridge;
  #moveHistory;
  #tryNum;

  constructor(bridge) {
    this.#bridge = bridge;
    this.#moveHistory = [];
    this.#tryNum = 1;
  }
  getMoveHistory() {
    return [...this.#moveHistory];
  }

  getTryNum() {
    return this.#tryNum;
  }
  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move(moving) {
    this.#moveHistory.push(moving);
    return this.checkMove();
  }
  checkMove() {
    const index = this.#moveHistory.length - 1;
    if (this.#bridge[index] === this.#moveHistory[index]) return true;
    return false;
  }
  isFinished() {
    const index = this.#moveHistory.length - 1;
    const bridgeSize = this.#bridge.length - 1;
    if (index === bridgeSize) return true;
    return false;
  }
  isSuccess() {}
  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry(app) {
    this.#moveHistory = [];
    this.#tryNum += 1;
    app.startGame();
  }
}

module.exports = BridgeGame;

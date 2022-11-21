/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   *
   */
  ABLE_TO_MOVE_MARKER = "O";
  UNABLE_TO_MOVE_MARKER = "X";
  UP_DIRECTION = "U";

  #attemptCount = 1;
  #upBridge = [];
  #downBridge = [];
  #bridge;

  constructor(bridge) {
    this.#bridge = bridge;
  }

  checkBridgeCrossed() {
    return this.#upBridge.length === this.#bridge.length;
  }

  canMove(nextDirection) {
    return nextDirection === this.#bridge[this.#upBridge.length];
  }

  move(nextDirection) {
    this.mark(nextDirection, this.ABLE_TO_MOVE_MARKER);
  }

  stopMoving(nextDirection) {
    this.mark(nextDirection, this.UNABLE_TO_MOVE_MARKER);
  }

  mark(nextDirection, marker) {
    if (nextDirection === this.UP_DIRECTION) {
      this.#upBridge.push(marker);
      this.#downBridge.push(" ");
    } else {
      this.#downBridge.push(marker);
      this.#upBridge.push(" ");
    }
  }

  getBridgeMap() {
    return [this.#upBridge, this.#downBridge];
  }

  retry() {
    this.#downBridge.length = 0;
    this.#upBridge.length = 0;
    this.#attemptCount++;
  }
}

module.exports = BridgeGame;

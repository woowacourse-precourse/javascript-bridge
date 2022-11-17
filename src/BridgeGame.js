/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #bridge = [];
  #movingCount = 0;
  #downBridgeRecord = [];
  #upBridgeRecord = [];

  setBridge(bridge) {
    this.#bridge = bridge;
  }
  getBridge() {
    return this.#bridge;
  }
  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move(direction) {
    if (direction === 'U') return this.goToUpBridge();
    if (direction === 'D') return this.goToDownBridge();
  }
  goToUpBridge() {
    this.#downBridgeRecord.push(' ');
    const moveable = this.#bridge[this.#movingCount] === 1 ? 'O' : 'X';
    this.#upBridgeRecord.push(moveable);
    this.#movingCount += 1;
    return { upBridgeRecord: this.#upBridgeRecord, downBridgeRecord: this.#downBridgeRecord };
  }
  goToDownBridge() {
    this.#upBridgeRecord.push(' ');
    const moveable = this.#bridge[this.#movingCount] === 0 ? 'O' : 'X';
    this.#downBridgeRecord.push(moveable);
    this.#movingCount += 1;
    return { upBridgeRecord: this.#upBridgeRecord, downBridgeRecord: this.#downBridgeRecord };
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {}
}

module.exports = BridgeGame;

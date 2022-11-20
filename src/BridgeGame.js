/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #bridge = [];
  #movingCount = 0;
  #downBridgeRecord = [];
  #upBridgeRecord = [];
  #tryCount = 1;

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
    let fail = false;
    let success = false;
    this.#downBridgeRecord.push(' ');
    const moveable = this.#bridge[this.#movingCount] === 1 ? 'O' : 'X';
    if (moveable === 'X') fail = true;
    this.#upBridgeRecord.push(moveable);
    this.#movingCount += 1;
    success = this.checkSuccess(moveable);
    return { fail: fail, success: success };
  }
  goToDownBridge() {
    let fail = false;
    let success = false;
    this.#upBridgeRecord.push(' ');
    const moveable = this.#bridge[this.#movingCount] === 0 ? 'O' : 'X';
    if (moveable === 'X') fail = true;
    this.#downBridgeRecord.push(moveable);
    this.#movingCount += 1;
    success = this.checkSuccess(moveable);
    return { fail: fail, success: success };
  }
  checkSuccess(moveable) {
    if (moveable === 'O' && this.#bridge.length === this.#movingCount) return true;
    return false;
  }
  getTryCount() {
    return this.#tryCount;
  }
  getBridgeRecord() {
    return { upBridgeRecord: this.#upBridgeRecord, downBridgeRecord: this.#downBridgeRecord };
  }
  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry(callback) {
    this.#tryCount += 1;
    this.#movingCount = 0;
    this.#downBridgeRecord = [];
    this.#upBridgeRecord = [];
    callback();
  }
}

module.exports = BridgeGame;

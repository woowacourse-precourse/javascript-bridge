/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #bridge;
  #moveCount;

  constructor(bridge, moveCount) {
    this.#bridge = bridge;
    this.#moveCount = moveCount;
  }

  isMove(direction) {
    console.log(this.#bridge);
    return direction === this.#bridge[this.#moveCount];
  }

  isCompletion() {
    return this.#bridge.length === this.#moveCount;
  }

  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move() {
    this.#moveCount += 1;
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {
    this.#moveCount = 0;
  }

  convertBridge(floor) {
    return this.#bridge.slice(0, this.#moveCount).map((current) => {
      if (current === floor) {
        return 'O';
      }
      return ' ';
    });
  }

  getConvertedBridge() {
    const upstairBridge = this.convertBridge('U');
    const downstairBridge = this.convertBridge('D');
    return { upstairBridge, downstairBridge };
  }

  getFailureBridge({ upstairBridge, downstairBridge }) {
    if (this.#bridge[this.#moveCount] === 'U') {
      upstairBridge.push(' ');
      downstairBridge.push('X');
    } else if (this.#bridge[this.#moveCount] === 'D') {
      upstairBridge.push('X');
      downstairBridge.push(' ');
    }
    return { upstairBridge, downstairBridge };
  }
}

module.exports = BridgeGame;

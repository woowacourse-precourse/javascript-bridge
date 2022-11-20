/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #bridge;
  #movings = [];

  setBridge(bridge) {
    this.#bridge = bridge;
  };

  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move(moving) {
    this.#movings.push(moving);
  };

  isFail() {
    const idx = this.#movings.length - 1;
    if (this.#movings[idx] === this.#bridge[idx]) return false;
    return true;
  };

  getMoveResult() {
    const moveUp = Array.from({length: this.#movings.length}, () => ' ');
    const moveDown = Array.from({length: this.#movings.length}, () => ' ');
    this.#movings.forEach((moving, idx) => {
      if (moving === 'U' && moving === this.#bridge[idx]) moveUp[idx] = '0';
      if (moving === 'U' && moving !== this.#bridge[idx]) moveUp[idx] = 'X';
      if (moving === 'D' && moving === this.#bridge[idx]) moveDown[idx] = '0';
      if (moving === 'D' && moving !== this.#bridge[idx]) moveDown[idx] = 'X';
    })
    return { moveUp, moveDown };
  }

  isSuccess() {
    return this.#bridge.length === this.#movings.length;
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {}
}

module.exports = BridgeGame;

/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #bridge;
  #moving = [];
  #count = 1;

  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  setBridge(bridge) {
    this.#bridge = bridge;
  }

  move(moving) {
    this.#movings.push(moving);
  }

  isFail() {
    const idx = this.#moving.length - 1;
    if (this.#moving[idx] === this.#bridge[idx]) {
      return false;
    }
    if (this.#moving[idx] !== this.#bridge[idx]) {
      return true;
    }
  };

  isSuccess() {
    return !this.isFail() && this.#bridge.length === this.#moving.length;
  }

  getMovingResult() {
    const upBridge = Array.from({length: this.#moving.length}, () => ' ');
    const downBridge = Array.from({length: this.#moving.length}, () => ' ');
    this.#moving.forEach((answer, idx) => {
      if (answer === 'U' && answer === this.#bridge[idx]) upBridge[idx] = 'O';
      if (answer === 'U' && answer !== this.#bridge[idx]) upBridge[idx] = 'X';
      if (answer === 'D' && answer === this.#bridge[idx]) downBridge[idx] = 'O';
      if (answer === 'D' && answer !== this.#bridge[idx]) downBridge[idx] = 'X';
    })
    return { upBridge, downBridge };
  }

  getGameResult() {
    return {
      upBridge: this.getMoveResult().upBridge,
      downBridge: this.getMoveResult().downBridge,
      isSuccess: this.isSuccess(),
      count: this.#count
    }
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {
    this.#moving = [];
    this.#count += 1;
  }
}

module.exports = BridgeGame;

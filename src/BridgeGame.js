/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #bridge;
  #movings = [];
  #tryCount = 1;

  setBridge(bridge) {
    this.#bridge = bridge;
  };

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
    return !this.isFail() && this.#bridge.length === this.#movings.length;
  }

  retry() {
    this.#movings = [];
    this.#tryCount += 1;
  }

  getGameResult() {
    return {
      moveUp: this.getMoveResult().moveUp,
      moveDown: this.getMoveResult().moveDown,
      isSuccess: this.isSuccess(),
      tryCount: this.#tryCount
    }
  }
}

module.exports = BridgeGame;

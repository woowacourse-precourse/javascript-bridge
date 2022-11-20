const Bridge = require('./Bridge');

/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #bridge;
  #currentIndex;

  constructor() {
    this.#currentIndex = 0;
    this.topSide = [];
    this.downSide = [];
  }

  setBridge(size) {
    const bridge = new Bridge(size);
    this.#bridge = bridge.getBridge();
    console.log(this.#bridge);
  }

  setTopSide(isSuccess) {
    if (isSuccess) {
      this.topSide.push('O');
      this.downSide.push(' ');
    }

    if (!isSuccess) {
      this.topSide.push('X');
      this.downSide.push(' ');
    }
  }

  setDownSide(isSuccess) {
    if (isSuccess) {
      this.topSide.push(' ');
      this.downSide.push('O');
    }

    if (!isSuccess) {
      this.topSide.push(' ');
      this.downSide.push('X');
    }
  }

  getMap() {
    return { topSide: this.topSide, downSide: this.downSide };
  }
  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move(next) {
    const isSuccess = next === this.#bridge[this.#currentIndex] ? 1 : 0;

    if (next === 'U') this.setTopSide(isSuccess);
    if (next === 'D') this.setDownSide(isSuccess);

    this.#currentIndex += 1;

    return isSuccess;
  }

  isEnd() {
    return this.#currentIndex === this.#bridge.length;
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {
    this.initialization();
  }

  initialization() {
    this.#currentIndex = 0;
    this.topSide = [];
    this.downSide = [];
  }
}

module.exports = BridgeGame;

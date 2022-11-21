const { BridgeMaker } = require('./BridgeMaker');
const { Utils } = require('./Utils');

class BridgeGame {
  #bridge;
  #tryCount;
  #step;

  constructor(size) {
    this.#tryCount = 1;
    this.#step = 0;
		this.#bridge = BridgeMaker.makeBridge(size, Utils.generateRandomNumber);
  }
  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  isRightStep(move) {
    if (this.#bridge[this.#step - 1] === move) {
      return true;
    }
    return false;
  }

  move(move) {
    this.#step += 1;
    if (this.isRightStep(move)) {
      return true;
    }
    return false;
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {
    this.#step = 0;
    this.#tryCount += 1;
    }
}

module.exports = {
  BridgeGame,
};

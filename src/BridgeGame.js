const Bridge = require('./Bridge');
const { printMap } = require('./OutputView');

/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #bridge;
  #index;
  constructor(length) {
    this.#bridge = new Bridge(length);
    this.#index = 0;
  }
  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move(input) {
    const CAN_MOVE = this.#bridge.movable(this.#index, input);
    printMap(this.#bridge, this.#index, CAN_MOVE);
    this.#index += 1;
    return CAN_MOVE;
  }
  isEnd() {
    return this.#bridge.checkLength(this.#index);
  }
  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {}
}

module.exports = BridgeGame;

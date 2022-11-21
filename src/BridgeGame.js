const {
  BRIDGE: { STRING_UP, STRING_DOWN, SUCCESS, FAIL, BLANK },
} = require('./constant/constant');
/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #up;

  #down;

  #index;

  constructor() {
    this.#up = [];
    this.#down = [];
    this.#index = -1;
  }

  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move(bridge, moving) {
    this.#index += 1;
    if (moving === STRING_UP) {
      this.#up.push(bridge[this.#index] === STRING_UP ? SUCCESS : FAIL);
      this.#down.push(BLANK);
      return;
    }

    this.#down.push(bridge[this.#index] === STRING_DOWN ? SUCCESS : FAIL);
    this.#up.push(BLANK);
  }

  isFail(bridge, moving) {
    if (
      (moving === STRING_UP && bridge[this.#index] === STRING_DOWN) ||
      (moving === STRING_DOWN && bridge[this.#index] === STRING_UP)
    ) {
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
    this.#index = -1;
    this.#up = [];
    this.#down = [];
  }

  getMoving() {
    return { up: this.#up, down: this.#down };
  }

  getIndex() {
    return this.#index;
  }
}

module.exports = BridgeGame;

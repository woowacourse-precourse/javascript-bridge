const { GAME_STATE } = require("./Constants");

class BridgeGame {
  #current;
  #state;

  constructor() {
    this.#current = 0;
    this.#state = [];
  }

  move(bridge, direction) {
    if (bridge[this.#current] === direction) {
      this.#state.push([direction, true]);
      this.#current++;
      if (this.#current === bridge.length) return GAME_STATE.SUCCESS;
      return GAME_STATE.PASS;
    }
    this.#state.push([direction, false]);
    return GAME_STATE.FAIL;
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {}

  getCurrentState() {
    return this.#state;
  }
}

module.exports = BridgeGame;

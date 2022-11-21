const { COMMAND, WORD } = require("./Constants/Constants");

/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #bridge;
  #currentBridge;
  #up;
  #down;

  constructor(bridge) {
    this.#bridge = bridge;
    console.log(this.#bridge);
    this.#currentBridge = [];
    this.#up = [];
    this.#down = [];
  }
  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move(moving) {
    moving === COMMAND.UP ? this.#currentBridge.push(COMMAND.UP) : this.#currentBridge.push(COMMAND.DOWN);
    this.sketch(this.#bridge, this.#currentBridge, moving);
    return [this.#up, this.#down];
  }

  sketch(bridge, currentBridge, moving) {
    if (bridge[currentBridge.length - 1] === moving) this.sketchCorrectMap(bridge, currentBridge, moving);
    if (bridge[currentBridge.length - 1] !== moving) this.sketchWrongMap(bridge, currentBridge, moving);
  }

  sketchCorrectMap(bridge, currentBridge) {
    if (currentBridge.length <= bridge.length) {
      this.#up = currentBridge.map((location) => location === COMMAND.UP ? location = WORD.CORRECT : location = WORD.EMPTY);
      this.#down = currentBridge.map((location) => location === COMMAND.DOWN ? location = WORD.CORRECT : location = WORD.EMPTY);
    }
  }

  sketchWrongMap(bridge, currentBridge, moving) {
    moving === COMMAND.UP ? this.#up.push(WORD.WRONG) : this.#down.push(WORD.WRONG);
    this.#up.length === this.#down.length - 1 ? this.#up.push(WORD.EMPTY) : this.#down.push(WORD.EMPTY);
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {}

  isGameEnd() {
    return this.#bridge.length === this.#currentBridge.length;
  }
}

module.exports = BridgeGame;

const BridgeMaker = require("./BridgeMaker");
const { generate } = require("./BridgeRandomNumberGenerator");

/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #bridge;
  #crossBridge;

  constructor() {
    this.#crossBridge = [[], []];
  }

  setBridge(size) {
    this.#bridge = BridgeMaker.makeBridge(size, generate);
  }
  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   */
  move(moving) {
    const isSuccess = this.checkBridge(moving);
    this.updateBirdge(isSuccess);
    return [isSuccess, this.#crossBridge];
  }

  updateBirdge(isSuccess) {
    const next = this.#bridge[this.#crossBridge[0].length];
    const [right, wrong] = next === "D" ? [1, 0] : [0, 1];
    this.#crossBridge[right].push(isSuccess ? " O " : "   ");
    this.#crossBridge[wrong].push(isSuccess ? "   " : " X ");
  }

  checkBridge(moving) {
    if (this.#bridge[this.#crossBridge[0].length] === moving) {
      if (this.#crossBridge[0].length + 1 === this.#bridge.length) return 2;
      return 1;
    }
    return 0;
  }

  getBridge() {
    return [[...this.#crossBridge[0]], [...this.#crossBridge[1]]];
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry(tryCount) {
    this.#crossBridge = [[], []];
    return tryCount + 1;
  }
}

module.exports = BridgeGame;

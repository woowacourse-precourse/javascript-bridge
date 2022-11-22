const BridgeMaker = require("./BridgeMaker");
const BridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator");

/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #bridge;
  #count;

  constructor() {
    this.initCount();
  }
  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move(input) {
    for (let i = 0; i < input.length; i++) {
      if (input[i] === this.#bridge[i]) continue;
      return 0; // false
    }
    if (this.#bridge.length === input.length) return 1; // success
    return 2; // next
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {}

  setBridge(num) {
    this.#bridge = BridgeMaker.makeBridge(
      num,
      BridgeRandomNumberGenerator.generate
    );
  }

  getBridge() {
    return this.#bridge;
  }

  increaseCount() {
    this.#count += 1;
  }

  initCount() {
    this.#count = 0;
  }
}

module.exports = BridgeGame;

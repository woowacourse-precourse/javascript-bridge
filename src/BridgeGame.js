const BridgeMaker = require("./BridgeMaker");
const BridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator");

/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #count = 0;
  #input = [];
  #bridge;

  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move() {
    for (let i = 0; i < this.#input.length; i++) {
      if (this.#input[i] === this.#bridge[i]) continue;
      return 0; // false
    }
    if (this.#bridge.length === this.#input.length) return 1; // success
    return 2; // next
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {
    this.increaseCount();
    while (this.#input.length) {
      this.popInput();
    }
  }

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

  getCount() {
    return this.#count;
  }

  pushInput(userReply) {
    this.#input.push(userReply);
  }

  popInput() {
    return this.#input.pop();
  }

  makeMap() {
    const obj = makeMapObj(this.#bridge, this.#input);
    const map = makeMap(this.#input, obj);
    return map;
  }
}

module.exports = BridgeGame;

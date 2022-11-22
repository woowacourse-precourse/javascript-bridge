const ERROR = require("../utils/constant");

/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #count = 1;
  #index = 0;
  #randomBridge;
  #upperBridge = [];
  #lowerBridge = [];

  get index() {
    return this.#index;
  }

  get count() {
    return this.#count;
  }

  get randomBridge() {
    return this.#randomBridge;
  }

  get isSuccess() {
    let result = true;
    if (this.#lowerBridge[this.#index - 1] === "X" || this.#upperBridge[this.#index - 1] === "X") {
      result = false;
    }
    return result;
  }

  get upperBridge() {
    return this.#upperBridge;
  }

  get lowerBridge() {
    return this.#lowerBridge;
  }

  increaseCount() {
    return this.#count++;
  }

  increaseIndex() {
    return this.#index++;
  }

  makeRandomBridge(randomBridge) {
    this.#randomBridge = randomBridge;
  }
  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move(command) {
    if (command !== "U" && command !== "D") throw new Error(ERROR.UP_DOWN_COMMAND);
    if (this.#randomBridge[this.#index] === command) {
      this.#upperBridge.push(command === "U" ? "O" : " ");
      this.#lowerBridge.push(command === "U" ? " " : "O");
    } else {
      this.#upperBridge.push(command === "U" ? "X" : " ");
      this.#lowerBridge.push(command === "U" ? " " : "X");
    }
    this.increaseIndex();
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry(retryGame) {
    this.#index = 0;
    this.#count++;
    this.#upperBridge = [];
    this.#lowerBridge = [];
    retryGame();
  }
}

module.exports = BridgeGame;

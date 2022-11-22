/**
 * 다리 건너기 게임을 관리하는 클래스
 */
const BridgeMaker = require("./BridgeMaker");
const BridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator");

class BridgeGame {
  #step = -1;
  #retryCount = 1;

  make(bridgeSize) {
    const bridge = BridgeMaker.makeBridge(bridgeSize, BridgeRandomNumberGenerator.generate);
    return bridge;
  }

  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move(bridge, direction) {
    this.#step = this.#step + 1;
    const moveResult = this.judge(bridge[this.#step], direction);

    if (moveResult === true && this.#step === bridge.length - 1) return "finish";
      
    return moveResult;
  }

  judge(step, direction) {
    return step === direction;
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry(command) {
    this.#step = -1;

    if (command === "R") {
      this.#retryCount = this.#retryCount + 1;
      return true;
    }
    return false;
  }

  getRetryCount() {
    return this.#retryCount;
  }

  getStep() {
    return this.#step;
  }
}

module.exports = BridgeGame;

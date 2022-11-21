const { INPUT_VALUE } = require("./constants/values");
/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #bridge;
  #currentBridge;

  constructor(bridge) {
    this.#bridge = bridge;
    this.#currentBridge = [];
    this.step = 0;
    this.round = 1;
  }

  getBridge() {
    return this.#bridge;
  }

  resetStep() {
    this.step = 0;
    return this.step;
  }

  addStep() {
    this.step += 1;
    return this.step;
  }

  getRound() {
    return this.round;
  }

  addRound() {
    this.round += 1;
    return this.round;
  }

  getCurrentBridge() {
    return this.#currentBridge;
  }

  resetCurrentBridge() {
    this.#currentBridge = [];
  }

  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */

  checkInputIsCorrect(inputAnswer) {
    if (inputAnswer === this.#bridge[this.step]) return true;
    return false;
  }

  checkIsLastStep(step, size) {
    return step === size ? true : false;
  }

  move(userInput) {
    if (userInput === INPUT_VALUE.UP) {
      this.#currentBridge.push([INPUT_VALUE.UP, "O"]);
    }
    if (userInput === INPUT_VALUE.DOWN) {
      this.#currentBridge.push([INPUT_VALUE.DOWN, "O"]);
    }
  }

  stop(userInput) {
    if (userInput === INPUT_VALUE.UP) {
      this.#currentBridge.push([INPUT_VALUE.UP, "X"]);
    }
    if (userInput === INPUT_VALUE.DOWN) {
      this.#currentBridge.push([INPUT_VALUE.DOWN, "X"]);
    }
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {
    this.addRound();
    this.resetStep();
    this.resetCurrentBridge();
  }
}

module.exports = BridgeGame;

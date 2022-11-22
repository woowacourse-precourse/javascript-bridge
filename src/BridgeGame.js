const { INPUT_VALUE, STATES } = require("./constants/values");
/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #bridge;
  #currentBridge;
  #step;
  #round;

  constructor(bridge, step, round) {
    this.#bridge = bridge;
    this.#currentBridge = [];
    this.#step = step;
    this.#round = round;
  }

  getBridge() {
    return this.#bridge;
  }

  resetStep() {
    this.#step = STATES.INITIAL_STEP;
  }

  getStep() {
    return this.#step;
  }

  addStep() {
    this.#step += 1;
  }

  getRound() {
    return this.#round;
  }

  addRound() {
    this.#round += 1;
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
    if (inputAnswer === this.#bridge[this.#step]) return true;
    return false;
  }

  checkIsLastStep() {
    return this.#step === this.#bridge.length - 1 ? true : false;
  }

  move(userInput) {
    if (userInput === INPUT_VALUE.UP) {
      this.#currentBridge.push([INPUT_VALUE.UP, STATES.RIGHT]);
    }

    if (userInput === INPUT_VALUE.DOWN) {
      this.#currentBridge.push([INPUT_VALUE.DOWN, STATES.RIGHT]);
    }
  }

  stop(userInput) {
    if (userInput === INPUT_VALUE.UP) {
      this.#currentBridge.push([INPUT_VALUE.UP, STATES.WRONG]);
    }

    if (userInput === INPUT_VALUE.DOWN) {
      this.#currentBridge.push([INPUT_VALUE.DOWN, STATES.WRONG]);
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

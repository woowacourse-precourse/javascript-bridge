/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #bridge;
  #currentStep = 0;
  #tryCount = 1;

  constructor(bridge) {
    this.#bridge = bridge;
  }

  getBridge() {
    return this.#bridge;
  }

  checkEnd() {
    if (this.#currentStep === this.#bridge.length) {
      return true;
    }
    return false;
  }

  setCurrentStep() {
    this.#currentStep = 0;
  }

  getTryCount() {
    return this.#tryCount;
  }

  setTryCount() {
    this.#tryCount++;
  }

  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move(input) {
    if (input === this.#bridge[this.#currentStep]) {
      this.#currentStep++;
      return true;
    } else {
      return false;
    }
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {
    this.setCurrentStep();
    this.setTryCount();
  }
}

module.exports = BridgeGame;

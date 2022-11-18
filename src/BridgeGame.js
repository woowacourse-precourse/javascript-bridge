const { NUMBER } = require('./constants');

/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #bridge;
  #steps;
  #numberAttempts;
  #answer;
  #isAnswer;

  constructor(bridge, steps, numberAttempts) {
    this.#bridge = bridge;
    this.#steps = steps;
    this.#numberAttempts = numberAttempts;
  }

  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move(answer) {
    this.#answer = answer;
    this.#isAnswer = this.#bridge[this.#steps] === answer;
    if (this.#bridge[this.#steps] === answer) {
      this.#steps += 1;
    }
  }

  getSteps() {
    return this.#steps;
  }

  getStepResult() {
    const curBridge = this.#bridge.slice(0, this.#steps);
    const upBridge = this.createBridgeStringArray(curBridge, 'U');
    const downBridge = this.createBridgeStringArray(curBridge, 'D');
    if (!this.#isAnswer && this.#answer === 'U') {
      upBridge.push('X');
      downBridge.push(' ');
    }
    if (!this.#isAnswer && this.#answer === 'D') {
      upBridge.push(' ');
      downBridge.push('X');
    }
    return { upBridge, downBridge };
  }

  createBridgeStringArray(curBridge, kind) {
    const bridgeString = curBridge.map((item) => {
      if (item === kind) return 'O';
      return ' ';
    });
    return bridgeString;
  }

  createBridgeString;

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {}
}

module.exports = BridgeGame;

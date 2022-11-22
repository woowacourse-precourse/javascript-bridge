const { DEFAULT } = require('./utils/constants');
/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  bridge;
  trialCounter;

  constructor(bridge) {
    this.bridge = bridge;
    this.trialCounter = 1;
  }

  getBridge() {
    return this.bridge;
  }

  getTrialCounter() {
    return this.trialCounter;
  }

  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move(moving) {
    if (this.bridge[this.trialCounter] === moving) {
      this.trialCounter += 1;
    }
  }

  isSuccess() {
    if (this.bridge.length === trialCounter) {
      return true;
    }
    return false;
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry(command) {
    if (command === DEFAULT.RESTART) {
      return true;
    }
    return false;
  }
}

module.exports = BridgeGame;

/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  constructor(bridgeString) {
    this.bridge = bridgeString;
    this.inputBridge = [];
    this.trialCount = 1;
  }
  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move(moving) {
    if (moving === this.bridge[this.inputBridge.length]) {
      this.inputBridge.push("true");
    } else if (moving === this.bridge[this.inputBridge.length]) {
      this.inputBridge.push("false");
    }
    return this.inputBridge;
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry(gameCommand) {
    if (gameCommand === "R") {
      this.trialCount++;
      return true;
    }
    return false;
  }

  getTrialCount() {
    return this.trialCount;
  }
}

module.exports = BridgeGame;

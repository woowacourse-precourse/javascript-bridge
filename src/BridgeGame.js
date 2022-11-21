/**
 * 다리 건너기 게임을 관리하는 클래스
 */

const RESULT = {
  success: " O ",
  fail: " X ",
  empty: "   ",
};

class BridgeGame {
  constructor() {
    this.randomBridge;
    this.upperBridge = [];
    this.lowerBridge = [];
    this.count = 0;
    this.index = 0;
    this.isSuccess = true;
  }

  makeBridge(number) {
    this.randomBridge = number;
  }
  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move(command) {
    if (this.randomBridge[this.index] === command) {
      this.isSuccess = true;
      switch (command) {
        case "U":
          this.upperBridge.push(RESULT.success);
          this.lowerBridge.push(RESULT.empty);
          break;
        case "D":
          this.upperBridge.push(RESULT.empty);
          this.lowerBridge.push(RESULT.success);
          break;
      }
    } else {
      this.isSuccess = false;
      switch (command) {
        case "U":
          this.upperBridge.push(RESULT.fail);
          this.lowerBridge.push(RESULT.empty);
          break;
        case "D":
          this.upperBridge.push(RESULT.empty);
          this.lowerBridge.push(RESULT.fail);
          break;
      }
    }
    this.count++;
    this.index++;
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {
    this.upperBridge = [];
    this.lowerBridge = [];
    this.index = 0;
  }
}

module.exports = BridgeGame;

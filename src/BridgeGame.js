/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  constructor() {
    this.randomBridge;
    this.upperBridge = [];
    this.lowerBridge = [];
    this.count = 1;
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
    if (this.randomBridge[this.count] === command) {
      switch (command) {
        case "U":
          this.upperBridge.push("O");
          this.lowerBridge.push(" ");
          break;
        case "D":
          this.upperBridge.push(" ");
          this.lowerBridge.push("O");
          break;
      }
    } else {
      switch (command) {
        case "U":
          this.upperBridge.push("X");
          this.lowerBridge.push(" ");
          break;
        case "D":
          this.upperBridge.push(" ");
          this.lowerBridge.push("X");
          break;
      }
    }
    this.count++;
  }

  isSuccess() {
    if (this.lowerBridge[this.count - 1] === "X" || this.upperBridge[this.count - 1] === "X") {
      return false;
    }
    return true;
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {}
}

module.exports = BridgeGame;

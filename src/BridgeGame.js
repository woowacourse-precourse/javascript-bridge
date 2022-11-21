/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #bridge;
  #userBridge;

  constructor(bridge) {
    this.#bridge = bridge;
    this.#userBridge = {
      U: [],
      D: [],
    };
    this.retryCount = 1;
    this.bridgeStep = 0;
    this.isFinish = false;
  }

  setUserBridge(command, isLoss) {
    const invertCommand = command === "U" ? "D" : "U";

    if (isLoss) {
      this.#userBridge[command].push("X");
      this.#userBridge[invertCommand].push(false);
      return;
    }
    this.#userBridge[command].push("O");
    this.#userBridge[invertCommand].push(false);
  }

  getUserBridge() {
    return this.#userBridge;
  }

  compare(command) {
    const isLoss = this.#bridge[this.bridgeStep] !== command;
    if (isLoss) {
      this.setUserBridge(command, isLoss);
      this.isFinish = true;
      this.bridgeStep++;
      return;
    }

    this.setUserBridge(command, isLoss);
    this.bridgeStep++;
  }

  isVictory() {
    if (this.bridgeStep === this.#bridge.length) return true;
    return false;
  }

  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move(command) {
    this.compare(command);
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {
    this.retryCount++;
    this.bridgeStep = 0;
    this.#userBridge = {
      U: [],
      D: [],
    };
    this.isFinish = false;
  }
}

module.exports = BridgeGame;

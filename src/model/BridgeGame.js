const Validation = require('../utils/Validation');
const {
  ONE_TIME,
  UP,
  DOWN,
  CROSSED,
  BLOCKED,
  BLANK,
} = require('../utils/constants');
/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #retryingCount = ONE_TIME;
  #upperBridge = [];
  #lowerBridge = [];

  validateDirection(direction) {
    Validation.checkBlank(direction);
    Validation.checkStringType(direction);
    Validation.checkUpperCaseOfDirection(direction);
    Validation.checkValidDirection(direction);
  }

  canMove(direction, winningBridge) {
    return winningBridge.isSameDirection(direction, this.#upperBridge.length);
  }

  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move(direction, CAN_MOVE) {
    if (direction === UP) {
      this.#upperBridge.push(CAN_MOVE ? CROSSED : BLOCKED);
      this.#lowerBridge.push(BLANK);
    }

    if (direction === DOWN) {
      this.#lowerBridge.push(CAN_MOVE ? CROSSED : BLOCKED);
      this.#upperBridge.push(BLANK);
    }
  }

  isLastStage(winningBridge) {
    return winningBridge.isSameLength(this.#upperBridge);
  }

  validateCommand(command) {
    Validation.checkBlank(command);
    Validation.checkStringType(command);
    Validation.checkUpperCaseOfCommand(command);
    Validation.checkValidCommand(command);
  }

  getUpperBridge() {
    return this.#upperBridge;
  }

  getLowerBridge() {
    return this.#lowerBridge;
  }

  getRetryingCount() {
    return this.#retryingCount;
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {
    this.#retryingCount += ONE_TIME;
    this.#upperBridge.pop();
    this.#lowerBridge.pop();
  }
}

module.exports = BridgeGame;

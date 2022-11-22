const Validation = require('../utils/Validation');
const {
  ONE_TIME,
  UP,
  DOWN,
  CROSSED,
  BLOCKED,
  BLANK,
  ZERO,
} = require('../utils/constants');

class BridgeGame {
  #retryingCount = ONE_TIME;
  #upperBridge = [];
  #lowerBridge = [];

  static validateDirection(direction) {
    Validation.checkBlank(direction);
    Validation.checkStringType(direction);
    Validation.checkUpperCaseOfDirection(direction);
    Validation.checkValidDirection(direction);
  }

  canMove(direction, winningBridge) {
    return winningBridge.isSameDirection(direction, this.#upperBridge.length);
  }

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

  static validateCommand(command) {
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

  retry() {
    this.#retryingCount += ONE_TIME;
    this.#upperBridge.splice(ZERO, this.#upperBridge.length);
    this.#lowerBridge.splice(ZERO, this.#lowerBridge.length);
  }
}

module.exports = BridgeGame;

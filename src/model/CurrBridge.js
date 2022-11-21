const Validation = require('../utils/Validation');
const { UP, DOWN, CROSSED, BLOCKED, BLANK } = require('../utils/constants');

class CurrBridge {
  #upperBridge = [];
  #lowerBridge = [];

  validate(direction) {
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

  getUpperBridge() {
    return this.#upperBridge;
  }

  getLowerBridge() {
    return this.#lowerBridge;
  }

  isLast(winningBridge) {
    return winningBridge.isSameLength(this.#upperBridge);
  }

  delete() {
    this.#upperBridge.pop();
    this.#lowerBridge.pop();
  }
}

module.exports = CurrBridge;

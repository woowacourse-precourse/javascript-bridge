const Validation = require('./utils/Validation');

class CurrBridge {
  #upperBridge = [];
  #lowerBridge = [];

  validate(direction) {
    Validation.checkStringType(direction);
    Validation.checkUpperCase(direction);
    Validation.checkValidDirection(direction);
  }

  canMove(direction, winningBridge) {
    const isSameDirection = winningBridge.isSameDirection(
      direction,
      this.#upperBridge.length
    );

    return isSameDirection;
  }

  makeBridge(direction, canMove) {
    if (direction === 'U') {
      canMove ? this.#upperBridge.push('O') : this.#upperBridge.push('X');
      this.#lowerBridge.push(' ');
    }

    if (direction === 'D') {
      canMove ? this.#lowerBridge.push('O') : this.#lowerBridge.push('X');
      this.#upperBridge.push(' ');
    }
  }

  getBridge() {
    return [this.#upperBridge, this.#lowerBridge];
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

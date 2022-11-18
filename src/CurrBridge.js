const Validation = require('./utils/Validation');

class CurrBridge {
  #direction;
  #upperBridge = [];
  #lowerBridge = [];

  constructor(direction) {
    this.#direction = this.validate(direction);
  }

  validate(direction) {
    Validation.checkStringType(direction);
    Validation.checkUpperCase(direction);
    Validation.checkValidDirection(direction);
  }

  canMove(direction, winningBridge) {
    const isSame = winningBridge.isSameDirection(
      direction,
      this.#upperBridge.length
    );

    return isSame;
  }

  makeBridge(direction, canMove) {
    if (direction === 'U') {
      if (canMove) this.#upperBridge.push('O');
      if (!canMove) this.#upperBridge.push('X');
      this.#lowerBridge.push(' ');
    }
    if (direction === 'D') {
      if (canMove) this.#lowerBridge.push('O');
      if (!canMove) this.#lowerBridge.push('X');
      this.#upperBridge.push(' ');
    }
  }

  getBridge() {
    return [this.#upperBridge, this.#lowerBridge];
  }
}

module.exports = CurrBridge;

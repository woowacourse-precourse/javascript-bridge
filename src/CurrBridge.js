const Validation = require('./utils/Validation');

class CurrBridge {
  #direction;
  #order = -1; // 현재 칸이 몇 번째 칸인지

  constructor(direction) {
    this.#direction = this.validate(direction);
  }

  validate(direction) {
    Validation.checkStringType(direction);
    Validation.checkUpperCase(direction);
    Validation.checkValidDirection(direction);
  }

  canMove(direction, winningBridge) {
    this.#order += 1;
    const isSame = winningBridge.isSameDirection(direction, this.#order);
    return isSame;
  }
}

module.exports = CurrBridge;

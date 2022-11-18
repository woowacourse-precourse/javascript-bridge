const Validation = require('./utils/Validation');

class CurrBridge {
  #direction;

  constructor(direction) {
    this.#direction = this.validate(direction);
  }

  validate(direction) {
    Validation.checkStringType(direction);
    Validation.checkUpperCase(direction);
    Validation.checkValidDirection(direction);
  }
}

module.exports = CurrBridge;

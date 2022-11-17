const Validation = require('./utils/Validation');

class WinningBridge {
  #size;

  constructor(size) {
    this.#size = this.validate(size);
  }

  validate(size) {
    Validation.checkType(size);
    Validation.checkRange(size);
  }
}

module.exports = WinningBridge;

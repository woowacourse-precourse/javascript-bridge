const { checkIsInteger, checkSizeInRange } = require('./Utils.js');

class BridgeSize {
  #size;

  constructor(size) {
    this.#size = size;
  }

  validate() {
    checkIsInteger(this.#size);
    checkSizeInRange(this.#size);
  }
}

module.exports = BridgeSize;

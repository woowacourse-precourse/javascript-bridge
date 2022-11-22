const { checkIncludeBlank, checkIsInteger, checkSizeInRange } = require('../Utils/ValidateUtils.js');

class BridgeSize {
  #size;

  constructor(size) {
    this.#size = size;
  }

  validate() {
    checkIncludeBlank(this.#size);
    checkIsInteger(this.#size);
    checkSizeInRange(this.#size);
  }
}

module.exports = BridgeSize;

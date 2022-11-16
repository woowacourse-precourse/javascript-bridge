const { SizeConstraints } = require("./Constraints");

class BridgeSize {
  #size;

  constructor(size) {
    this.checkBridgesizeConstraints(size);
    this.#size = size;
  }

  checkBridgesizeConstraints(size) {
    const sizeConstraints = new SizeConstraints(size);
    sizeConstraints.checkOnlyNumber();
    sizeConstraints.checkNumberRange();
    sizeConstraints.checkStartZero();
  }

  makeStringToNumber() {
    return Number(this.#size);
  }
}

module.exports = { BridgeSize };

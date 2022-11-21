const { SizeConstraint } = require("./Constraint");

class BridgeSize {
  #size;

  constructor(size) {}

  checkBridgeSize(size) {
    const sizeConstraint = new SizeConstraint(size);
    SizeConstraint.checkStartZero();
    sizeConstraint.checkOnlyNumber();
    sizeConstraint.checkNumberRange();
  }

  makeStringToNumber() {
    return parseInt(this.#size);
  }
}

module.exports = { BridgeSize };

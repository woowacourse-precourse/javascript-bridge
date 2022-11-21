const { SizeConstraint, MoveConstraint } = require("./Constraint");

class BridgeSize {
  #size;

  constructor(size) {
    this.checkBridgeSize(size);
    this.#size = size;
  }

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

class MoveInput {
  constructor(move) {
    this.checkMoveInput(move);
  }

  checkMoveInput(move) {
    const moveConstraint = new MoveConstraint(move);
    moveConstraint.checkInputValue();
  }
}

module.exports = { BridgeSize, MoveInput };

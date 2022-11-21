const {
  SizeConstraint,
  MoveConstraint,
  CommandConstraint,
} = require("./Constraint");

class BridgeSize {
  #size;

  constructor(size) {
    this.checkBridgeSize(size);
    this.#size = size;
  }

  checkBridgeSize(size) {
    const sizeConstraint = new SizeConstraint(size);
    sizeConstraint.checkStartZero();
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

class CommandInput {
  constructor(command) {
    this.checkCommanInput(command);
  }

  checkCommanInput(command) {
    const commandConstraint = new CommandConstraint(move);
    commandConstraint.checkInputRQ();
  }
}

module.exports = { BridgeSize, MoveInput, CommandInput };

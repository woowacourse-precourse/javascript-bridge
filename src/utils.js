const {
  SizeConstraints,
  MoveConstraints,
  CommandConstraints,
} = require("./Constraints");

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

class MoveInput {
  constructor(wantGo) {
    this.checkMoveInput(wantGo);
  }

  checkMoveInput(wantGo) {
    const moveConstraints = new MoveConstraints(wantGo);
    moveConstraints.checkInputUorD();
  }
}

class CommandInput {
  constructor(command) {
    this.checkCommandInput(command);
  }

  checkCommandInput(command) {
    const commandConstraints = new CommandConstraints(command);
    commandConstraints.checkInputRorQ();
  }
}

module.exports = { BridgeSize, MoveInput, CommandInput };

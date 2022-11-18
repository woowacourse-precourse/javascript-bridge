const { CONSTRAINTS, COMMAND, ERROR } = require("./constant/Constants");

class SizeConstraints {
  #size;

  constructor(size) {
    this.#size = size;
  }

  checkOnlyNumber() {
    const regex = /^\d+$/;

    if (!regex.test(this.#size)) {
      throw ERROR.ERROR_NOT_ONLY_NUMBER;
    }
  }

  checkNumberRange() {
    const numberdSize = Number(this.#size);

    if (
      numberdSize < CONSTRAINTS.MINIMUM_SIZE_RANGE ||
      numberdSize > CONSTRAINTS.MAXIMUM_SIZE_RANGE
    ) {
      throw ERROR.ERROR_NOT_IN_RANGE;
    }
  }

  checkStartZero() {
    if (this.#size[0] === CONSTRAINTS.START_STRING_OF_SIZE) {
      throw ERROR.ERROR_DONT_START_ZERO;
    }
  }
}

class MoveConstraints {
  #wantGo;

  constructor(wantGo) {
    this.#wantGo = wantGo;
  }

  checkInputUorD() {
    if (
      this.#wantGo !== COMMAND.UPPER_BRIDGE_STRING &&
      this.#wantGo !== COMMAND.LOWER_BRIDGE_STRING
    ) {
      throw ERROR.ERROR_NOT_ONLY_U_OR_D;
    }
  }
}

class CommandConstraints {
  #command;

  constructor(command) {
    this.#command = command;
  }

  checkInputRorQ() {
    if (
      this.#command !== COMMAND.RETRY_STRING &&
      this.#command !== COMMAND.END_GAME_STRING
    ) {
      throw ERROR.ERROR_NOT_ONLY_R_OR_Q;
    }
  }
}

module.exports = { SizeConstraints, MoveConstraints, CommandConstraints };

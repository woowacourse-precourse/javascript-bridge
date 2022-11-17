const { ConstraintsConstants } = require("./constant/Constants");

class SizeConstraints {
  #size;

  constructor(size) {
    this.#size = size;
  }

  checkOnlyNumber() {
    const regex = /^\d+$/;

    if (!regex.test(this.#size)) {
      throw ConstraintsConstants.ERROR_NOT_ONLY_NUMBER;
    }
  }

  checkNumberRange() {
    const numberdSize = Number(this.#size);

    if (
      numberdSize < ConstraintsConstants.MINIMUM_SIZE_RANGE ||
      numberdSize > ConstraintsConstants.MAXIMUM_SIZE_RANGE
    ) {
      throw ConstraintsConstants.ERROR_NOT_IN_RANGE;
    }
  }

  checkStartZero() {
    if (this.#size[0] === ConstraintsConstants.START_STRING_OF_SIZE) {
      throw ConstraintsConstants.ERROR_DONT_START_ZERO;
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
      this.#wantGo !== ConstraintsConstants.UPPER_BRIDGE_STRING &&
      this.#wantGo !== ConstraintsConstants.LOWER_BRIDGE_STRING
    ) {
      throw ConstraintsConstants.ERROR_NOT_ONLY_U_OR_D;
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
      this.#command !== ConstraintsConstants.RETRY_STRING &&
      this.#command !== ConstraintsConstants.END_GAME_STRING
    ) {
      throw ConstraintsConstants.ERROR_NOT_ONLY_R_OR_Q;
    }
  }
}

module.exports = { SizeConstraints, MoveConstraints, CommandConstraints };

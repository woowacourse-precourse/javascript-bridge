const {
  ConstraintsConstants,
  PlayerInputConstants,
  ErrorConstants,
} = require("./constant/Constants");

class SizeConstraints {
  #size;

  constructor(size) {
    this.#size = size;
  }

  checkOnlyNumber() {
    const regex = /^\d+$/;

    if (!regex.test(this.#size)) {
      throw ErrorConstants.ERROR_NOT_ONLY_NUMBER;
    }
  }

  checkNumberRange() {
    const numberdSize = Number(this.#size);

    if (
      numberdSize < ConstraintsConstants.MINIMUM_SIZE_RANGE ||
      numberdSize > ConstraintsConstants.MAXIMUM_SIZE_RANGE
    ) {
      throw ErrorConstants.ERROR_NOT_IN_RANGE;
    }
  }

  checkStartZero() {
    if (this.#size[0] === ConstraintsConstants.START_STRING_OF_SIZE) {
      throw ErrorConstants.ERROR_DONT_START_ZERO;
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
      this.#wantGo !== PlayerInputConstants.UPPER_BRIDGE_STRING &&
      this.#wantGo !== PlayerInputConstants.LOWER_BRIDGE_STRING
    ) {
      throw ErrorConstants.ERROR_NOT_ONLY_U_OR_D;
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
      this.#command !== PlayerInputConstants.RETRY_STRING &&
      this.#command !== PlayerInputConstants.END_GAME_STRING
    ) {
      throw ErrorConstants.ERROR_NOT_ONLY_R_OR_Q;
    }
  }
}

module.exports = { SizeConstraints, MoveConstraints, CommandConstraints };

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

    if (numberdSize < 3 || numberdSize > 20) {
      throw ConstraintsConstants.ERROR_NOT_IN_RANGE;
    }
  }

  checkStartZero() {
    if (this.#size[0] === "0") {
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
    if (this.#wantGo !== "U" && this.#wantGo !== "D") {
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
    if (this.#command !== "R" && this.#command !== "Q") {
      throw ConstraintsConstants.ERROR_NOT_ONLY_R_OR_Q;
    }
  }
}

module.exports = { SizeConstraints, MoveConstraints, CommandConstraints };

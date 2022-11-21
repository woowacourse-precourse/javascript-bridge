const { ERROR } = require("./constant/Constants");
class SizeConstraint {
  #size;

  constructor(size) {
    this.#size = size;
  }

  checkStartZero() {
    if (this.#size[0] === "0") {
      throw ERROR.ERROR_NOT_START_ZERO;
    }
  }

  checkOnlyNumber() {
    const REGEX = /^\d+$/;

    if (!REGEX.test(this.#size)) {
      throw ERROR.ERROR_NOT_ONLY_NUMBER;
    }
  }

  checkNumberRange() {
    const numberSize = Number(this.#size);

    if (numberSize < 3 || numberSize > 20) {
      throw ERROR.ERROR_NOT_IN_RANGE;
    }
  }
}
class MoveConstraint {
  #move;

  constructor(move) {
    this.#move = move;
  }

  checkInputUD() {
    if (this.#move !== "U" && this.#move !== "D") {
      throw ERROR.ERROR_NOT_ONLY_U_OR_D;
    }
  }
}
class CommandConstraint {
  #command;

  constructor(command) {
    this.#command = command;
  }

  checkInputRQ() {
    if (this.#command !== "R" && this.#command !== "Q") {
      throw ERROR.ERROR_NOT_ONLY_R_OR_Q;
    }
  }
}

module.exports = { SizeConstraint, MoveConstraint, CommandConstraint };

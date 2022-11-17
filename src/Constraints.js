const ERROR_NOT_ONLY_NUMBER = "[ERROR] 숫자만 입력 가능합니다.";
const ERROR_NOT_IN_RANGE = "[ERROR] 다리 길이는 3 이상 20 이하만 가능합니다.";
const ERROR_DONT_START_ZERO =
  "[ERROR] 0으로 시작하는 숫자는 입력할 수 없습니다.";

class SizeConstraints {
  #size;

  constructor(size) {
    this.#size = size;
  }

  checkOnlyNumber() {
    const regex = /^\d+$/;

    if (!regex.test(this.#size)) {
      throw new Error(ERROR_NOT_ONLY_NUMBER);
    }
  }

  checkNumberRange() {
    const numberdSize = Number(this.#size);

    if (numberdSize < 3 || numberdSize > 20) {
      throw new Error(ERROR_NOT_IN_RANGE);
    }
  }

  checkStartZero() {
    if (this.#size[0] === "0") {
      throw new Error(ERROR_DONT_START_ZERO);
    }
  }
}

const ERROR_NOT_ONLY_U_OR_D = "[ERROR] U 혹은 D만 입력 가능합니다.";

class MoveConstraints {
  #wantGo;

  constructor(wantGo) {
    this.#wantGo = wantGo;
  }

  checkInputUorD() {
    if (this.#wantGo !== "U" && this.#wantGo !== "D") {
      throw new Error(ERROR_NOT_ONLY_U_OR_D);
    }
  }
}

const ERROR_NOT_ONLY_R_OR_Q = "[ERROR] R 혹은 Q만 입력 가능합니다.";

class CommandConstraints {
  #command;

  constructor(command) {
    this.#command = command;
  }

  checkInputRorQ() {
    if (this.#command !== "R" && this.#command !== "Q") {
      throw new Error(ERROR_NOT_ONLY_R_OR_Q);
    }
  }
}

module.exports = { SizeConstraints, MoveConstraints, CommandConstraints };

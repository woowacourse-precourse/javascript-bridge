const ERROR_NOT_ONLY_NUMBER = "[ERROR] 숫자만 입력 가능합니다.";
const ERROR_NOT_IN_RANGE = "[ERROR] 다리 길이는 3 이상 20 이하만 가능합니다.";
const ERROR_NOT_START_ZERO =
  "[ERROR] 0으로 시작하는 숫자는 입력할 수 없습니다.";

class SizeConstraint {
  #size;

  constructor(size) {
    this.#size = size;
  }

  checkStartZero() {
    if (this.#size[0] === "0") {
      throw new Error(ERROR_NOT_START_ZERO);
    }
  }

  checkOnlyNumber() {
    const REGEX = /^\d+$/;

    if (!REGEX.test(this.#size)) {
      throw new Error(ERROR_NOT_ONLY_NUMBER);
    }
  }

  checkNumberRange() {
    const numberSize = Number(this.#size);

    if (numberSize < 3 || numberSize > 20) {
      throw new Error(ERROR_NOT_IN_RANGE);
    }
  }
}

module.exports = { SizeConstraint };

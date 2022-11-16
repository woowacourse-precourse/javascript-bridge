const ERROR_NOT_ONLY_NUMBER = "[ERROR] 숫자만 입력 가능합니다.";
const ERROR_NOT_IN_RANGE = "[ERROR] 다리 길이는 3 이상 20 이하만 가능합니다.";
const ERROR_DONT_START_ZERO =
  "[ERROR] 0으로 시작하는 숫자는 입력할 수 없습니다.";

class LengthConstraints {
  #length;

  constructor(length) {
    this.checkAllConstraints(length);
    this.#length = length;
  }

  checkAllConstraints(length) {
    this.checkStartZero(length);
    this.checkOnlyNumber(length);
    this.checkNumberRange(length);
  }

  checkStartZero(length) {
    if (length[0] === "0") {
      throw new Error(ERROR_DONT_START_ZERO);
    }
  }

  checkOnlyNumber(length) {
    const regex = /^\d+$/;

    if (!regex.test(length)) {
      throw new Error(ERROR_NOT_ONLY_NUMBER);
    }
  }

  checkNumberRange(length) {
    const numberdLength = Number(length);

    if (numberdLength < 3 || numberdLength > 20) {
      throw new Error(ERROR_NOT_IN_RANGE);
    }
  }
}

module.exports = { LengthConstraints };

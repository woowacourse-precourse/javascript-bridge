const Constant = require("./Constant");
const { Console } = require("@woowacourse/mission-utils");
const ExceptionHandler = {
  isNotaNumber(input) {
    if (isNaN(input)) {
      Console.print("[ERROR] 숫자를 입력해주세요.");
      return false;
    }
    return true;
  },

  validateSizeInput(size) {
    const intSize = parseInt(size);
    if (intSize < Constant.MIN_SIZE || intSize > Constant.MAX_SIZE) {
      Console.print("[ERROR] 3부터 20 사이의 숫자를 입력해주세요.");
      return false;
    }
    return true;
  },

  validateGameInput(input) {
    if (input !== Constant.UP && input !== Constant.DOWN) {
      Console.print("[ERROR] 정확히 입력해주세요.");
      return false;
    }
    return true;
  },

  validateRetryInput(input) {
    if (input !== Constant.QUIT && input !== Constant.RETRY) {
      Console.print("[ERROR] 정확히 입력해주세요.");
      return false;
    }
    return true;
  },
};

module.exports = ExceptionHandler;

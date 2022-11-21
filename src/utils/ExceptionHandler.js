const Constant = require("./Constant");

const ExceptionHandler = {
  isNotaNumber(input) {
    if (isNaN(input)) {
      throw "\n[ERROR] 숫자를 입력해주세요.\n";
    }
  },

  validateSizeInput(size) {
    const intSize = parseInt(size);
    if (intSize < Constant.MIN_SIZE || intSize > Constant.MAX_SIZE) {
      throw "\n[ERROR] 3부터 20 사이의 숫자를 입력해주세요.\n";
    }
  },

  validateGameInput(input) {
    if (input !== Constant.UP && input !== Constant.DOWN) {
      throw "\n[ERROR] 대문자 U, D를 정확히 입력해주세요.\n";
    }
  },

  validateRetryInput(input) {
    if (input !== Constant.QUIT && input !== Constant.RETRY) {
      throw "\n[ERROR] 대문자 Q, R을 정확히 입력해주세요.\n";
    }
  },
};

module.exports = ExceptionHandler;

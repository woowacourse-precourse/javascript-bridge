const Constant = require("./Constant");

const ExceptionHandler = {
  isNotaNumber(input) {
    if (isNaN(input)) throw new Error("[ERROR] 숫자를 입력해주세요.");
  },

  validateSizeInput(size) {
    const intSize = parseInt(size);
    if (intSize < Constant.MIN_SIZE || intSize > Constant.MAX_SIZE)
      throw new Error("[ERROR] 3부터 20 사이의 숫자를 입력해주세요.");
  },
};

module.exports = ExceptionHandler;

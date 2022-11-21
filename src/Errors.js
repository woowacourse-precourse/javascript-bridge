const { INPUT_VALUE } = require("./constants/values");

const Errors = {
  validateSizeIsNumber(size) {
    if (isNaN(size)) {
      throw Error("[ERROR] 숫자를 입력해주세요");
    }
  },

  validateSizeINRange(size) {
    if (size < 3 || size > 20)
      throw Error("[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.");
  },

  validateUserDirection(answer) {
    if (answer.toUpperCase() !== "U" && answer.toUpperCase() !== "D")
      throw Error("[ERROR] U 혹은 D 를 입력해주세요.");
  },

  validateRetryCorrect(answer) {
    if (answer !== INPUT_VALUE.QUIT || answer !== INPUT_VALUE.RETRY)
      throw Error("[ERROR] Q 혹은 R 를 입력해주세요.");
  },
};

module.exports = { Errors };

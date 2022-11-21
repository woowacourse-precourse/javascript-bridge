const ERROR = "[ERROR] ";
const ERROR_BRIDGE_SIZE = ERROR + "3~20 사이의 정수를 입력해주세요.";
const ERROR_MOVING = ERROR + "U, D 중 하나의 값을 입력해주세요.";
const ERROR_COMMAND = ERROR + "재시작하려면 R, 종료하려면 Q를 입력해주세요.";

const Errors = {
  bridgeSizeError(num) {
    num = Number(num);

    if (isNaN(num) || num < 3 || num > 20 || parseInt(num) !== num) {
      throw new Error(ERROR_BRIDGE_SIZE);
    }
  },

  movingError(str) {
    if (str === "U" || str === "D") {
      return;
    }
    throw new Error(ERROR_MOVING);
  },

  readGameError(str) {
    if (str === "R" || str === "Q") {
      return;
    }
    throw new Error(ERROR_COMMAND);
  },
};

module.exports = Errors;

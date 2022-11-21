const ERROR = "[ERROR] ";
const ERROR_BRIDGE_SIZE = ERROR + "3~20 사이의 정수를 입력해주세요.";

const Errors = {
  bridgeSizeError(num) {
    num = Number(num);

    if (isNaN(num) || num < 3 || num > 20 || parseInt(num) !== num) {
      throw new Error(ERROR_BRIDGE_SIZE);
    }
  },
};

module.exports = Errors;

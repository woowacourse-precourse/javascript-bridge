const { Console } = require("@woowacourse/mission-utils");

const Validation = {
  checkBridgeLength(inputValue) {
    try {
      if (isNaN(inputValue)) {
        throw new Error("[ERROR] 다리 길이는 숫자로 입력해야 합니다.");
      }
    } catch (error) {
      Console.print(error.message);
      return true;
    }
  },
};

module.exports = Validation;

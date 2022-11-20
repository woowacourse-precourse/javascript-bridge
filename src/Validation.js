const { Console } = require("@woowacourse/mission-utils");

const Validation = {
  checkBridgeLength(inputValue) {
    const number = this.checkBridgeNumber(inputValue);
    const range = this.checkBridgeRange(inputValue);

    if (number || range) {
      return true;
    }
    return false;
  },

  checkBridgeNumber(inputValue) {
    try {
      if (isNaN(inputValue)) {
        throw new Error("[ERROR] 다리 길이는 숫자로 입력해야 합니다.");
      }
    } catch (error) {
      Console.print(error.message);
      return true;
    }
  },

  checkBridgeRange(inputValue) {
    try {
      if (inputValue < 3 || inputValue > 20) {
        throw new Error(
          "[ERROR] 다리 길이는 3 이상 20 이하의 숫자를 입력해야 합니다."
        );
      }
    } catch (error) {
      Console.print(error.message);
      return true;
    }
  },
};

module.exports = Validation;

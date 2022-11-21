const { Console } = require("@woowacourse/mission-utils");

const Validation = {
  isVaildBridgeSize(size) {
    const number = this.isVaildNumber(size);
    const range = this.isVaildRange(size);

    if (number || range) {
      return true;
    }
    return false;
  },

  isVaildNumber(size) {
    try {
      if (isNaN(size)) {
        throw new Error("[ERROR] 다리 길이는 숫자여야 합니다.");
      }
    } catch (error) {
      Console.print(error.message);
      return true;
    }
  },

  isVaildRange(size) {
    try {
      if (size < 3 || size > 20) {
        throw new Error("[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.");
      }
    } catch (error) {
      Console.print(error.message);
      return true;
    }
  },

  isVaildMoving(moving) {
    const UPPER_MOVING = "U";
    const LOWER_MOVING = "D";

    if (moving !== UPPER_MOVING && moving !== LOWER_MOVING) {
      throw new Error("[ERROR] 대문자 U와 D만 입력가능합니다.");
    }
  },

  isVaildCommand(command) {
    if (command !== "R" && command !== "Q") {
      throw new Error("[ERROR] 올바른 입력이 아닙니다. 입력값을 확인해주세요.");
    }
  },
};

module.exports = Validation;

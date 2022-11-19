const MissionUtils = require("@woowacourse/mission-utils");

const Validate = {
  isCorrectBridgeLength(input) {
    return (
      this.isNumber(input) &&
      this.isLowerThanMaxLength(input) &&
      this.isBiggerThanMinLength(input)
    );
  },
  isNumber(input) {
    const redex = /[^0-9]/g;
    if (input.match(redex)) {
      MissionUtils.Console.print("[ERROR] 입력값이 숫자가 아닙니다.", input);
      return false;
    }
    return true;
  },
  isLowerThanMaxLength(input) {
    const number = parseInt(input);
    if (number > 20) {
      MissionUtils.Console.print("[ERROR] 입력값이 너무 큽니다.", input);
      return false;
    }
    return true;
  },
  isBiggerThanMinLength(input) {
    const number = parseInt(input);
    if (number < 3) {
      MissionUtils.Console.print("[ERROR] 입력값이 너무 작습니다.", input);
      return false;
    }
    return true;
  },
  isCorrectMove(input) {
    if (input !== "U" && input !== "D")
      throw new Error("[ERROR] 이동할 칸이 올바르지 않습니다.", input);
  },
  isCorrectRetry(input) {
    if (input !== "R" && input !== "Q")
      throw new Error("[ERROR] 이동할 칸이 올바르지 않습니다.", input);
  },
  isUndefined(input) {
    if (input === undefined) {
      throw new Error("[ERROR] 전달된 값이 올바르게 참조되지 않습니다.");
    }
  },
};

module.exports = Validate;

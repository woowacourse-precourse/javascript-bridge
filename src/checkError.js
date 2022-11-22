const MissionUtils = require("@woowacourse/mission-utils");

const CheckError = {
  checkBridgeLength(input) {
    try {
      if (isNaN(input)) throw new Error("[ERROR] 숫자만 입력하세요.");
      if (input < 3 || input > 20) throw new Error("[ERROR] 3~20 숫자를 입력하세요");
    } catch (error) {
      MissionUtils.Console.print(error.message);
      return false;
    }
    return true;
  },

  checkChoiceUpDown(input) {
    try {
      if (input !== "U" && input !== "D") throw new Error("[ERROR] U 또는 D만 입력하세요.");
    } catch (error) {
      MissionUtils.Console.print(error.message);
      return false;
    }
    return true;
  },

  checkGameConnand(input) {
    try {
      if (input !== "R" && input !== "Q") throw new Error("[ERROR] R 또는 Q만 입력하세요.");
    } catch (error) {
      MissionUtils.Console.print(error.message);
      return false;
    }
    return true;
  },
};

module.exports = CheckError;

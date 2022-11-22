const MissionUtils = require("@woowacourse/mission-utils");
const ERROR = "[ERROR] ";
const ERROR_BRIDGE_SIZE = ERROR + "3~20 사이의 정수를 입력해주세요.";
const ERROR_MOVING = ERROR + "U, D 중 하나의 값을 입력해주세요.";
const ERROR_COMMAND = ERROR + "재시작하려면 R, 종료하려면 Q를 입력해주세요.";

const Errors = {
  bridgeSizeError(num) {
    num = Number(num);

    if (isNaN(num) || num < 3 || num > 20 || parseInt(num) !== num) {
      MissionUtils.Console.print(ERROR_BRIDGE_SIZE);
      MissionUtils.Console.close();
      return false;
    }

    return true;
  },

  movingError(str) {
    if (str === "U" || str === "D") {
      return true;
    }
    MissionUtils.Console.print(ERROR_MOVING);
    MissionUtils.Console.close();
    return false;
  },

  readGameError(str) {
    if (str === "R" || str === "Q") {
      return true;
    }
    MissionUtils.Console.print(ERROR_COMMAND);
    MissionUtils.Console.close();
    return false;
  },
};

module.exports = Errors;

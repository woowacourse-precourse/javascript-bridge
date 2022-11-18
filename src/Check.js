const { Console } = require("@woowacourse/mission-utils");
const { SIZE, MOVING, COMMAND } = require("./constants/values");

const Check = {
  checkBridgeSize(size) {
    const number = this.checkNumber(size);
    const range = this.checkRange(size);

    if (number || range) {
      return true;
    }
    return false;
  },

  checkNumber(size) {
    try {
      if (isNaN(size)) {
        throw new Error("[ERROR] 다리 길이는 숫자여야 합니다.");
      }
    } catch (e) {
      Console.print(e.message);
      return true;
    }
  },

  checkRange(size) {
    try {
      if (size < SIZE.MINIMUM || size > SIZE.MAXIMUM) {
        throw new Error(
          "[ERROR] 다리 길이는 3 이상 20 이하인 숫자여야 합니다."
        );
      }
    } catch (e) {
      Console.print(e.message);
      return true;
    }
  },

  checkMoving(moving) {
    try {
      if (moving !== MOVING.UPPER && moving !== MOVING.LOWER) {
        throw new Error("[ERROR] 이동할 칸은 U과 P만 입력할 수 있습니다.");
      }
    } catch (e) {
      Console.print(e.message);
      return true;
    }

    return false;
  },

  checkCommand(command) {
    try {
      if (command !== COMMAND.RESTART && command !== COMMAND.END) {
        throw new Error("[ERROR] 게임 진행 옵션은 R과 Q만 입력할 수 있습니다.");
      }
    } catch (e) {
      Console.print(e.message);
      return true;
    }

    return false;
  },
};

module.exports = Check;

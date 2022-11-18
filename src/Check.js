const { Console } = require("@woowacourse/mission-utils");

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
    const MINIMUM_SIZE = 3;
    const MAXIMUM_SIZE = 20;

    try {
      if (size < MINIMUM_SIZE || size > MAXIMUM_SIZE) {
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
    const UPPER_moving = "U";
    const LOWER_moving = "D";

    try {
      if (moving !== UPPER_moving && moving !== LOWER_moving) {
        throw new Error("[ERROR] 이동할 칸은 U과 P만 입력할 수 있습니다.");
      }
    } catch (e) {
      Console.print(e.message);
      return true;
    }

    return false;
  },

  checkCommand(command) {
    const RESTART_COMMAND = "R";
    const END_COMMAND = "Q";

    try {
      if (command !== RESTART_COMMAND && command !== END_COMMAND) {
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

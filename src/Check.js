const Check = {
  checkBrideSize(size) {
    this.checkNumber(size);
    this.checkRange(size);
  },

  checkNumber(size) {
    if (isNaN(size)) {
      throw new Error("[ERROR] 다리 길이는 숫자여야 합니다.");
    }
  },

  checkRange(size) {
    const MINIMUM_SIZE = 3;
    const MAXIMUM_SIZE = 20;

    if (size < MINIMUM_SIZE || size > MAXIMUM_SIZE) {
      throw new Error("[ERROR] 다리 길이는 3 이상 20 이하인 숫자여야 합니다.");
    }
  },

  checkMoving(moving) {
    const UPPER_moving = "U";
    const LOWER_moving = "D";

    if (moving !== UPPER_moving && moving !== LOWER_moving) {
      throw new Error("[ERROR] 이동할 칸은 U과 P만 입력할 수 있습니다.");
    }
  },

  checkCommand(command) {
    const RESTART_COMMAND = "R";
    const END_COMMAND = "Q";

    if (command !== RESTART_COMMAND && command !== END_COMMAND) {
      throw new Error("[ERROR] 게임 진행 옵션은 R과 Q만 입력할 수 있습니다.");
    }
  },
};

module.exports = Check;

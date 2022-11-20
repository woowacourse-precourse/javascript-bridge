const InputValidate = {
  checkBridgeSize(size) {
    if (!Number(size)) {
      throw new Error("[ERROR] 다리 길이는 숫자 형식이어야 합니다.");
    }
  },

  checkMovingDirection(direction) {
    if (direction !== "U" && direction !== "D") {
      throw new Error("[ERROR] 이동할 칸은 U 혹은 D 여야 합니다.");
    }
  },

  checkRetryOrQuitCommand(command) {
    if (command !== "R" && command !== "Q") {
      throw new Error("[ERROR] 입력 명령어는 R 혹은 Q 여야 합니다.");
    }
  },
};

module.exports = InputValidate;

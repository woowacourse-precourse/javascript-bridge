const InvalidTest = {
  checkSize(size) {
    if (!Number(size)) {
      throw new Error("[ERROR] 길이는 숫자로만 입력이 가능합니다.");
    }
    if (Number(size) < 3 || Number(size) > 20) {
      throw new Error(
        "[ERROR] 길이는 3 ~ 20 사이의 숫자로만 입력이 가능합니다."
      );
    }
  },

  checkDirection(direction) {
    if (direction !== "U" && direction !== "D") {
      throw new Error("[ERROR] 이동은 U 혹은 D로만 입력이 가능합니다.");
    }
  },

  checkCommand(command) {
    if (command !== "R" && command !== "Q") {
      throw new Error("[ERROR] 입력은 R 혹은 Q로만 입력이 가능합니다.");
    }
  },
};

module.exports = InvalidTest;

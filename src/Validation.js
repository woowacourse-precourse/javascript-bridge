const Validation = {
  validBridgeSize(size) {
    if (isNaN(size)) {
      throw "숫자 입력이 아님";
    }
    if (size < 3 || size > 20) {
      throw "3~20 사이의 숫자가 아님";
    }
  },

  validMovePoint(movePoint) {
    if (movePoint !== "U" && movePoint !== "D") {
      throw "U 또는 D가 아님";
    }
  },

  validreadGameCommand(command) {
    if (command !== "R" && command !== "Q") {
      throw "R 또는 Q가 아님";
    }
  },
};

module.exports = Validation;

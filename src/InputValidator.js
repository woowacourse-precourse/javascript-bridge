const InputValidator = {
  checkBridgeSize(bridgeSize) {},

  checkMoving(direction) {
    if (direction === "U" || direction === "D") {
      return;
    }
    throw new Error("[ERROR] 이동할 칸은 U나 D만 입력하셔야 합니다.");
  },

  checkGameCommand(command) {},
};

module.exports = InputValidator;

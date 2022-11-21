const InputValidator = {
  checkBridgeSize(bridgeSize) {},

  checkMoving(direction) {
    if (direction === "U" || direction === "D") {
      return;
    }
    throw new Error("[ERROR] 이동할 칸은 U나 D만 입력하셔야 합니다.");
  },

  checkGameCommand(command) {
    if (command === "R" || command === "Q") {
      return;
    }
    throw new Error("[ERROR] 게임을 재시작하려면 R, 종료하시려면 Q를 입력하셔야 합니다.");
  },
};

module.exports = InputValidator;

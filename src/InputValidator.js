const InputValidator = {
  MIN_SIZE_NUMBER: 3,
  MAX_SIZE_NUMBER: 20,

  RESTART: "R",
  QUIT: "Q",

  UP_DIRECTION: "U",
  DOWN_DIRECTION: "D",

  ERROR_MESSAGE: {
    BRIDGE_SIZE: "[ERROR] 다리 길이는 3~20사이 숫자만 입력하셔야 합니다.",
    MOVING: "[ERROR] 이동할 칸은 U나 D만 입력하셔야 합니다.",
    COMMAND: "[ERROR] 게임을 재시작하려면 R, 종료하시려면 Q를 입력하셔야 합니다.",
  },

  checkBridgeSize(bridgeSize) {
    const size = Number(bridgeSize);

    if (Number.isInteger(size)) {
      if (size >= this.MIN_SIZE_NUMBER && size <= this.MAX_SIZE_NUMBER) return;
    }

    throw new Error(this.ERROR_MESSAGE.BRIDGE_SIZE);
  },

  checkMoving(direction) {
    if (direction === this.UP_DIRECTION || direction === this.DOWN_DIRECTION) {
      return;
    }
    throw new Error(this.ERROR_MESSAGE.MOVING);
  },

  checkGameCommand(command) {
    if (command === this.RESTART || command === this.QUIT) {
      return;
    }
    throw new Error(this.ERROR_MESSAGE.COMMAND);
  },
};

module.exports = InputValidator;

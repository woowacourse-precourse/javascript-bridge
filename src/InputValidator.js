const SETTING = require("./constant/setting");

const InputValidator = {
  MIN_SIZE_NUMBER: 3,
  MAX_SIZE_NUMBER: 20,

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
    if (direction === SETTING.UP_DIRECTION || direction === SETTING.DOWN_DIRECTION) {
      return;
    }
    throw new Error(this.ERROR_MESSAGE.MOVING);
  },

  checkGameCommand(command) {
    if (command === SETTING.RESTART_COMMAND || command === SETTING.QUIT_COMMAND) {
      return;
    }
    throw new Error(this.ERROR_MESSAGE.COMMAND);
  },
};

module.exports = InputValidator;

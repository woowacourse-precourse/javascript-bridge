const { BRIDGE_LENGTH, DIRECTION, COMMAND } = require("./constants");

const InputValidate = {
  checkBridgeSize(size) {
    if (!Number(size)) {
      throw new Error("[ERROR] 다리 길이는 숫자 형식이어야 합니다.");
    }
    if (Number(size) < BRIDGE_LENGTH.MIN || Number(size) > BRIDGE_LENGTH.MAX) {
      throw new Error(`[ERROR] 다리 길이는 ${BRIDGE_LENGTH.MIN}부터 ${BRIDGE_LENGTH.MAX} 사이의 숫자여야 합니다.`);
    }
  },

  checkMovingDirection(direction) {
    if (direction !== DIRECTION.TO_UPPER && direction !== DIRECTION.TO_LOWER) {
      throw new Error(`[ERROR] 이동할 칸은 ${DIRECTION.TO_UPPER} 혹은 ${DIRECTION.TO_LOWER} 여야 합니다.`);
    }
  },

  checkRetryOrQuitCommand(command) {
    if (command !== COMMAND.RETRY && command !== COMMAND.QUIT) {
      throw new Error(`[ERROR] 입력 명령어는 ${COMMAND.RETRY} 혹은 ${COMMAND.QUIT} 여야 합니다.`);
    }
  },
};

module.exports = InputValidate;

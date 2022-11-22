const { Console } = require('@woowacourse/mission-utils');

const Validation = {
  validateBridgeSize(bridgeSize) {
    const number = this.validateBridgeSizeIsNumber(bridgeSize);
    const range = this.validateBridgeSizeIsRange(bridgeSize);

    if (number || range) {
      return true;
    }
    return false;
  },

  validateBridgeSizeIsNumber(bridgeSize) {
    try {
      if (isNaN(bridgeSize)) {
        throw new Error('[ERROR] 다리의 길이는 숫자만 입력해야 합니다.');
      }
    } catch (error) {
      Console.print(error.message);
      return true;
    }
  },

  validateBridgeSizeIsRange(bridgeSize) {
    const MIN_SIZE = 3;
    const MAX_SIZE = 20;
    try {
      if (bridgeSize < MIN_SIZE || bridgeSize > MAX_SIZE) {
        throw new Error('[ERROR] 다리의 길이는 3 이상 20 이하여야 합니다.');
      }
    } catch (error) {
      Console.print(error.message);
      return true;
    }
  },

  validateMovingCommand(movingCommand) {
    this.validateInputMoving(movingCommand);
  },

  validateInputMoving(movingCommand) {
    const UPPER_MOVING = 'U';
    const LOWER_MOVING = 'D';

    if (movingCommand !== UPPER_MOVING && movingCommand !== LOWER_MOVING) {
      throw new Error('[ERROR] 이동할 다리 칸은 U 또는 D만 입력 가능합니다.');
    }
  },

  validateInputCommand(gameCommand) {
    const RESTART_COMMAND = 'R';
    const END_COMMAND = 'Q';
    if (gameCommand !== RESTART_COMMAND && gameCommand !== END_COMMAND) {
      throw new Error('[ERROR] 게임 진행 옵션은 R과 Q만 입력 가능합니다.');
    }
  },
};

module.exports = Validation;

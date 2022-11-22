const { Console } = require('@woowacourse/mission-utils');
const { BRIDGE_SIZE, MOVING, GAME_COMMANDS } = require('./constants/index');

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
    try {
      if (bridgeSize < BRIDGE_SIZE.MIN || bridgeSize > BRIDGE_SIZE.MAX) {
        throw new Error('[ERROR] 다리의 길이는 3 이상 20 이하여야 합니다.');
      }
    } catch (error) {
      Console.print(error.message);
      return true;
    }
  },

  validateMovingCommand(movingCommand) {
    try {
      if (movingCommand !== MOVING.UPPER && movingCommand !== MOVING.LOWER) {
        throw new Error('[ERROR] 이동할 다리 칸은 U 또는 D만 입력 가능합니다.');
      }
    } catch (error) {
      Console.print(error.message);
      return true;
    }
    return false;
  },

  validateGameCommand(gameCommand) {
    try {
      if (gameCommand !== GAME_COMMANDS.RETRY && gameCommand !== GAME_COMMANDS.QUIT) {
        throw new Error('[ERROR] 게임 진행 옵션은 R과 Q만 입력 가능합니다.');
      }
    } catch (error) {
      Console.print(error.message);
      return true;
    }

    return false;
  },
};

module.exports = Validation;

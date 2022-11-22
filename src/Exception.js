const MissionUtils = require('@woowacourse/mission-utils');
const { PARAMETERS, ERROR_MESSAGE } = require('./utils/constants');

class Exception {
  validateBridgeSize(input) {
    const [MIN_SIZE, MAX_SIZE] = PARAMETERS.bridgeSizeRange;

    if (input < MIN_SIZE || input > MAX_SIZE || !this.checkIsDigit(input)) {
      MissionUtils.Console.print(ERROR_MESSAGE.invalidBridgeSize);
      throw new Error(ERROR_MESSAGE.invalidBridgeSize);
    }
  }

  checkIsDigit(number) {
    if (!/^\d+$/.test(number)) return false;

    return true;
  }

  validateMove(input) {
    if (input !== PARAMETERS.upControl && input !== PARAMETERS.downControl) {
      MissionUtils.Console.print(ERROR_MESSAGE.invalidMove);
      throw new Error(ERROR_MESSAGE.invalidMove);
    }
  }

  validateRestartInput(input) {
    if (input !== PARAMETERS.restartControl && input !== PARAMETERS.quitControl) {
      MissionUtils.Console.print(ERROR_MESSAGE.invalidRestart);
      throw new Error(ERROR_MESSAGE.invalidRestart);
    }
  }
}

module.exports = Exception;

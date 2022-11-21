const MissionUtils = require('@woowacourse/mission-utils');
const { PARAMETERS, ERROR_MESSAGE } = require('./utils/constants');

class Exception {
  validateBridgeLength(input) {
    const [MIN_LENGTH, MAX_LENGTH] = PARAMETERS.bridgeLengthRange;

    if (input < MIN_LENGTH || input > MAX_LENGTH || !this.checkIsDigit(input)) {
      MissionUtils.Console.print(ERROR_MESSAGE.invalidBridgeLength);
      throw new Error(ERROR_MESSAGE.invalidBridgeLength);
    }
  }

  checkIsDigit(number) {
    if (!/^\d+$/.test(number)) return false;

    return true;
  }
}

module.exports = Exception;

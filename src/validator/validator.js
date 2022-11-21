/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
// InputView 에서만 MissionUtils의 Console.readLine() 을 이용해 사용자의 입력을 받을 수 있다.
const ERROR_MESSAGES = require('../constants/ErrorMessages');
const { BRIDGE } = require('../constants/constants');

const validator = {
  validateBridgeSize(size) {
    if (!this.isNumber(size)) {
      throw new Error(ERROR_MESSAGES.NAN);
    }
    if (!this.isValidSize(size)) {
      throw new Error(ERROR_MESSAGES.SIZE);
    }
  },
  validateMove(char) {
    if (char !== BRIDGE.UP_CHAR && char !== BRIDGE.DOWN_CHAR) {
      throw new Error(ERROR_MESSAGES.MOVING);
    }
  },
  isNumber(size) {
    return Number.isInteger(Number(size));
  },
  isValidSize(size) {
    return BRIDGE.MIN <= Number(size) || Number(size) <= BRIDGE.MAX;
  },
};

module.exports = validator;

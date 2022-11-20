const { ERROR, INPUT_FORMAT } = require('./constants');

const REGEX_NUMBER_RANGE = /^[3-9]{1}$|^1{1}[0-9]{1}$|^2{1}0{1}$/;

const Validator = {
  checkBridgeSize(size) {
    const match = REGEX_NUMBER_RANGE.test(size);
    if (!match) {
      throw new Error(ERROR.INPUT_BRIDGE_SIZE);
    }
  },
  checkMovingDirection(direction) {
    if (![INPUT_FORMAT.UPSIDE, INPUT_FORMAT.DOWNSIDE].includes(direction)) {
      throw new Error(ERROR.INPUT_MOVING_DIRECTION);
    }
  },
};

module.exports = Validator;

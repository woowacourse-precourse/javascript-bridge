const { ERROR_MESSAGE, KEY, BRIDGE_RANGE } = require('./Constant');

const isNum = input => {
  const pattern = /[^0-9]/;
  if (!pattern.test(input)) return true;
  return false;
};

const isInRange = size => {
  if (size >= BRIDGE_RANGE.MIN && size <= BRIDGE_RANGE.MAX) return true;
  return false;
};

const isUOrD = input => {
  if (input === KEY.UP || input === KEY.DOWN) return true;
  return false;
};

const isROrQ = input => {
  if (input === KEY.RESTART || input === KEY.QUIT) return true;
  return false;
};
const Validate = {
  validateReadBridgeSize(input) {
    if (!isNum(input)) throw new Error(ERROR_MESSAGE.BRIDGE_SIZE);
    if (!isInRange(input)) throw new Error(ERROR_MESSAGE.BRIDGE_SIZE);
  },
  validateReadMoving(input) {
    if (!isUOrD(input)) throw new Error(ERROR_MESSAGE.MOVING);
  },
  validateReadGameCommand(input) {
    if (!isROrQ(input)) throw new Error(ERROR_MESSAGE.COMMAND);
  },
};

module.exports = Validate;

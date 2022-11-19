const { BRIDGE_SIZE, MOVING_SPACE, ERROR_MESSAGE } = require("./Constant");

const isNotNumber = (size) => {
  const exceptNumber = /[^0-9]/;
  if (exceptNumber.test(size)) return true;
  return false;
};

const isOverBridgeSizeRange = (size) => {
  if (size < BRIDGE_SIZE.MIN) return true;
  if (size > BRIDGE_SIZE.MAX) return true;
  return false;
};

const isNotUorD = (movingSpace) => {
  if (movingSpace === MOVING_SPACE.UP) return false;
  if (movingSpace === MOVING_SPACE.DOWN) return false;
  return true;
};

const Validate = {
  /**
   * @param {string} size readBridgeSize에서 입력받은 다리의 길이
   */
  validateReadBridgeSize(size) {
    if (isNotNumber(size)) throw new Error(ERROR_MESSAGE.BRIDGE_SIZE);
    if (isOverBridgeSizeRange(size)) throw new Error(ERROR_MESSAGE.BRIDGE_SIZE);
  },

  /**
   * @param {string} movingSpace readMoving에서 입력받은 이동할 칸
   */
  validateReadMoving(movingSpace) {
    if (isNotUorD(movingSpace)) throw new Error(ERROR_MESSAGE.MOVING_SPACE);
  },
};

module.exports = Validate;

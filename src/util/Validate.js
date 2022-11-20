const {
  BRIDGE_SIZE,
  MOVING_SPACE,
  ERROR_MESSAGE,
  RETRY_OR_QUIT,
} = require("./Constant");

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

const isNotExistValueInObject = (targetObject, value) => {
  return !Object.values(targetObject).includes(value);
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
    if (isNotExistValueInObject(MOVING_SPACE, movingSpace))
      throw new Error(ERROR_MESSAGE.MOVING_SPACE);
  },

  /**
   * @param {string} retryOrQuit readGameCommand에서 입력받은 재시작 여부 입력 값
   */
  validateReadGameCommand(retryOrQuit) {
    if (isNotExistValueInObject(RETRY_OR_QUIT, retryOrQuit))
      throw new Error(ERROR_MESSAGE.RETRY_OR_QUIT);
  },
};

module.exports = Validate;

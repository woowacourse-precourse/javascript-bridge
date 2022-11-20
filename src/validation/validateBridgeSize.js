const BRIDGE = require("../constant/constants");
const MESSAGE = require("../constant/message");

const validateBridgeSize = (size) => {
  if (!isValidRange(size)) throw new Error(MESSAGE.ERROR.IS_NOT_VALID_RANGE_BRIDGE_SIZE);
};

const isValidRange = (size) => {
  return size >= BRIDGE.SIZE.MIN && size <= BRIDGE.SIZE.MAX;
};

module.exports = validateBridgeSize;

const BRIDGE_SIZE = require("../constant/constants");
const MESSAGE = require("../constant/message");

const validBridgeSize = (size) => {
  if (!isValidRange(size)) throw new Error(MESSAGE.ERROR.IS_NOT_VALID_RANGE_BRIDGE_SIZE);
};

const isValidRange = (size) => {
  return size >= BRIDGE_SIZE.MIN_SIZE && size <= BRIDGE_SIZE.MAX_SIZE;
};

module.exports = validBridgeSize;

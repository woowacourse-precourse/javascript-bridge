const { MIN_BRIDGE_SIZE, MAX_BRIDGE_SIZE } = require('./constants');

const validateBridgeSize = len => {
  if (isNaN(+len)) return false;
  if (len < MIN_BRIDGE_SIZE || len > MAX_BRIDGE_SIZE) return false;
  return true;
};

module.exports = { validateBridgeSize };

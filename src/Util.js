const {
  MIN_BRIDGE_SIZE,
  MAX_BRIDGE_SIZE,
  POSITIONS,
  RETRY_COMMAND_TYPE
} = require('./constants');

const validateBridgeSize = len => {
  if (Number.isNaN(+len)) throw new Error(ERROR_MSG.invalidBridgeSize);
  if (len < MIN_BRIDGE_SIZE || len > MAX_BRIDGE_SIZE)
    throw new Error(ERROR_MSG.invalidBridgeSize);
};

const validatePosition = position => {
  if (!POSITIONS.includes(position)) throw new Error(ERROR_MSG.invalidPosition);
};

const validateRetryCommand = command => {
  if (!RETRY_COMMAND_TYPE.includes(command))
    throw new Error(ERROR_MSG.invalidRetryCommand);
};

module.exports = { validateBridgeSize, validatePosition, validateRetryCommand };

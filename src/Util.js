const { Console } = require('@woowacourse/mission-utils');
const {
  MIN_BRIDGE_SIZE,
  MAX_BRIDGE_SIZE,
  POSITIONS,
  RETRY_COMMAND_TYPE,
  MAP_STATE,
  ERROR_MSG
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

const getMapState = (isSamePos, success, last) => {
  if (isSamePos && last) return success ? MAP_STATE.success : MAP_STATE.fail;
  if (isSamePos) return MAP_STATE.success;

  return MAP_STATE.empty;
};

const errorHandler = (message, repeatFunc) => {
  Console.print(message);
  repeatFunc();
};

module.exports = {
  validateBridgeSize,
  validatePosition,
  validateRetryCommand,
  getMapState,
  errorHandler
};

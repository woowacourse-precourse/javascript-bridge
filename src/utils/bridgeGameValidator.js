const { isCollectRange, isValidateNumber } = require('./common.js');
const { RULES, ERROR_MESSAGE } = require('../constants/index.js');

const isCollectBridgeLength = (input) => {
  isValidateNumber(input);
  isCollectRange(input, RULES.MIN_BRIDGE_NUMBER, RULES.MAX_BRIDGE_NUMBER);
};

const isValidateMoveInput = (input) => {
  const moveInputRegex = /^[U|D]$/g;
  if (!input.match(moveInputRegex)) {
    throw new Error(ERROR_MESSAGE.INVALID_MOVE_INPUT);
  }
};

const isValidateRetryInput = (input) => {
  const retryInputRegex = /^[R|Q]$/g;
  if (!input.match(retryInputRegex)) {
    throw new Error(ERROR_MESSAGE.INVALID_RETRY_INPIT);
  }
};

module.exports = { isCollectBridgeLength, isValidateMoveInput, isValidateRetryInput };

const { ERROR_MESSAGE } = require('../constants/messages');

const validateBridgeSize = (size) => {
  if (!Number(size)) throw ERROR_MESSAGE.ONLY_NUM;
  if (3 > size || size > 20) throw ERROR_MESSAGE.NOT_INT_RANGE;
  if (size % 1 !== 0) throw ERROR_MESSAGE.NOT_DECIMAL_POINT;
  return true;
};

const validateUserPosition = (position) => {
  if (position === 'u' || position === 'd')
    throw ERROR_MESSAGE.NOT_SMALL_LETTER;
  if (!(position === 'U' || position === 'D'))
    throw ERROR_MESSAGE.ONLY_MOVE_KEY;
  return true;
};

const validateRetryAnswer = (answer) => {
  if (answer === 'q' || answer === 'r') throw ERROR_MESSAGE.NOT_SMALL_LETTER;
  if (!(answer === 'Q' || answer === 'R')) throw ERROR_MESSAGE.ONLY_RETRY_KEY;
  return true;
};

module.exports = {
  validateBridgeSize,
  validateUserPosition,
  validateRetryAnswer,
};

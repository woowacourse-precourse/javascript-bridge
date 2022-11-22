const {
  ERROR_BRIDGE_MESSAGE,
  ERROR_MOVE_MESSAGE,
  ERROR_RETRY_MESSAGE
} = require('./constants/Message');
const { GAME_RANGE } = require('./constants/Constants');

const validateBridgeLength = userInput => {
  if (isNaN(userInput)) throw new Error(ERROR_BRIDGE_MESSAGE.ONLY_STRING);
  if (userInput < GAME_RANGE.START_INCLUSIVE || userInput > GAME_RANGE.END_INCLUSIVE)
    throw new Error(ERROR_BRIDGE_MESSAGE.RANGE);
};

const validateMovingValue = userInput => {
  if (typeof userInput !== 'string') throw new Error(ERROR_MOVE_MESSAGE.ONLY_STRING);

  if (userInput == 'u' || userInput == 'd') throw new Error(ERROR_MOVE_MESSAGE.CAPITAL);

  if (userInput != 'U' && userInput != 'D') throw new Error(ERROR_MOVE_MESSAGE.WRONG);
};

const validateEndValue = userInput => {
  if (typeof userInput !== 'string') throw new Error(ERROR_RETRY_MESSAGE.ONLY_STRING);

  if (userInput == 'r' || userInput == 'q') throw new Error(ERROR_RETRY_MESSAGE.CAPITAL);

  if (userInput != 'R' && userInput != 'Q') throw new Error(ERROR_RETRY_MESSAGE.WRONG);
};

module.exports = {
  validateBridgeLength,
  validateMovingValue,
  validateEndValue
};

const BridgeError = require('../Error/BridgeError');
const GameError = require('../Error/GameError');
const { ERROR_MESSAGE, INPUT_MESSAGE, RETRY_MESSAGE } = require('./Constant');

const Validator = {
  isNumber(number) {
    const regex = /^[0-9-]{1,2}$/g;

    if (!regex.test(number)) {
      throw new BridgeError(ERROR_MESSAGE.ISNAN);
    }
  },

  isNaturalNumber(number) {
    const regex = /^(\+)?([0-9]+)$/g;

    if (!regex.test(number)) {
      throw new BridgeError(ERROR_MESSAGE.ISNAN);
    }
  },

  isRightNumberRange(start, end, number) {
    if (number < start || number > end)
      throw new BridgeError(ERROR_MESSAGE.RANGE);
  },

  isRightLevelString(input) {
    if (input !== INPUT_MESSAGE.UP && input !== INPUT_MESSAGE.DOWN)
      throw new GameError(ERROR_MESSAGE.LEVEL_INPUT);
  },

  isRightRetryString(input) {
    if (input !== RETRY_MESSAGE.RETRY && input !== RETRY_MESSAGE.QUIT)
      throw new GameError(ERROR_MESSAGE.RETRY_INPUT);
  },
};

module.exports = Validator;

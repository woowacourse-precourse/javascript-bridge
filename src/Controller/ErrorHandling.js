const { Console } = require('@woowacourse/mission-utils');
const { MIN_BRIDGE_SIZE, MAX_BRIDGE_SIZE, UP, DOWN, RETRY, QUIT } = require('../constants/Command');
const {
  BRIDGE_SIZE_NATURAL_NUMBER,
  BRIDGE_SIZE_RANGE,
  MOVING_COMMAND,
  GAME_COMMAND,
} = require('../constants/ErrorMessage');

const ErrorHandling = {
  throwError(isInvalid, message) {
    if (isInvalid) {
      Console.print(message);
      throw new Error(message);
    }
  },

  validateBridgeSize(size) {
    const isNotNaturalNumber = !(/^\d+$/.test(size) && Number(size));
    ErrorHandling.throwError(isNotNaturalNumber, BRIDGE_SIZE_NATURAL_NUMBER);

    size = Number(size);
    const isOutOfRange = size < MIN_BRIDGE_SIZE || size > MAX_BRIDGE_SIZE;
    ErrorHandling.throwError(isOutOfRange, BRIDGE_SIZE_RANGE);
  },

  validateMovingCommand(movingCommand) {
    const isInvalid = movingCommand !== UP && movingCommand !== DOWN;
    ErrorHandling.throwError(isInvalid, MOVING_COMMAND);
  },

  validateGameCommand(gameCommand) {
    const isInvalid = gameCommand !== RETRY && gameCommand !== QUIT;
    ErrorHandling.throwError(isInvalid, GAME_COMMAND);
  },
};

module.exports = ErrorHandling;

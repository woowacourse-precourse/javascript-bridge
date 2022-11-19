const {
  COMMAND,
  EXCEPTION_MESSAGE,
  CAN_NOT_INCLUDES,
  BRIDGE_SIZE,
  REGEX,
} = require('./constant');

const Validator = {
  sizeValidityCheck: (size) => {
    Validator.throwErrorIfHasBlank(size);
    if (!REGEX.NUMBER.test(size)) throw EXCEPTION_MESSAGE.NUMBER;
    if (size < BRIDGE_SIZE.MIN || size > BRIDGE_SIZE.MAX) {
      throw EXCEPTION_MESSAGE.SIZE;
    }
  },

  directionValidityCheck: (direction) => {
    Validator.throwErrorIfHasBlank(direction);
    if (direction !== COMMAND.UP && direction !== COMMAND.DOWN) {
      throw EXCEPTION_MESSAGE.DIRECTION;
    }
  },

  commandValidityCheck: (command) => {
    Validator.throwErrorIfHasBlank(command);
    if (command !== COMMAND.RETRY && command !== COMMAND.QUIT) {
      throw EXCEPTION_MESSAGE.COMMAND;
    }
  },

  throwErrorIfHasBlank: (string) => {
    if (string.includes(CAN_NOT_INCLUDES)) throw EXCEPTION_MESSAGE.BLANK;
  },
};

module.exports = Validator;

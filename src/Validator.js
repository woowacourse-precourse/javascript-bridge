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
    if (!REGEX.NUMBER.test(size)) throw new Error(EXCEPTION_MESSAGE.NUMBER);
    if (size < BRIDGE_SIZE.MIN || size > BRIDGE_SIZE.MAX) {
      throw new Error(EXCEPTION_MESSAGE.SIZE);
    }
  },

  directionValidityCheck: (direction) => {
    Validator.throwErrorIfHasBlank(direction);
    if (direction !== COMMAND.UP && direction !== COMMAND.DOWN) {
      throw new Error(EXCEPTION_MESSAGE.DIRECTION);
    }
  },

  commandValidityCheck: (command) => {
    Validator.throwErrorIfHasBlank(command);
    if (command !== COMMAND.RETRY && command !== COMMAND.QUIT) {
      throw new Error(EXCEPTION_MESSAGE.COMMAND);
    }
  },

  throwErrorIfHasBlank: (string) => {
    if (string.includes(CAN_NOT_INCLUDES)) {
      throw new Error(EXCEPTION_MESSAGE.BLANK);
    }
  },
};

module.exports = Validator;

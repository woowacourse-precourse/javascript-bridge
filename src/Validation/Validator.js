const { BLOCK, COMMAND, ERROR } = require('../Constants');

const Validator = {
  bridgeSize(userInput) {
    if (userInput < 3 || userInput > 20) {
      throw new Error(ERROR.SCOPE);
    }
    if (!new RegExp('^[0-9]+$').test(userInput)) {
      throw new Error(ERROR.TYPE);
    }
  },

  direction(userInput) {
    if (userInput !== BLOCK.UPPER && userInput !== BLOCK.LOWER) {
      throw new Error(ERROR.DIRECTION);
    }
  },

  command(userInput) {
    if (userInput !== COMMAND.RETRY && userInput !== COMMAND.QUIT) {
      throw new Error(ERROR.COMMAND);
    }
  },
};

module.exports = Validator;


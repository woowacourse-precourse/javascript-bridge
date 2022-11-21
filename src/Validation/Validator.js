const { ERROR } = require('../Constant/message');
const { BLOCK, COMMAND } = require('../Constant/value');

const Validator = {
  direction(userInput) {
    if (userInput !== BLOCK.UPPER && userInput !== BLOCK.LOWER) {
      throw new Error(ERROR.DIRECTION);
    }
  },

  bridgeSize(userInput) {
    if (userInput < 3 || userInput > 20) {
      throw new Error(ERROR.SCOPE);
    }
    if (!new RegExp('^[0-9]+$').test(userInput)) {
      throw new Error(ERROR.TYPE);
    }
  },

  command(userInput) {
    if (userInput !== COMMAND.RETRY && userInput !== COMMAND.QUIT) {
      throw new Error(ERROR.COMMAND);
    }
  },
};

module.exports = Validator;


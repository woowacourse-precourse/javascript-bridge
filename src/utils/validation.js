const { BRIDGE_SIZE, KEYS } = require('./constants');

const Validate = {
  userInputSize(input) {
    const size = Number(input);
    if (isNaN(size) || size === undefined || !Number.isInteger(size)) {
      throw new Error();
    }
    if (size < BRIDGE_SIZE.MIN || size > BRIDGE_SIZE.MAX) {
      throw new Error();
    }
  },

  userInputMove(input) {
    if (input !== KEYS.UP && input !== KEYS.DOWN) {
      throw new Error();
    }
  },

  gameCommand(input) {
    if (input !== KEYS.RESTART && input !== KEYS.QUIT) {
      throw new Error();
    }
  }
};

module.exports = Validate;

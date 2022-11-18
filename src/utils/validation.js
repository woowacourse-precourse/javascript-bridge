const { MIN_BRIDGE_SIZE, MAX_BRIDGE_SIZE } = require('../constants/numbers');
const { KEYS } = require('../constants/keys');

const Validate = {
  userInputSize(input) {
    const size = Number(input);
    if (isNaN(size) || size === undefined || !Number.isInteger(size)) {
      throw new Error();
    }
    if (size < MIN_BRIDGE_SIZE || size > MAX_BRIDGE_SIZE) {
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

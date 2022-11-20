const ERROR_MESSAGES = require('./utils/messages');

const Validator = {
  bridgeLength(size) {
    if (
      typeof +size !== 'number' ||
      Number.isNaN(+size) ||
      +size < 3 ||
      +size > 20
    )
      throw new Error(ERROR_MESSAGES.BRIDGE_SIZE);
  },
};

module.exports = Validator;

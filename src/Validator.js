const ERROR_MESSAGES = require('./utils/messages');

const Validator = {
  bridgeLength(length) {
    if (
      typeof +length !== 'number' ||
      Number.isNaN(+length) ||
      +length < 3 ||
      +length > 20
    )
      throw new Error(ERROR_MESSAGES.BRIDGE_LENGTH);
  },
};

module.exports = Validator;

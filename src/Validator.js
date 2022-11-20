const ERROR_MESSAGES = require('./utils/messages');
const { WRONG_BRIDGE_SIZE, WRONG_MOVEMENT } = ERROR_MESSAGES;

const Validator = {
  bridgeSize(size) {
    if (
      typeof +size !== 'number' ||
      Number.isNaN(+size) ||
      +size < 3 ||
      +size > 20
    )
      throw new Error(WRONG_BRIDGE_SIZE);
  },

  moving(movement) {
    if (movement !== 'U' && movement !== 'D') throw new Error(WRONG_MOVEMENT);
  },
};

module.exports = Validator;

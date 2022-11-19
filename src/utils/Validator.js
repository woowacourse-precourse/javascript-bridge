const {
  ERROR_MESSAGE_BRIDGE_SIZE,
  ERROR_MESSAGE_DIRECTION,
  ERROR_MESSAGE_FINAL_GAME,
} = require('./Constant');
const Exception = require('./Exception');

const Validator = {
  bridgeSize(length) {
    if (!Number(length)) {
      Exception.throw(ERROR_MESSAGE_BRIDGE_SIZE.NOT_VALID_TYPE);
    }
    if (Number(length) < 3 || Number(length) > 20) {
      Exception.throw(ERROR_MESSAGE_BRIDGE_SIZE.NOT_VALID_RANGE);
    }
  },

  direction(command) {
    if (command !== 'U' && command !== 'D') {
      Exception.throw(ERROR_MESSAGE_DIRECTION.NOT_VALID_COMMAND);
    }
  },

  finalGame(command) {
    if (command !== 'R' && command !== 'Q') {
      Exception.throw(ERROR_MESSAGE_FINAL_GAME.NOT_VALID_COMMAND);
    }
  },
};

module.exports = Validator;

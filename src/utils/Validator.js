const {
  ERROR_MESSAGE_BRIDGE_SIZE,
  ERROR_MESSAGE_DIRECTION,
  ERROR_MESSAGE_FINAL_GAME,
  GAME_RULE,
  COMMAND,
} = require('./Constant');
const Exception = require('./Exception');

const Validator = {
  bridgeSize(length) {
    if (!Number(length)) {
      Exception.throw(ERROR_MESSAGE_BRIDGE_SIZE.NOT_VALID_TYPE);
    }
    if (Number(length) < GAME_RULE.MIN_BRIDGE_LENGTH || Number(length) > GAME_RULE.MAX_BRIDGE_LENGTH) {
      Exception.throw(ERROR_MESSAGE_BRIDGE_SIZE.NOT_VALID_RANGE);
    }
  },

  direction(command) {
    if (command !== COMMAND.UPSIDE && command !== COMMAND.DOWNSIDE) {
      Exception.throw(ERROR_MESSAGE_DIRECTION.NOT_VALID_COMMAND);
    }
  },

  finalGame(command) {
    if (command !== COMMAND.RETRY && command !== COMMAND.END) {
      Exception.throw(ERROR_MESSAGE_FINAL_GAME.NOT_VALID_COMMAND);
    }
  },
};

module.exports = Validator;

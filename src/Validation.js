const { CONDITION, ERROR_MESSAGE } = require('./Constants');

const Validation = {
  bridgeSize(answer) {
    if (CONDITION.NOT_INTEGER(answer)) {
      throw new Error(ERROR_MESSAGE.INTEGER);
    }

    if (CONDITION.INVALID_DOMAIN(answer)) {
      throw new Error(ERROR_MESSAGE.DOMAIN);
    }
  },
  moving(answer) {
    if (CONDITION.INVALID_MOVING(answer)) {
      throw new Error(ERROR_MESSAGE.MOVING);
    }
  },
  gameCommand(answer) {
    if (CONDITION.INVALID_GAME_COMMAND(answer)) {
      throw new Error(ERROR_MESSAGE.GAME_COMMAND);
    }
  },
};

module.exports = Validation;

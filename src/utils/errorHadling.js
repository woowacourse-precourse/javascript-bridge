const { GAME, NUMBER, ERROR } = require('./constant');

const validateBridgeSize = {
  validate(number) {
    this.isNumber(number);
    this.isRange(number);
  },
  isNumber(number) {
    if (isNaN(Number(number))) {
      throw ERROR.BRIDGE_SIZE_TYPE;
    }
  },
  isRange(number) {
    if (Number(number) < NUMBER.MIN || Number(number) > NUMBER.MAX)
      throw ERROR.BRIDGE_SIZE_RANGE;
  },
};

const validateNext = {
  validate(next) {
    if (next !== GAME.UP && next !== GAME.DOWN)
      throw ERROR.MOVING_DIRECTION_TYPE;
  },
};

const validateGameCommand = {
  validate(next) {
    if (next !== GAME.RETRY && next !== GAME.QUICK)
      throw ERROR.GAME_COMMAND_TYPE;
  },
};

module.exports = { validateBridgeSize, validateNext, validateGameCommand };

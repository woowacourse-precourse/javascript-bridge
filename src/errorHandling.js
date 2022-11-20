const { ERROR } = require('./utils/constant');

const validateBridgeSize = {
  validate(number) {
    this.isNumber(number);
    this.isRange(number);
  },
  isNumber(number) {
    if (isNaN(+number)) throw new Error(ERROR.BRIDGE_SIZE_TYPE);
  },
  isRange(number) {
    if (+number < 3 || +number > 30) throw new Error(ERROR.BRIDGE_SIZE_RANGE);
  },
};

const validateNext = {
  validate(next) {
    if (next !== 'U' && next !== 'D')
      throw new Error(ERROR.MOVING_DIRECTION_TYPE);
  },
};

const validateGameCommand = {
  validate(next) {
    if (next !== 'R' && next !== 'Q') throw new Error(ERROR.GAME_COMMAND_TYPE);
  },
};

module.exports = { validateBridgeSize, validateNext, validateGameCommand };

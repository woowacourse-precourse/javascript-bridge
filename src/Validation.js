const { ERROR } = require('./phrases');

const Validation = {
  bridgeSize(input) {
    if (isNaN(input)) throw new Error(ERROR.BRIDGE_SIZE_TYPE);
    if (input < 3) throw new Error(ERROR.BRIDGE_SIZE_MIN);
    if (input > 20) throw new Error(ERROR.BRIDGE_SIZE_MAX);
  },

  moving(input) {
    if (input === 'u' || input === 'd') throw new Error(ERROR.MOVING_UPPER);
    if (input !== 'U' && input !== 'D') throw new Error(ERROR.MOVING_LETTER);
  },

  gameCommand(input) {
    if (input === 'q' || input === 'r') throw new Error(ERROR.GAME_COMMAND_UPPER);
    if (input !== 'Q' && input !== 'R') throw new Error(ERROR.GAME_COMMAND_LETTER);
  },
};

module.exports = Validation;

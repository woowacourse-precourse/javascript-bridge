const { ERROR } = require('./phrases');

const Validation = {
  NUMBER_MIN_SIZE: 3,
  NUMBER_MAX_SIZE: 20,
  INITAIL_UP_LOWER: 'u',
  INITAIL_DOWN_LOWER: 'd',
  INITAIL_UP: 'U',
  INITAIL_DOWN: 'D',
  INITAIL_QUIT_LOWER: 'q',
  INITAIL_RETRY_LOWER: 'r',
  INITAIL_QUIT: 'Q',
  INITAIL_RETRY: 'R',

  bridgeSize(input) {
    if (isNaN(input)) throw new Error(ERROR.BRIDGE_SIZE_TYPE);
    if (input < this.NUMBER_MIN_SIZE) throw new Error(ERROR.BRIDGE_SIZE_MIN);
    if (input > this.NUMBER_MAX_SIZE) throw new Error(ERROR.BRIDGE_SIZE_MAX);
  },

  moving(input) {
    if (input === this.INITAIL_UP_LOWER || input === this.INITAIL_DOWN_LOWER)
      throw new Error(ERROR.MOVING_UPPER);
    if (input !== this.INITAIL_UP && input !== this.INITAIL_DOWN)
      throw new Error(ERROR.MOVING_LETTER);
  },

  gameCommand(input) {
    if (input === this.INITAIL_QUIT_LOWER || input === this.INITAIL_RETRY_LOWER)
      throw new Error(ERROR.GAME_COMMAND_UPPER);
    if (input !== this.INITAIL_QUIT && input !== this.INITAIL_RETRY)
      throw new Error(ERROR.GAME_COMMAND_LETTER);
  },
};

module.exports = Validation;

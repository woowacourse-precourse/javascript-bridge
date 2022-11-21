const CONSTANT = require('../constant');

const { BRIDGE_MAX_SIZE, BRIDGE_MIN_SIZE } = CONSTANT.Size;
const { INPUT_ERROR } = CONSTANT.ERROR_MESSAGE;
const { UPSTAIR_MARK, DOWNSTAIR_MARK, RESTART_MARK, QUIT_MARK } = CONSTANT.MARKS;

const Validate = {
  bridgeSizeValidate(size) {
    if (!(Number(size) >= BRIDGE_MIN_SIZE && Number(size) <= BRIDGE_MAX_SIZE)) {
      throw new Error(INPUT_ERROR);
    }
  },

  moveInputValidate(input) {
    if (!(input === UPSTAIR_MARK || input === DOWNSTAIR_MARK)) {
      throw new Error(INPUT_ERROR);
    }
  },
  gameCommandValidate(answer) {
    if (!(answer === RESTART_MARK || answer === QUIT_MARK)) {
      throw new Error(INPUT_ERROR);
    }
  },
};

module.exports = Validate;

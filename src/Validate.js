const { ERROR_MSG, SELECT, BRIDGE } = require('./constant');

const Validate = {
  size(size) {
    const number = /^(0|[-]?[1-9]\d*)$/.test(size) || typeof size === 'number';
    const length = size >= BRIDGE.SIZE_MINIMUM && size <= BRIDGE.SIZE_MAXIMUM;

    if (!length || !number) {
      throw new Error(ERROR_MSG.ENTER_NUMBER_THREE_TO_TWENTY);
    }
  },

  move(move) {
    if (move !== BRIDGE.UP && move !== BRIDGE.DOWN) {
      throw new Error(ERROR_MSG.ENTER_U_OR_D);
    }
  },

  retryOrEndInput(input) {
    if (input !== SELECT.RETRY && input !== SELECT.QUIT) {
      throw new Error(ERROR_MSG.ENTER_R_OR_Q);
    }
  },
};

module.exports = Validate;

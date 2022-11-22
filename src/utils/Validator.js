const { DEFAULT, ERROR_MESSAGE } = require('./constants.js');

const Validator = {
  isValidRange(input) {
    const regex = /^([3-9]|1[0-9]|20)$/;
    if (!regex.test(input)) {
      throw new Error(ERROR_MESSAGE.RANGE);
    }
  },

  isValidDirection(input) {
    if (input !== DEFAULT.UP || input !== DEFAULT.DOWN) {
      throw new Error(ERROR_MESSAGE.U_OR_D);
    }
  },

  isValidCommand(input) {
    if (input !== DEFAULT.RESTART || input !== DEFAULT.QUIT) {
      throw new Error(ERROR_MESSAGE.R_OR_Q);
    }
  },
};

module.exports = Validator;

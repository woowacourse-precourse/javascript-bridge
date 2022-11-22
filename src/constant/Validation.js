const { UTIL, ERROR } = require('./constant');

const Validation = {
  validateSize(input) {
    if (Number.isNaN(input)) throw new Error(ERROR.SIZE_NUMBER);
    if (!Number.isInteger(input)) throw new Error(ERROR.SIZE_INTEGER);
    if (input < UTIL.MIN || input > UTIL.MAX) throw new Error(ERROR.SIZE_RANGE);
  },

  validateMove(input) {
    if (input !== UTIL.UP && input !== UTIL.DOWN) throw new Error(ERROR.MOVE);
  },

  validateReGame(input) {
    if (input !== UTIL.RETRY && input !== UTIL.QUIT) {
      throw new Error(ERROR.REGAME);
    }
  },
};

module.exports = Validation;

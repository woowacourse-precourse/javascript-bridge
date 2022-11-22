const { error } = require('./message');

const Validate = {
  size(input) {
    if (
      isNaN(input) ||
      !Number.isInteger(Number(input)) ||
      3 > input ||
      input > 20
    )
      throw new Error(error.SIZE);
  },

  move(input) {
    if (input !== 'U' && input !== 'D') throw new Error(error.MOVE);
  },

  retry(input) {
    if (input !== 'R' && input !== 'Q') throw new Error(error.RETRY);
  },
};

module.exports = Validate;

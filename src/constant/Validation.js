const { UTIL } = require('./constant');

const Validation = {
  validateSize(input) {
    if (Number.isNaN(input)) throw new Error('[ERROR]');
    if (!Number.isInteger(input)) throw new Error('[ERROR]');
    if (input < 3 || input > 20) throw new Error('[ERROR]');
  },

  validateMove(input) {
    if (input !== UTIL.UP && input !== UTIL.DOWN) throw new Error('[ERROR]');
  },
};

module.exports = Validation;

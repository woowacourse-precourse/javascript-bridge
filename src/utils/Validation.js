const { ERROR } = require('./constants');

const Validation = {
  checkType(input) {
    if (Number.isNaN(input)) throw ERROR.mustBeNumber;
  },

  checkRange(input) {
    if (input < 3 || input > 20) throw ERROR.mustBeInRange;
  },
};

module.exports = Validation;

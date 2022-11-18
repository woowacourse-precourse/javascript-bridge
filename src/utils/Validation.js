const { ERROR } = require('./constants');

const Validation = {
  checkNumberType(input) {
    if (Number.isNaN(input)) throw ERROR.mustBeNumber;
  },

  checkStringType(input) {
    if (!Number.isNaN(Number(input))) throw ERROR.mustBeString;
  },

  checkRange(input) {
    if (input < 3 || input > 20) throw ERROR.mustBeInRange;
  },

  checkValidDirection(input) {
    if (!(input === 'U' || input === 'D')) throw ERROR.mustBeValidDirection;
  },

  checkUpperCase(input) {
    if (input === 'u' || input === 'd') throw ERROR.mustBeUpperCase;
  },
};

module.exports = Validation;

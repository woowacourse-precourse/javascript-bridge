const { ERROR } = require('./constants');

const Validation = {
  checkNumberType(input) {
    if (Number.isNaN(input)) throw ERROR.mustBeNumber;
  },

  checkStringType(input) {
    if (!Number.isNaN(Number(input))) throw ERROR.mustBeString;
  },

  checkBlank(input) {
    if (input.length === 0) throw ERROR.mustNotBeBlank;
  },

  checkRange(input) {
    if (input < 3 || input > 20) throw ERROR.mustBeInRange;
  },

  checkValidDirection(input) {
    if (!(input === 'U' || input === 'D')) throw ERROR.mustBeValidDirection;
  },

  checkUpperCaseOfDirection(input) {
    if (input === 'u' || input === 'd') throw ERROR.mustBeUpperCase;
  },

  checkValidCommand(input) {
    if (!(input === 'R' || input === 'Q')) throw ERROR.mustBeValidCommand;
  },

  checkUpperCaseOfCommand(input) {
    if (input === 'r' || input === 'q') throw ERROR.mustBeUpperCase;
  },
};

module.exports = Validation;

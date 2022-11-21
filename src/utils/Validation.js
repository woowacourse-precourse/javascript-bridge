const {
  ERROR,
  UP,
  DOWN,
  MIN_SIZE,
  MAX_SIZE,
  RETRY,
  QUIT,
  ZERO,
  LOWERCASE_UP,
  LOWERCASE_DOWN,
  LOWERCASE_RETRY,
  LOWERCASE_QUIT,
} = require('./constants');

const Validation = {
  checkNumberType(input) {
    if (Number.isNaN(input)) throw ERROR.mustBeNumber;
  },

  checkStringType(input) {
    if (!Number.isNaN(Number(input))) throw ERROR.mustBeString;
  },

  checkBlank(input) {
    if (input.length === ZERO) throw ERROR.mustNotBeBlank;
  },

  checkRange(input) {
    if (input < MIN_SIZE || input > MAX_SIZE) throw ERROR.mustBeInRange;
  },

  checkValidDirection(input) {
    if (!(input === UP || input === DOWN)) throw ERROR.mustBeValidDirection;
  },

  checkUpperCaseOfDirection(input) {
    if (input === LOWERCASE_UP || input === LOWERCASE_DOWN) {
      throw ERROR.mustBeUpperCase;
    }
  },

  checkValidCommand(input) {
    if (!(input === RETRY || input === QUIT)) throw ERROR.mustBeValidCommand;
  },

  checkUpperCaseOfCommand(input) {
    if (input === LOWERCASE_RETRY || input === LOWERCASE_QUIT) {
      throw ERROR.mustBeUpperCase;
    }
  },
};

module.exports = Validation;

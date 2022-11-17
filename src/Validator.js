const { ERROR_MESSAGES } = require('./Constant');

const Validator = Object.freeze({
  spaceReg: /\s/g,

  checkSpace(input) {
    const trimedInput = input.trim();
    if (trimedInput.match(this.spaceReg)) throw new Error(ERROR_MESSAGES.NOT_EMPTY);
    else return true;
  },

  checkNan(input) {
    if (Number.isNaN(+input)) throw new Error(ERROR_MESSAGES.NOT_NAN);
    else return true;
  },

  checkMoveInput(input) {
    if (input !== 'D' && input !== 'U') throw new Error(ERROR_MESSAGES.ONLY_U_D);
    else return true;
  },

  checkGameOption(input) {
    if (input !== 'R' && input !== 'Q') throw new Error(ERROR_MESSAGES.ONLY_R_Q);
    else return true;
  },

  checkRange(input) {
    if (input > 20 || input < 3) throw new Error(ERROR_MESSAGES.RANGE_ERROR);
    else return true;
  },
});

module.exports = Validator;

console.log(Validator.checkRange('22'));

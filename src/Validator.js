const { ERROR_MESSAGES } = require('./Constant');

const Validator = Object.freeze({
  spaceReg: /\s/g,

  GAME_OPTION_CONDITIONS: ['Q', 'R'],

  MOVEMENT_CONDITIONS: ['U', 'D'],

  checkSpace(input) {
    const trimedInput = input.trim();
    if (trimedInput.match(this.spaceReg)) throw new Error(ERROR_MESSAGES.NOT_EMPTY);
    else return true;
  },

  checkNan(input) {
    if (Number.isNaN(+input)) throw new Error(ERROR_MESSAGES.NOT_NAN);
    else return true;
  },

  checkCondition(input, conditionArray, error) {
    const trimedInput = input.trim();
    if (trimedInput !== conditionArray[0] && trimedInput !== conditionArray[1]) {
      throw new Error(error);
    } else return true;
  },

  checkRange(input) {
    if (input > 20 || input < 3) throw new Error(ERROR_MESSAGES.RANGE_ERROR);
    else return true;
  },
});

module.exports = Validator;

console.log(
  Validator.checkCondition('22', Validator.GAME_OPTION_CONDITION, ERROR_MESSAGES.ONLY_U_D),
);

const Validator = Object.freeze({
  SPAGE_REG: /\s/g,

  GAME_OPTION_CONDITIONS: ['Q', 'R'],

  MOVEMENT_CONDITIONS: ['U', 'D'],

  ERROR_MESSAGES: {
    NOT_EMPTY: '[ERROR]:공백은 허용되지않습니다.',
    NOT_NAN: '[ERROR]:NAN 타입은 허용되지 않습니다',
    RANGE_ERROR: '[ERROR]:3~20까지의 숫자만 입력가능합니다',
    ONLY_R_Q: '[ERROR]:R과Q만 입력가능합니다.',
    ONLY_U_D: '[ERROR]:U와D만 입력가능합니다.',
  },

  checkSpace(input) {
    const trimedInput = input.trim();
    if (trimedInput.match(this.SPAGE_REG)) throw new Error(this.ERROR_MESSAGES_NOT_EMPTY);
    else return true;
  },

  checkNan(input) {
    if (Number.isNaN(+input)) throw new Error(this.ERROR_MESSAGES.NOT_NAN);
    else return true;
  },

  checkCondition(input, conditionArray, error) {
    const trimedInput = input.trim();
    if (trimedInput !== conditionArray[0] && trimedInput !== conditionArray[1]) {
      throw new Error(error);
    } else return true;
  },

  checkRange(input) {
    if (input > 20 || input < 3) throw new Error(this.ERROR_MESSAGES.RANGE_ERROR);
    else return true;
  },
});

module.exports = Validator;

console.log(
  Validator.checkCondition(
    '22',
    Validator.GAME_OPTION_CONDITIONS,
    Validator.ERROR_MESSAGES.ONLY_R_Q,
  ),
);

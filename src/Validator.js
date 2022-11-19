const Validator = Object.freeze({
  SPAGE_REG: /\s/g,

  GAME_OPTION_CONDITIONS: ['Q', 'R'],

  MOVEMENT_CONDITIONS: ['U', 'D'],

  BRIDGE_RANGE: { MIN: 3, MAX: 20 },

  ERROR_MESSAGES: {
    NOT_EMPTY: '[ERROR]:공백은 허용되지않습니다.',
    NOT_NAN: '[ERROR]:NAN 타입은 허용되지 않습니다',
    RANGE_ERROR: '[ERROR]:3~20까지의 숫자만 입력가능합니다',
    ONLY_R_Q: '[ERROR]:R과Q만 입력가능합니다.',
    ONLY_U_D: '[ERROR]:U와D만 입력가능합니다.',
  },

  checkSpace(input) {
    const trimedInput = input.trim();
    if (trimedInput.match(Validator.SPAGE_REG)) throw new Error(Validator.ERROR_MESSAGES.NOT_EMPTY);
    return true;
  },

  checkNan(input) {
    if (Number.isNaN(+input)) throw new Error(Validator.ERROR_MESSAGES.NOT_NAN);
    return true;
  },

  confirmOfCondition(input, condition) {
    if (condition === 'move') {
      this.checkCondition(input, this.MOVEMENT_CONDITIONS, this.ERROR_MESSAGES.ONLY_U_D);
    }
    if (condition === 'option') {
      this.checkCondition(input, this.GAME_OPTION_CONDITIONS, this.ERROR_MESSAGES.ONLY_R_Q);
    }
  },

  checkCondition(input, conditionArray, error) {
    const trimedInput = input.trim();
    if (trimedInput !== conditionArray[0] && trimedInput !== conditionArray[1]) {
      throw new Error(error);
    }
    return true;
  },

  checkBridgeInput(input) {
    if (Validator.checkSpace(input) && Validator.checkNan(input) && Validator.checkRange(input)) {
      return true;
    }
    return '알수없는 오류';
  },

  checkRange(input) {
    if (input > Validator.BRIDGE_RANGE.MAX || input < Validator.BRIDGE_RANGE.MIN) {
      throw new Error(Validator.ERROR_MESSAGES.RANGE_ERROR);
    }
    return true;
  },
});

module.exports = Validator;

const UTILS_URL = '@woowacourse/mission-utils';

const BRIDGESIZE_KEY = {
  MINIMUM: 3,
  MAXIMUM: 20,
  CHECK_VALIDATION: {
    validatorName: ['isNumber', 'isNumberInRange'],
    validateInfo: {
      minimumRange: 3,
      maximumRange: 20,
    },
  },
};

const MOVEMENT_KEY = {
  UP: 'U',
  DOUN: 'D',
  CHECK_VALIDATION: {
    validatorName: ['isAlphabet', 'isUpperCase', 'isStringInList'],
    validateInfo: { checkList: ['U', 'D'] },
  },
};

const COMMAND_KEY = {
  QUIT: 'Q',
  RESTART: 'R',
  CHECK_VALIDATION: {
    validatorName: ['isAlphabet', 'isUpperCase', 'isStringInList'],
    validateInfo: { checkList: ['Q', 'R'] },
  },
};

module.exports = { UTILS_URL, BRIDGESIZE_KEY, MOVEMENT_KEY, COMMAND_KEY };

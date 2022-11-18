const Validation = require('./Validaion');

const ObjectToValidate = {
  bridgeSize: {
    minimum: 3,
    maximum: 20,
    checkValidation(checkElement, minimum, maximum) {
      return new Validation(
        [
          { validatorName: 'isNumber', check: [checkElement] },
          { validatorName: 'isNumberInRange', check: [checkElement, minimum, maximum] },
        ],
        { callback: checkElement }
      ).showResult();
    },
  },
  movement: {
    up: 'U',
    down: 'D',
    checkValidation(checkElement, checkList) {
      return new Validation(
        [
          { validatorName: 'isAlphabet', check: [checkElement] },
          { validatorName: 'isUpperCase', check: [checkElement] },
          { validatorName: 'isStringInList', check: [checkElement, checkList] },
        ],
        { callback: checkElement }
      ).showResult();
    },
  },
  command: {
    quit: 'Q',
    restart: 'R',
    checkValidation(checkElement, checkList) {
      return new Validation(
        [
          { validatorName: 'isAlphabet', check: [checkElement] },
          { validatorName: 'isUpperCase', check: [checkElement] },
          { validatorName: 'isStringInList', check: [checkElement, checkList] },
        ],
        { callback: checkElement }
      ).showResult();
    },
  },
};

module.exports = ObjectToValidate;

const Validation = require('./Validaion');

const ObjectToValidate = {
  bridgeSize: {
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
  progress: {
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

const { BRIDGE_LENGTH, NEXT_STEP, RETRY, IS_NUMBER_EMPTY, ONE_VALUE } = require('./constants/Message');

class Validation {
  static bridgeLength(number) {
    if (Validation.isEmpty(number)) throw new Error(BRIDGE_LENGTH.IS_EMPTY); 
    if (!Validation.isNumber(number)) throw new Error(BRIDGE_LENGTH.IS_NUMBER)
    if (!Validation.numberNet(number)) throw new Error(BRIDGE_LENGTH.NUMBER_NET);
  }

  static nextStep(value) {
    if (Validation.isNumberEmpty(value)) throw new Error(IS_NUMBER_EMPTY);
    if (!Validation.oneValue(value)) throw new Error(ONE_VALUE);
    if (Validation.nextStepLowerCase(value)) throw new Error(NEXT_STEP.NEXT_STEP_LOWER_CASE)
    if (!Validation.nextStepValue(value)) throw new Error(NEXT_STEP.NEXT_STEP_VALUE);
  }

  static retry(value) {
    if (Validation.isNumberEmpty(value)) throw new Error(IS_NUMBER_EMPTY);
    if (!Validation.oneValue(value)) throw new Error(ONE_VALUE);
    if (Validation.retryLowerCase(value)) throw new Error(RETRY.RETRY_LOWER_CASE)
    if (!Validation.retryOrNotValue(value)) throw new Error(RETRY.RETRY_OR_NOT_VALUE);
  }

  static nextStepLowerCase(value) {
    return value === 'u' || value === 'd'
  }

  static retryLowerCase(value) {
    return value === 'r' || value === 'q'
  }

  static retryOrNotValue(value) {
    return value === 'R' || value === 'Q'
  }

  static nextStepValue(value) {
    return value === 'U' || value === 'D'
  }

  static oneValue(value) {
    return value.length === 1;
  }

  static isNumberEmpty(value) {
    return value.length === 0;
  }

  static isEmpty(number) {
    return number.toString().length === 0;
  }

  static numberNet(number) {
    return number > 2 && number < 21;
  }


  
  static isNumber(number) {
    const RegExp = /^[0-9]+$/;
    return RegExp.test(number);
  }
}

module.exports = Validation;

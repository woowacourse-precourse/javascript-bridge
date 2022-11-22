const { BRIDGE_LENGTH, NEXT_STEP, RETRY, IS_NUMBER_EMPTY, ONE_VALUE } = require('./constants/Message');
const { VALIDATION } = require('./constants/Settings');

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
    return value === VALIDATION.lower_u || value === VALIDATION.lower_d
  }

  static retryLowerCase(value) {
    return value === VALIDATION.lower_r || value === VALIDATION.lower_q
  }

  static retryOrNotValue(value) {
    return value === VALIDATION.upper_r || value === VALIDATION.upper_q
  }

  static nextStepValue(value) {
    return value === VALIDATION.upper_u || value === VALIDATION.upper_d
  }

  static oneValue(value) {
    return value.length === VALIDATION.one_value;
  }

  static isNumberEmpty(value) {
    return !value;
  }

  static isEmpty(number) {
    return !number;
  }

  static numberNet(number) {
    return number > VALIDATION.min_value && number < VALIDATION.max_value;
  }
  
  static isNumber(number) {
    const RegExp = VALIDATION.number_role;
    return RegExp.test(number);
  }
}

module.exports = Validation;

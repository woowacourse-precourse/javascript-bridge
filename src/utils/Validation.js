const { BRIDGE_RANGE, MOVING_TYPE, GAME_COMMAND, ERROR_MESSAGE } = require('../constants');
const { isNull, isInRange, isOneInArray, isOneSize } = require('./Utils');

/** 유효성 검사 조건들을 모아둔 객체 */
const ValidationCondition = {
  checkNull: (source) => {
    if (isNull(source)) {
      return { isValidation: false, errorMessage: ERROR_MESSAGE.NULL };
    }
  },

  checkNaN: (source) => {
    if (isNaN(+source)) {
      return { isValidation: false, errorMessage: ERROR_MESSAGE.BRIDGE_SIZE.NOT_NUMBER };
    }
  },

  checkRange: (source, lower, upper) => {
    if (!isInRange(source, lower, upper)) {
      return { isValidation: false, errorMessage: ERROR_MESSAGE.BRIDGE_SIZE.NOT_IN_RANGE };
    }
  },

  checkOneSize: (source) => {
    if (!isOneSize(source)) {
      return { isValidation: false, errorMessage: ERROR_MESSAGE.MOVING.MUTLIPLE_VALUE };
    }
  },

  checkIncluding: (source, ...array) => {
    if (!isOneInArray(source, ...array)) {
      return { isValidation: false, errorMessage: ERROR_MESSAGE.MOVING.NOT_U_OR_D };
    }
  },
};

/** 각 타입에 맞게 유효성 결과를 반환하는 객체 */
const Validation = {
  validateBridgeSize(source) {
    const { LOWER_INCLUSIVE: lower, UPPER_INCLUSIVE: upper } = BRIDGE_RANGE;
    const validateResult = {
      checkNull: ValidationCondition.checkNull(source),
      checkNaN: ValidationCondition.checkNaN(source),
      checkRange: ValidationCondition.checkRange(source, lower, upper),
    };

    const result = Object.values(validateResult).filter((result) => result !== undefined)[0];

    return result || { isValidation: true, errorMessage: null };
  },

  validateMoving(source) {
    const validateResult = {
      checkNull: ValidationCondition.checkNull(source),
      checkOneSize: ValidationCondition.checkOneSize(source),
      checkIncluding: ValidationCondition.checkIncluding(source, MOVING_TYPE.UP, MOVING_TYPE.DOWN),
    };

    const result = Object.values(validateResult).filter((result) => result !== undefined)[0];

    return result || { isValidation: true, errorMessage: null };
  },

  validateGameCommand(source) {
    const { RETRY, QUIT } = GAME_COMMAND;
    const validateResult = {
      checkNull: ValidationCondition.checkNull(source),
      checkOneSize: ValidationCondition.checkOneSize(source),
      checkIncluding: ValidationCondition.checkIncluding(source, RETRY, QUIT),
    };

    const result = Object.values(validateResult).filter((result) => result !== undefined)[0];

    return result || { isValidation: true, errorMessage: null };
  },
};

module.exports = Validation;

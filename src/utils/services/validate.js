const CustomError = require('../../CustomError');
const {
  DIRECTION, GAME_COMMAND, MAX_SIZE, MIN_SIZE
} = require('../constants/GameSystem');
const { ERROR_MESSAGE } = require('../constants/ErrorMessage');

/**
 * @param {Object} option
 * @param {string} input
 * @returns boolean
 */
const isIncludesObjectKeys = (option, input) => Object.keys(option).includes(input);

/**
 * 
 * @param {Object} option 
 * @param {string} input 
 * @returns 
 */
const isIncludesObjectValues = (option, input) => Object.values(option).includes(input);

/**
* 입력값이 숫자인지 확인하는 함수
* @param {*} input
* @returns boolean
*/
const isNumber = (input) => {
  const regExp = /^[0-9]*$/g;
  return regExp.test(input);
};

/**
* 입력값이 정해진 범위 내의 숫자인지 확인하는 함수
* @param {*} min
* @param {*} max
* @param {*} number
* @returns boolean
*/
const isRangeNumber = (min, max, number) => number >= min && number <= max;

const bridgeSizeValidation = (input) => {
  if (!isNumber(input)) throw new CustomError(ERROR_MESSAGE.input_number);
  if (!isRangeNumber(MIN_SIZE, MAX_SIZE, Number(input))) { throw new CustomError(ERROR_MESSAGE.range_number); }
};

const movingValidation = (input) => {
  if (isNumber(input) || !isIncludesObjectValues(DIRECTION, input)) throw new CustomError(ERROR_MESSAGE.valid_move);
};

const gameCommandValidation = (input) => {
  if (isNumber(GAME_COMMAND, input) || !isIncludesObjectKeys(GAME_COMMAND, input)) throw new CustomError(ERROR_MESSAGE.valid_command);
};

module.exports = {
  bridgeSizeValidation,
  movingValidation,
  gameCommandValidation,
};

const CustomError = require('../../CustomError');
const {
  MOVE_UP_DOWN, GAME_COMMAND,
} = require('../constants/GameSystem');
const { ErrorMessage } = require('../constants/ErrorMessage');

/**
 * 입력값이 정해진 옵션 중 하나인지 확인하는 함수
 * @param {Object} option
 * @param {string} input
 * @returns boolean
 */
const isDecidedAnswer = (option, input) => Object.keys(option).includes(input);

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
  if (!isNumber(input)) throw new CustomError(ErrorMessage.input_number);
  if (!isRangeNumber(3, 20, Number(input))) { throw new CustomError(ErrorMessage.range_number); }
};

const movingValidation = (input) => {
  if (isNumber(input) || !isDecidedAnswer(MOVE_UP_DOWN, input)) throw new CustomError(ErrorMessage.valid_move);
};

const gameCommandValidation = (input) => {
  if (isNumber(GAME_COMMAND, input) || !isDecidedAnswer(GAME_COMMAND, input)) throw new CustomError(ErrorMessage.valid_command);
};

module.exports = {
  bridgeSizeValidation,
  movingValidation,
  gameCommandValidation,
};

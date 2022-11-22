const {
  ERROR_MESSAGE,
  BRIDGE_VALUE,
  MOVE_VALUE,
  COMMAND_VALUE,
} = require("../constants");
const AppError = require("../errors/AppError");

/**
 * 사용자가 입력한 다리 길이 값이 형식에 맞는지 체크한다.
 * @param {string} value 사용자의 입력값
 */
const isBridgeLengthValid = (value) => {
  if (isEmptyInput(value)) throw new AppError(ERROR_MESSAGE.EMPTY_ERROR);
  if (!isNumberType(value)) throw new AppError(ERROR_MESSAGE.TYPE_ERROR);
  if (!isRangeValid(value)) throw new AppError(ERROR_MESSAGE.RANGE_ERROR);
};

/**
 * 사용자가 입력한 다리 이동 값이 형식에 맞는지 체크한다.
 * @param {string} value 사용자의 입력값
 */
const isMoveValid = (value) => {
  if (isEmptyInput(value)) throw new AppError(ERROR_MESSAGE.EMPTY_ERROR);
  if (!isAlphabetValid(value, MOVE_VALUE.UP, MOVE_VALUE.DOWN))
    throw new AppError(
      ERROR_MESSAGE.ALPHABET_ERROR(MOVE_VALUE.UP, MOVE_VALUE.DOWN)
    );
};

/**
 * 사용자가 입력한 게임 재시작 혹인 종료 값이 형식에 맞는지 체크한다.
 * @param {string} value 사용자의 입력값
 */
const isCommandValid = (value) => {
  if (isEmptyInput(value)) throw new AppError(ERROR_MESSAGE.EMPTY_ERROR);
  if (!isAlphabetValid(value, COMMAND_VALUE.RESTART, COMMAND_VALUE.QUIT))
    throw new AppError(
      ERROR_MESSAGE.ALPHABET_ERROR(COMMAND_VALUE.RESTART, COMMAND_VALUE.QUIT)
    );
};

/**
 * 사용자의 입력값이 공백인지 체크한다.
 * @param {string} value 사용자의 입력값
 * @return {boolean} 입력값이 공백인지 여부
 */
const isEmptyInput = (value) => !value;

/**
 * 사용자의 입력값이 숫자인지 체크한다.
 * @param {string} value 사용자의 입력값
 * @return {boolean} 입력값이 숫자인지 여부
 */
const isNumberType = (value) => !Number.isNaN(Number(value));

/**
 * 사용자의 입력값이 숫자인지 체크한다.
 * @param {string} value 사용자의 입력값
 * @return {boolean} 입력값이 범위안에 포함되는지 여부
 */
const isRangeValid = (value) =>
  BRIDGE_VALUE.MIN <= value && value <= BRIDGE_VALUE.MAX;

/**
 * 사용자의 입력값이 숫자인지 체크한다.
 * @param {string} value 사용자의 입력값
 * @return {boolean} 입력값이 옵션에 맞는 알파벳인지 여부
 */
const isAlphabetValid = (value, option1, option2) =>
  value === option1 || value === option2;

module.exports = { isBridgeLengthValid, isMoveValid, isCommandValid };

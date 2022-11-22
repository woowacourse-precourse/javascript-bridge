const { ERROR_MESSAGE } = require('../constants/index.js');
/**
 * 공통으로 재사용될 수 있는 util 함수를 모아놓은 파일
 */

/**
 * 입력된 문자열이 0-9인 숫자가 될 수 있는 문자열인지 체크하는 함수
 * @param {string} input
 */
const isValidateNumber = (input) => {
  const numberRegex = /^[0-9]+$/g;
  if (!input.match(numberRegex)) {
    throw new Error(ERROR_MESSAGE.NON_NUMERIC_VALUE);
  }
};

/**
 * 숫자가 min <= number <= max 범위를 만족하는지 체크하는 함수
 * @param {number} number
 * @param {number} min
 * @param {number} max
 */
const isCollectRange = (number, min, max) => {
  if (number < min || number > max) {
    throw new Error(ERROR_MESSAGE.INVALID_RANGE(min, max));
  }
};

/**
 * 콘솔에 개행을 추가하는 함수
 */
const newLine = () => {
  console.log('');
};
module.exports = { isValidateNumber, isCollectRange, newLine };

const { ERROR_MESSAGE } = require('../constants/index.js');
/**
 * 공통으로 재사용될 수 있는 util 함수를 모아놓은 파일
 */

const isValidateNumber = (input) => {
  const numberRegex = /^[0-9]+$/g;
  if (!input.match(numberRegex)) {
    throw new Error(ERROR_MESSAGE.NON_NUMERIC_VALUE);
  }
};

const isCollectRange = (number, min, max) => {
  if (number < min || number > max) {
    throw new Error(ERROR_MESSAGE.INVALID_RANGE(min, max));
  }
};

const newLine = () => {
  console.log('');
};
module.exports = { isValidateNumber, isCollectRange, newLine };

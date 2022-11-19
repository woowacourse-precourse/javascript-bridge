const ERROR_NAME = require('../Constant/constant');
const CustomError = require('./CustomError');

module.exports = function bridgeValidate(input) {
  checkLength(input);
  isNumber(input);
};
function checkLength(input) {
  if (input < 3 || input > 20) {
    throw new CustomError(
      ERROR_NAME.BRIDGE,
      '다리 길이는 3이상 20이하여야 합니다.'
    );
  }
}
function isNumber(input) {
  const check = /^[0-9]+$/;
  if (!check.test(input)) {
    throw new CustomError(ERROR_NAME.BRIDGE, '다리 길이는 숫자여야 합니다.');
  }
}

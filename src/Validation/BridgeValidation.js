const { ERROR_NAME } = require('../Constant/constant');
const CustomError = require('./CustomError');
const BRIDGE_LENGTH = {
  MIN: 3,
  MAX: 20,
};

module.exports = function bridgeValidate(input) {
  checkLength(input);
  isNumber(input);
};

function checkLength(input) {
  if (input < BRIDGE_LENGTH.MIN || input > BRIDGE_LENGTH.MAX) {
    throw new CustomError(
      ERROR_NAME.BRIDGE,
      `다리 길이는 ${BRIDGE_LENGTH.MIN}이상 ${BRIDGE_LENGTH.MAX}이하여야 합니다.`
    );
  }
}

function isNumber(input) {
  const check = /^[0-9]+$/;
  if (!check.test(input)) {
    throw new CustomError(ERROR_NAME.BRIDGE, '다리 길이는 숫자여야 합니다.');
  }
}

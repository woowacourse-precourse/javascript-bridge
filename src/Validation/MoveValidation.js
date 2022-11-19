const { ERROR_NAME, UP, DOWN } = require('../Constant/constant');
const CustomError = require('./CustomError');

module.exports = function moveValidate(input) {
  if (input !== UP && input !== DOWN) {
    throw new CustomError(ERROR_NAME.MOVE, '입력은 U 또는 Q여야 합니다.');
  }
};

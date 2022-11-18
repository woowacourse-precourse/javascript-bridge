const CustomError = require('./CustomError');

module.exports = function moveValidate(input) {
  if (input !== 'U' && input !== 'D') {
    throw new CustomError('입력은 U 또는 Q여야 합니다.');
  }
};

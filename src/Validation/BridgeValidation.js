const CustomError = require('./CustomError');

module.exports = function bridgeValidate(input) {
  checkLength(input);
};
function checkLength(input) {
  if (input < 3 || input > 20) {
    throw new CustomError('다리 길이는 3이상 20이하여야합니다.');
  }
}

const { ERROR_NAME, RETRY, QUIT } = require('../Constant/constant');
const CustomError = require('./CustomError');

module.exports = function controlValidate(input) {
  if (input !== RETRY && input !== QUIT) {
    throw new CustomError(
      ERROR_NAME.CONTROL,
      '게임 재시작/종료 여부는 R 또는 Q만 입력할 수 있습니다.'
    );
  }
};

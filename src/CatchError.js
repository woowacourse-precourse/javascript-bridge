const MissionUtils = require('@woowacourse/mission-utils');

function catchError(validateFn, arg, errorFn) {
  try {
    validateFn(arg);
  } catch (error) {
    MissionUtils.Console.print(error);
    errorFn();
  }
}

module.exports = catchError;

const MissionUtils = require('@woowacourse/mission-utils');

function catchError(fn, ...arg) {
  try {
    fn(...arg);
  } catch (error) {
    MissionUtils.Console.print(error);
  }
}

module.exports = catchError;

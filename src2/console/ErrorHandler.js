const MissionUtils = require('@woowacourse/mission-utils');

class ErrorHandler {
  static watch(validTarget, errorCallback, doCallback = null) {
    try {
      validTarget();
      if (doCallback) doCallback();
    } catch (error) {
      MissionUtils.Console.print(error.message);
      errorCallback();
    }
  }
}

module.exports = ErrorHandler;

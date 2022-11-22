const MissionUtils = require('@woowacourse/mission-utils');

const ErrorView = {
  print(error) {
    MissionUtils.Console.print(error.message);
  },
};

module.exports = ErrorView;

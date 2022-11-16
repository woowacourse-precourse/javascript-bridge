const MissionUtils = require('@woowacourse/mission-utils');

const Console = {
  readLine(query, callback) {
    MissionUtils.Console.readLine(query, callback);
  },

  print(message) {
    MissionUtils.Console.print(message);
  },

  close() {
    MissionUtils.Console.close();
  },
};

module.exports = Console;

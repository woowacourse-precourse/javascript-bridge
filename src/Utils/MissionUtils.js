const MissionUtils = require("@woowacourse/mission-utils");

const utils = {
  print(message) {
    MissionUtils.Console.print(message);
  },
  readLine(query, callback) {
    MissionUtils.Console.readLine(query, callback);
  },
  close() {
    MissionUtils.Console.close();
  },
};

module.exports = utils;

const MissionUtils = require("@woowacourse/mission-utils");

const Console = {
  readLine(question, callback) {
    MissionUtils.Console.readLine(question, callback);
  },
  print(message) {
    MissionUtils.Console.print(message);
  },
  close() {
    MissionUtils.Console.close();
  },
};

module.exports = Console;

const MissionUtils = require("@woowacourse/mission-utils");

const IO = class {
  static print(message) {
    MissionUtils.Console.print(message);
  }

  static read(message, callback) {
    MissionUtils.Console.readLine(message, callback);
  }

  static close() {
    MissionUtils.Console.close();
  }
};

module.exports = IO;

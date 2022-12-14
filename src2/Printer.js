const MissionUtiles = require("@woowacourse/mission-utils");

class Printer {
  text(msg) {
    MissionUtiles.Console.print(msg);
  }
}

module.exports = Printer;

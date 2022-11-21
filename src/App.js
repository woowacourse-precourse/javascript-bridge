const Const = require('./Const');
const MissionUtils = require('@woowacourse/mission-utils');
const { Console } = MissionUtils;
class App {
  play() {}

  printStartMessage() {
    Console.print(Const.START_MESSAGE);
  }
}

module.exports = App;

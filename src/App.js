const MissionUtils = require('@woowacourse/mission-utils');
const Message = require('./constant/PrintConstant');

class App {
  play() {
    MissionUtils.Console.print(Message.START);
  }
}

module.exports = App;

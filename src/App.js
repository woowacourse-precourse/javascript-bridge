const MissionUtils = require('@woowacourse/mission-utils');
const inputView = require('./view/InputView');
const Message = require('./constant/PrintConstant');

class App {
  play() {
    MissionUtils.Console.print(Message.START);
    inputView.readBridgeSize();
  }
}

module.exports = App;

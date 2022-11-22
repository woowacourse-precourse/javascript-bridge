const MissionUtils = require('@woowacourse/mission-utils');
const InputView = require('./InputView');
const { CONSOLE_MESSAGE } = require('./utils/constants');

class App {
  play() {
    MissionUtils.Console.print(CONSOLE_MESSAGE.startGame);
    InputView.readBridgeSize();
  }
}

module.exports = App;

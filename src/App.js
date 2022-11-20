const MissionUtils = require('@woowacourse/mission-utils');

const { Console } = MissionUtils;
const { START_MESSAGE } = require('./constants');
const InputView = require('./InputView');

class App {
  play() {
    this.gameStart();
  }

  gameStart() {
    Console.print(START_MESSAGE);
    InputView.readBridgeSize();
  }
}

module.exports = App;

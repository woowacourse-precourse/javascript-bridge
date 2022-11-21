const { Console } = require('@woowacourse/mission-utils');
const { GAME_MESSAGE } = require('./Constants');
const InputView = require('./InputView');

class App {
  play() {
    Console.print(GAME_MESSAGE.START);
    InputView.readBridgeSize();
  }
}

module.exports = App;

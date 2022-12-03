const { Console } = require('@woowacourse/mission-utils');
const InputView = require('./view/InputView');

const { GAME_MESSAGE } = require('./utils/constants');

class App {
  play() {
    Console.print(GAME_MESSAGE.startCommand);
    InputView.readBridgeSize();

    return this;
  }
}

module.exports = App;

const { Console } = require('@woowacourse/mission-utils');
const { GAME_MESSAGE } = require('./constants');
const InputView = require('./InputView');
const { printMap } = require('./OutputView');

class App {
  async play() {
    this.start();
    // printMap(['U', 'U', 'D', 'U'], 2, true);
    InputView.readBridgeSize();
    // InputView.readGameCommand();
  }

  start() {
    Console.print(GAME_MESSAGE.start);
  }
}

const app = new App();
app.play();

module.exports = App;

const { Console } = require('@woowacourse/mission-utils');
const { readBridgeSize } = require('./InputView');
const { MESSAGE } = require('./constants');

class App {
  play() {
    this.init();
  }

  init() {
    Console.print(`${MESSAGE.START_GAME}`);
    readBridgeSize();
  }
}

const app = new App();
app.play();

module.exports = App;

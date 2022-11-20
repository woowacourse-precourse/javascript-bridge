const { Console } = require('@woowacourse/mission-utils');
const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator');
const InputView = require('./InputView');
const MESSAGE = require('./utils/constants');

class App {
  play() {
    Console.print(MESSAGE.GAMESTART);
    Console.readLine(MESSAGE.SETBRIDGESIZE, (bridgeSize) => {
      InputView.readBridgeSize(bridgeSize);
    });
  }
}

const app = new App();
app.play();

module.exports = App;

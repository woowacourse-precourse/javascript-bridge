const { Console } = require('@woowacourse/mission-utils');
const InputView = require('./InputView');
const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator');
const BridgeMaker = require('./BridgeMaker');
const MESSAGE = require('./utils/constants');

class App {
  play() {
    Console.print(MESSAGE.GAMESTART);
    Console.readLine(MESSAGE.SETBRIDGESIZE, (bridgeSize) => {
      InputView.readBridgeSize(bridgeSize);
      const bridge = BridgeMaker.makeBridge(
        bridgeSize,
        BridgeRandomNumberGenerator,
      );

      console.log(bridge);
    });
  }
}

const app = new App();
app.play();

module.exports = App;

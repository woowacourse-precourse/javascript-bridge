const { Console } = require('@woowacourse/mission-utils');
const BridgeGame = require('./BridgeGame');
const InputView = require('./InputView');
const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator');
const BridgeMaker = require('./BridgeMaker');
const MESSAGE = require('./utils/constants');

class App {
  #bridgeGame;

  constructor() {
    this.#bridgeGame = new BridgeGame();
  }

  play() {
    Console.print(MESSAGE.GAMESTART);
    Console.readLine(MESSAGE.SETBRIDGESIZE, (bridgeSize) => {
      InputView.readBridgeSize(bridgeSize);
      const bridge = BridgeMaker.makeBridge(
        bridgeSize,
        BridgeRandomNumberGenerator,
      );

      this.#bridgeGame.move(bridge);
    });
  }
}

const app = new App();
app.play();

module.exports = App;

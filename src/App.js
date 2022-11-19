const { Console } = require('@woowacourse/mission-utils');
const BridgeGame = require('./BridgeGame');
const { GAME_MESSAGE } = require('./constants');
const InputView = require('./InputView');

class App {
  play() {
    App.start();
    const bridgeGame = new BridgeGame();
    InputView.readBridgeSize(bridgeGame);
  }

  static start() {
    Console.print(GAME_MESSAGE.start);
  }
}

const app = new App();
app.play();

module.exports = App;

const { Console } = require('@woowacourse/mission-utils');
const BridgeGame = require('./BridgeGame');
const InputView = require('./InputView');
const Bridge = require('./Model/Bridge');
const { MESSAGE } = require('./utils/Constant');

class App {
  constructor() {
    this.bridge = new Bridge();
    this.game = new BridgeGame();
  }

  play() {
    Console.print(MESSAGE.GAME_START);
    InputView.readBridgeSize(this.bridge, this.game);
  }
}

const app = new App();
app.play();

module.exports = App;

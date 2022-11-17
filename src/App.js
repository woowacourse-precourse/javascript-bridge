const { Console } = require('@woowacourse/mission-utils');
const BridgeGame = require('./BridgeGame');
const InputView = require('./Viewer/InputView');
const Bridge = require('./Model/Bridge');
const { MESSAGE } = require('./utils/Constant');

class App {
  constructor() {
    this.bridge = new Bridge();
    this.game = new BridgeGame();
  }

  play() {
    Console.print(MESSAGE.GAME_START);
    try {
      InputView.readBridgeSize(this.bridge, this.game);
    } catch (error) {
      Console.print(error);
    }
  }
}

const app = new App();
app.play();

module.exports = App;

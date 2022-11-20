const { Console } = require('@woowacourse/mission-utils');
const BridgeGame = require('./BridgeGame');
const InputView = require('./Viewer/InputView');
const Bridge = require('./Model/Bridge');
const Selected = require('./Model/Selected');
const TryCnt = require('./Model/TryCnt');
const { MESSAGE } = require('./Utils/Constant');
const { generate } = require('./BridgeRandomNumberGenerator');

class App {
  constructor() {
    this.bridge = new Bridge(generate);
    this.game = new BridgeGame(new Selected(), new TryCnt());
  }

  play() {
    Console.print(MESSAGE.GAME_START);
    try {
      InputView.readBridgeSize(this.bridge, this.game);
    } catch (error) {
      Console.print(error);
      Console.close();
    }
  }
}

const app = new App();
app.play();

module.exports = App;

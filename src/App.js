const { Console } = require('@woowacourse/mission-utils');
const BridgeGame = require('./BridgeGame');
const InputView = require('./Viewer/InputView');
const Selected = require('./Model/Selected');
const TryCnt = require('./Model/TryCnt');
const { MESSAGE } = require('./Utils/Constant');
const Bridge = require('./Model/Bridge');
const { generate } = require('./BridgeRandomNumberGenerator');

class App {
  constructor() {
    this.game = new BridgeGame(new Selected(), new TryCnt());
  }

  play() {
    Console.print(MESSAGE.GAME_START);
    try {
      InputView.readBridgeSize(this.game, new Bridge(generate));
    } catch (error) {
      Console.print(error);
      Console.close();
    }
  }
}

const app = new App();
app.play();

module.exports = App;

const { Console } = require('@woowacourse/mission-utils');
const BridgeGame = require('./Model/BridgeGame');
const InputView = require('./View/InputView');
const { MESSAGE } = require('./Constant/message');

class App {
  #bridgeGame;

  constructor() {
    this.#bridgeGame = new BridgeGame();
  }

  play() {
    Console.print(MESSAGE.START);
    InputView.readBridgeSize(this.#bridgeGame);
  }
}

module.exports = App;

const app = new App();
app.play();


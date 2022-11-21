const { Console } = require('@woowacourse/mission-utils');
const { MESSAGE, COMMAND } = require('./constant/Bridge');
const BridgeGame = require('./BridgeGame');
const InputView = require('./InputView');
const OutputView = require('./OutputView');
const Validator = require('./Validator');

class App {
  #game;

  play() {
    Console.print(MESSAGE.START);
    InputView.readBridgeSize(this.proceedStepOne.bind(this));
  }

  proceedStepOne(input) {
    Validator.validateBridgeSize(input);
    const game = new BridgeGame(input);
    this.#game = game;
  }
}

const app = new App();
app.play();

module.exports = App;

const { Console } = require('@woowacourse/mission-utils');
const { MESSAGE, COMMAND } = require('./constant/Bridge');
const BridgeGame = require('./BridgeGame');
const InputView = require('./InputView');
const OutputView = require('./OutputView');
const Validator = require('./Validator');

class App {
  play() {
    Console.print(MESSAGE.START);
  }
}

const app = new App();
app.play();

module.exports = App;

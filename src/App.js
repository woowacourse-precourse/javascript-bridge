const InputView = require('./InputView');
const OutputView = require('./OutputView');
// const BridgeMaker = require('./BridgeMaker');
// const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator');
// const BridgeGame = require('./BridgeGame');
const { Console } = require('@woowacourse/mission-utils');

class App {
  async play() {
    OutputView.printStart();
    InputView.readBridgeSize();
  }
}

module.exports = App;
const app = new App();
app.play();

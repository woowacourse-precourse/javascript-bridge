const { Console } = require('@woowacourse/mission-utils');
const BridgeMaker = require('./BridgeMaker');

const InputView = require('./InputView');
const OutputView = require('./OutputView');

class App {
  play() {
    OutputView.printGameStartMessage();
    this.inputBridgeSize();
  }

  inputBridgeSize() {
    InputView.readBridgeSize();
    /**
     * TODO:
     * 1. validate bridge size
     * 2. catch error & print error message
     * 3. make bridge
     */
  }
}

new App().play();

module.exports = App;

const OutputView = require('./view/OutputView');
const InputView = require('./view/InputView');
const BridgeGame = require('./BridgeGame');

class App {
  constructor() {
    this.bridgeGame = new BridgeGame();
  }

  play() {
    OutputView.printStart();
    InputView.readBridgeSize(this.bridgeGame);
  }
}

module.exports = App;

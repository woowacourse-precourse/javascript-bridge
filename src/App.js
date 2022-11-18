const OutputView = require('./OutputView');
const InputView = require('./InputView');
const BridgeGame = require('./BridgeGame');

class App {
  constructor() {
    this.bridgeGame = new BridgeGame();
    OutputView.printStart();
  }

  play() {
    InputView.readBridgeSize(this.bridgeGame);
  }
}

module.exports = App;

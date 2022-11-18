const OutputView = require('./OutputView');
const InputView = require('./InputView');
const BridgeGame = require('./BridgeGame');

class App {
  constructor() {
    this.bridgeGame = new BridgeGame();
  }

  getAnswerBridge() {
    InputView.readBridgeSize(this.bridgeGame);
  }

  play() {
    OutputView.printStart();
    this.getAnswerBridge();
  }
}

module.exports = App;

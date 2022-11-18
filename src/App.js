const InputView = require('./InputView');
const OutputView = require('./OutputView');
const BridgeGame = require('./BridgeGame');

class App {
  #bridgeGame = new BridgeGame();

  play() {
    OutputView.printStartMessage();
    InputView.readBridgeSize(this.startGame);
  }

  startGame(bridgeLength) {
    this.#bridgeGame.setUp(bridgeLength);
  }
}

module.exports = App;

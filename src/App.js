const BridgeGame = require('./BridgeGame');
const InputView = require('./InputView');
const OutputView = require('./OutputView');

class App {
  play() {
    const game = new BridgeGame();

    OutputView.printStartMessage();
    InputView.readBridgeSize(game);
  }
}

new App().play();

module.exports = App;

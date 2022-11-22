const BridgeGame = require('./BridgeGame');
const InputView = require('./InputView');

class App {
  play() {
    const game = new BridgeGame();

    InputView.readBridgeSize(game);
  }
}

module.exports = App;

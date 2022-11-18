const BridgeGame = require('./BridgeGame');
const InputView = require('./InputView');

class App {
  play() {
    const bridgeGame = new BridgeGame();
    InputView.readBridgeSize(bridgeSize => {
      bridgeGame.init(bridgeSize);
    });
  }
}

module.exports = App;

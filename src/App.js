const BridgeGame = require('./BridgeGame');
const { makeBridge } = require('./BridgeMaker');
const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator');
const { readBridgeSize } = require('./InputView');

class App {
  play() {
    readBridgeSize((size) => {
      const bridge = makeBridge(size, BridgeRandomNumberGenerator.generate);
      const bridgeGame = new BridgeGame(bridge);
      bridgeGame.start();
    });
  }
}

// FIXME: remove this instance
const app = new App();
app.play();

module.exports = App;

const BridgeGame = require('./BridgeGame');
const { makeBridge } = require('./BridgeMaker');
const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator');
const { readBridgeSize } = require('./InputView');

class App {
  #bridgeSize;
  play() {
    readBridgeSize((size) => {
      this.#bridgeSize = size;
      const bridge = makeBridge(size, BridgeRandomNumberGenerator.generate);
      const bridgeGame = new BridgeGame(bridge);
      bridgeGame.start();
    });
  }
}

const app = new App();
app.play();

module.exports = App;

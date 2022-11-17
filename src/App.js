const { makeBridge } = require('./BridgeMaker');
const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator');
const { readBridgeSize } = require('./InputView');

class App {
  #bridgeSize;
  play() {
    readBridgeSize((size) => {
      this.#bridgeSize = size;
      makeBridge(size, BridgeRandomNumberGenerator.generate);
    });
  }
}

const app = new App();
app.play();

module.exports = App;

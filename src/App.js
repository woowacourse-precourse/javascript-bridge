const BridgeGame = require('./BridgeGame');
const { makeBridge } = require('./BridgeMaker');
const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator');
const { readBridgeSize } = require('./InputView');
const { printError } = require('./OutputView');
const { checkSizeInRange } = require('./Validation');

class App {
  #setBridgeGame(size) {
    const bridge = makeBridge(size, BridgeRandomNumberGenerator.generate);
    const bridgeGame = new BridgeGame(bridge);
    bridgeGame.start();
  }

  play() {
    readBridgeSize((size) => {
      try {
        const sizeInput = Number(size);
        checkSizeInRange(sizeInput);
        return this.#setBridgeGame(sizeInput);
      } catch (error) {
        printError(error);
        return this.play();
      }
    });
  }
}

// FIXME: remove this instance
const app = new App();
app.play();

module.exports = App;

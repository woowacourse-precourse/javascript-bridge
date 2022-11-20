const BridgeGame = require('./BridgeGame');
const { makeBridge } = require('./BridgeMaker');
const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator');
const { ERROR } = require('./Constants');
const { readBridgeSize } = require('./InputView');
const { printError } = require('./OutputView');
const { isPositiveInteger } = require('./Validation');

class App {
  #setBridgeGame(size) {
    const bridge = makeBridge(size, BridgeRandomNumberGenerator.generate);
    const bridgeGame = new BridgeGame(bridge);
    bridgeGame.start();
  }

  play() {
    readBridgeSize((size) => {
      const sizeInput = Number(size);
      if (!isPositiveInteger(sizeInput)) {
        printError(ERROR.bridgeSizeException);
        return this.play();
      }
      return this.#setBridgeGame(sizeInput);
    });
  }
}

// FIXME: remove this instance
const app = new App();
app.play();

module.exports = App;

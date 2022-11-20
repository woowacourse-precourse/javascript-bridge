const BridgeGame = require('./BridgeGame');
const { makeBridge } = require('./BridgeMaker');
const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator');
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
        printError('양의 정수를 입력해 주세요.');
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

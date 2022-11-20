const BridgeGame = require('./BridgeGame');
const { makeBridge } = require('./BridgeMaker');
const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator');
const { readBridgeSize } = require('./InputView');
const { printError } = require('./OutputView');
const { isPositiveInteger } = require('./Validation');

class App {
  play() {
    readBridgeSize((size) => {
      const sizeInput = Number(size);
      if (!isPositiveInteger(sizeInput)) {
        printError('양의 정수를 입력해 주세요.');
        return this.play();
      }
      const bridge = makeBridge(
        sizeInput,
        BridgeRandomNumberGenerator.generate,
      );
      const bridgeGame = new BridgeGame(bridge);
      bridgeGame.start();
    });
  }
}

// FIXME: remove this instance
const app = new App();
app.play();

module.exports = App;

const { makeBridge } = require('./BridgeMaker');
const { generate } = require('./BridgeRandomNumberGenerator');
const { readBridgeSize } = require('./InputView');
const OutputView = require('./OutputView');
const { bridgeSizeValidator } = require('./Validator');

class BridgeGameHandler {
  #bridge;

  startGame() {
    OutputView.printStartGame();
    readBridgeSize(() => this.setBridge());
  }
}

module.exports = BridgeGameHandler;

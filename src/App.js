const InputView = require('./InputView');
const OutputView = require('./OutputView');
const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator');
const BridgeMaker = require('./BridgeMaker');
const BridgeGame = require('./BridgeGame');

class App {
  play() {
    OutputView.printStart();
    this.makeElements();
  }

  makeElements() {
    const bridgeLength = InputView.readBridgeSize();
    const randomBridge = BridgeRandomNumberGenerator.generate();
    const bridgeArray = BridgeMaker.makeBridge(bridgeLength, randomBridge);
    this.compareInputRandom(bridgeLength, bridgeArray);
  }

  compareInputRandom(length, bridge) {
    const bridgeGame = new BridgeGame();
    for (let i = 1; i <= length; i++) {
      const userInput = InputView.readMoving();
      bridgeGame.move(userInput, bridge, i);
    }
  }
}

module.exports = App;

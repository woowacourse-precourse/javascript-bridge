const InputView = require('./InputView');
const OutputView = require('./OutputView');
const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator');
const BridgeMaker = require('./BridgeMaker');

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
    for (let i = 0; i < length; i++) {
      const userInput = InputView.readMoving();
      let gameCount = 1;
      if (userInput !== bridge[i]) {
        const userDecision = InputView.readGameCommand();
        this.userDecisionCheck(userDecision, bridge, gameCount);
      }
    }
  }

  userDecisionCheck(userDecision, bridge, gameCount) {
    if (userDecision === 'Q') {
      OutputView.printFailResult(gameCount);
    }

    if (userDecision === 'R') {
      this.compareInputRandom(bridge.length, bridge);
    }
  }
}

module.exports = App;

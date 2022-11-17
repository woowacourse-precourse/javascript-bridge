const BridgeMaker = require('./BridgeMaker');
const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator');
const InputView = require('./InputView');
const OutputView = require('./OutputView');

class App {
  play() {
    OutputView.printStart();
    this.gameStart();
  }

  gameStart() {
    InputView.readBridgeSize((bridgeSize) => {
      const bridges = this.makeBridges(bridgeSize, 2);
      console.log(bridges);
    });
  }

  makeBridges(bridgeSize, numberOfRow) {
    const generate = BridgeRandomNumberGenerator.generate;

    let bridges = [];
    for (let i = 0; i < numberOfRow; i++) {
      const bridge = BridgeMaker.makeBridge(Number(bridgeSize), generate);
      bridges.push(bridge);
    }

    return bridges;
  }
}

const app = new App();
app.play();

module.exports = App;

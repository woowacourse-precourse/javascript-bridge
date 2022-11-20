const InputView = require('./InputView');
const OutputView = require('./OutputView');
const BridgeGame = require('./BridgeGame');

class App {
  constructor() {
    this.bridgeModel = new BridgeGame();
  }

  play() {
    OutputView.printStart();
    InputView.readBridgeSize(this.gameRoutine.bind(this));
  }

  gameRoutine(bridgeSize) {
    this.bridgeModel.setBridge(bridgeSize);
  }
}

const app = new App();
app.play();

module.exports = App;

const OutputView = require('./OutputView');
const BridgeGame = require('./BridgeGame');
const InputView = require('./InputView');
class App {
  constructor() {
    this.bridgeGame = new BridgeGame();
  }

  play() {
    OutputView.playGame();
    InputView.readBridgeSize();
  }
}

const app = new App();
app.play();

module.exports = App;

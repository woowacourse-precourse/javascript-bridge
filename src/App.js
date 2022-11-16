const BridgeGame = require('./BridgeGame');
const OutputView = require('./OutputView');
const InputView = require('./InputView');

class App {
  play() {
    this.game = new BridgeGame();
    OutputView.printStart();
    InputView.readBridgeSize();
  }
}

const app = new App();
app.play();

module.exports = App;

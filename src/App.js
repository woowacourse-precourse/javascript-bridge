const OutputView = require('./OutputView.js');
const InputView = require('./InputView.js');
const BridgeGame = require('./BridgeGame.js');

class App {
  async play() {
    OutputView.printHi();

    const bridgeSize = await InputView.readBridgeSize();
    this.game = new BridgeGame(bridgeSize);
    this.playOneStep();
  }

  playOneStep() {}
}

const app = new App();
app.play();

module.exports = App;

const OutputView = require('./OutputView');
const InputView = require('./InputView');
const BridgeGame = require('./BridgeGame');

class App {

  play() {
    OutputView.printInit();
    InputView.readBridgeSize(this.initGame);
  }

  initGame(bridgeLength) {
    new BridgeGame(bridgeLength);
  }

}

const app = new App();
app.play();

module.exports = App;

const InputView = require('./InputView');
const OutputView = require('./OutputView');
const BridgeGame = require('./BridgeGame');

class App {
  play() {
    OutputView.printStart();
    InputView.readBridgeSize(this.gameRoutine.bind(this));
  }

  gameRoutine(bridgeSize) {
    const bridgeModel = new BridgeGame(bridgeSize);
    InputView.readMoving(bridgeModel.move.bind(this));
  }
}

const app = new App();
app.play();

module.exports = App;

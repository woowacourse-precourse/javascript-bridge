const OutputView = require('./OutputView');
const InputView = require('./InputView');

class App {
  constructor() {
    this.handleBridgeSize = this.handleBridgeSize.bind(this);
  }

  play() {
    OutputView.outputGameStart();
    InputView.readBridgeSize(this.handleBridgeSize);
  }

  handleBridgeSize(size) {
    this.bridgeGame = new BridgeGame(size);
    InputView.readMoving(this.handleBridgeMoveing);
  }
}

const app = new App();
app.play();
module.exports = App;

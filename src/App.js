const OutputView = require('./view/OutputView');
const InputView = require('./view/InputView');
const BridgeGame = require('./BridgeGame');
const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator');
const BridgeMaker = require('./BridgeMaker');
class App {
  bidgeGame;

  constructor() {
    this.game = new BridgeGame();
  }

  play() {
    OutputView.printGreeting();
    this.makeBridgeGame();
  }

  makeBridgeGame() {
    const bridge = BridgeMaker.makeBridge(
      InputView.readBridgeSize(),
      BridgeRandomNumberGenerator.generate(),
    );
    return new BridgeGame(bridge);
  }
}

const app = new App();
app.play();

module.exports = App;

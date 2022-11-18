const InputView = require('./InputView');
const BridgeMaker = require('./BridgeMaker');
const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator');
const BridgeGame = require('./BridgeGame');

class App {
  play() {
    InputView.readBridgeSize(this.createBridge);
  }

  createBridge(number) {
    BridgeMaker.makeBridge(number, BridgeRandomNumberGenerator.generate);
    const bridgeGame = new BridgeGame();
    InputView.readMoving(BridgeMaker.answerArr, bridgeGame.move);
  }
}
const app = new App();
app.play();
module.exports = App;

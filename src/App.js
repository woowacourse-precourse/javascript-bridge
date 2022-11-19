const InputView = require('./InputView');
const BridgeMaker = require('./BridgeMaker');
const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator');

class App {
  play() {
    InputView.readBridgeSize(this.createBridge);
  }

  createBridge(number) {
    BridgeMaker.makeBridge(number, BridgeRandomNumberGenerator.generate);
    InputView.readMoving(BridgeMaker.answerArr);
  }

  movement() {
    console.log('돌아왔다!');
  }
}
const app = new App();
app.play();
module.exports = App;

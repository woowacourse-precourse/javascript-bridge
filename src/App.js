const InputView = require('./InputView');
const BridgeMaker = require('./BridgeMaker');
const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator');

class App {
  play() {
    InputView.readBridgeSize(this.createBridge);
  }

  createBridge(number) {
    console.log('createBridge 존에 들어왔구먼' + number);
    BridgeMaker.makeBridge(number, BridgeRandomNumberGenerator.generate);
  }
}
const app = new App();
app.play();
module.exports = App;

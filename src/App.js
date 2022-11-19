const InputView = require('./InputView');
const OutputView = require('./OutputView');
const BridgeMaker = require('./BridgeMaker');
const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator');
class App {
  async play() {
    OutputView.printStart();
    const SIZE = await InputView.readBridgeSize();
    const generateRandomNumber = BridgeRandomNumberGenerator.generate;
    const RESULT = BridgeMaker.makeBridge(SIZE, generateRandomNumber);
    console.log(RESULT);
  }
}

module.exports = App;
const app = new App();
app.play();

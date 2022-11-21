const InputView = require('./InputView');
const { makeBridge } = require('./BridgeMaker');
const { generate } = require('./BridgeRandomNumberGenerator');

class App {
  play() {
    const bridgeSize = InputView.readBridgeSize();
    const bridge = makeBridge(Number(bridgeSize), generate);
  }
}

const app = new App;
app.play();
module.exports = App;

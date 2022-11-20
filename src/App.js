const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator');
const command = require('./utils/message');
const OutputView = require('./OutputView');
const InputView = require('./InputView');
const BridgeMaker = require('./BridgeMaker');
class App {
  #bridgeSize;
  #bridge;

  async play() {
    OutputView.printCommand(command.START);
    this.#bridgeSize = await InputView.readBridgeSize();
    this.#bridge = BridgeMaker.makeBridge(
      this.#bridgeSize,
      BridgeRandomNumberGenerator.generate
    );
    const move = await InputView.readMoving();
  }
}

const app = new App();
app.play();

module.exports = App;

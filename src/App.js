const command = require('./utils/message');
const OutputView = require('./OutputView');
const InputView = require('./InputView');
class App {
  #bridgeSize;

  async play() {
    OutputView.printCommand(command.START);
    this.#bridgeSize = await InputView.readBridgeSize();
  }
}

const app = new App();
app.play();

module.exports = App;

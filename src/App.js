const InputView = require("./InputView");
const OutputView = require("./OutputView");

class App {
  async play() {
    OutputView.printStartMessage();
    const bridgesize = await InputView.readBridgeSize();
  }
}

const app = new App();
app.play();

module.exports = App;

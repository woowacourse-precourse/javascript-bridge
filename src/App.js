const InputView = require("./InputView");
const OutputView = require("./OutputView");
const { MESSAGE } = require("../constants/Message");

class App {
  constructor() {
    OutputView.printMessage(MESSAGE.START);
  }
  play() {
    InputView.readBridgeSize();
  }
}

const app = new App();
app.play();

module.exports = App;

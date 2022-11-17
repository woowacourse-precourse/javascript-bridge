const InputView = require("./InputView");
const InputMessage = require("./InputMessage");
const OutputView = require("./OutputView");

class App {
  play() {
    OutputView.print(InputMessage.START_MESSAGE);
    InputView.readBridgeSize();
  }
}

new App().play();

module.exports = App;

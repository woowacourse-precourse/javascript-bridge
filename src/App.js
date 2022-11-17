const InputView = require("./InputView");
const Message = require("./Message");
const OutputView = require("./OutputView");

class App {
  play() {
    OutputView.print(Message.START_MESSAGE);
    InputView.readBridgeSize();
  }
}

new App().play();

module.exports = App;

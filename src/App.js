const InputView = require("./InputView");
const Message = require("./Message");
const OutputView = require("./OutputView");

class App {
  play() {
    OutputView.print(Message.START_MESSAGE);
    OutputView.print(Message.GET_LENGTH_OF_BRIDGE_MESSAGE);
  }
}

new App().play();

module.exports = App;

const InputView = require("./views/InputView");
const InputMessage = require("./messages/InputMessage");
const OutputView = require("./views/OutputView");

class App {
  play() {
    OutputView.print(InputMessage.START_MESSAGE);
    InputView.readBridgeSize();
  }
}

new App().play();

module.exports = App;

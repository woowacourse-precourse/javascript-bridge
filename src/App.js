const InputView = require("./InputView");
const Message = require("./Message");
const OutputView = require("./OutputView");

class App {
  play() {
    OutputView.printGameStart(Message.GAME_START);
    InputView.readBridgeSize();
  }
}

const app = new App();
app.play();

module.exports = App;

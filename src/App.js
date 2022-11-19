const InputView = require("./InputView");
const OutputView = require("./OutputView");

class App {
  constructor() {
  }

  play() {
    OutputView.startGame();
    InputView.readBridgeSize();
  }
}

module.exports = App;

new App().play();
const InputView = require("./view/InputView");
const OutputView = require("./view/OutputView");

class App {
  play() {
    this.#startGame();
  }

  #startGame() {
    OutputView.printStartMessage();

    InputView.readBridgeSize();
  }
}

const app = new App();
app.play();

module.exports = App;

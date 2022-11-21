const InputView = require('./InputView');
const OutputView = require('./OutputView');

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

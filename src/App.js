const InputView = require("./InputView");
const OutputView = require("./OutputView");

class App {
  #userGame;

  play() {
    OutputView.printInit();
    this.createBridge();
  }

  createBridge() {
    InputView.readBridgeSize((size) => {
      this.#userGame = new BridgeGame(size);
    });
  }
}

module.exports = App;

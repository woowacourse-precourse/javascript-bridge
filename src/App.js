const InputView = require("./InputView");
const OutputView = require("./OutputView");
const Validator = require("./Validator.js");

class App {
  #game;
  constructor() {
    OutputView.printGameStart();
  }
  play() {
    InputView.readBridgeSize(this.createBridge);
  }
  createBridge(size) {
    Validator.checkSizeInput(size);
    this.#game = new BridgeGame(size);
  }
}

module.exports = App;

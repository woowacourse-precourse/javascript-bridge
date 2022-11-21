const InputView = require("./InputView");
const OutputView = require("./OutputView");
const BridgeGame = require("./BridgeGame");
const Validator = require("./Validator.js");

class App {
  #game;
  constructor() {
    OutputView.printGameStart();
  }
  play() {
    InputView.readBridgeSize.bind(this)(this.createBridge);
  }
  createBridge(size) {
    Validator.checkSizeInput(size);
    this.#game = new BridgeGame(size);
  }
}

const app = new App();
app.play();

module.exports = App;

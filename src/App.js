const InputView = require("./InputView");
const OutputView = require("./OutputView");
const BridgeGame = require("./BridgeGame");

class App {
  #game;

  constructor() {
    this.#game = new BridgeGame();
  }
  play() {
    OutputView.printStart();
    InputView.readBridgeSize(this.#game);
  }
}

module.exports = App;

const BridgeGame = require("./BridgeGame");
const InputView = require("./InputView");
const OutputView = require("./OutputView");

class App {
  #bridgeGame;

  constructor() {
    this.#bridgeGame = new BridgeGame();
  }

  play() {
    OutputView.printGameStart();
    InputView.readBridgeSize(this.#bridgeGame.setBridge, this.#bridgeGame.move);
  }
}
module.exports = App;

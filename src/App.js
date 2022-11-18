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
    InputView.setMethods(
      this.#bridgeGame.setBridge,
      this.#bridgeGame.move,
      this.#bridgeGame.retry
    );
    InputView.readBridgeSize();
  }
}

new App().play();

module.exports = App;

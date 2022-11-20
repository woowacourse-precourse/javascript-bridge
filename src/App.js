const BridgeGame = require("./BridgeGame");
const InputView = require("./InputView");
const OutputView = require("./OutputView");

class App {
  #bridgeGame;

  play() {
    OutputView.startGame();
    const bridgeSize = InputView.readBridgeSize();
    this.#bridgeGame = new BridgeGame(bridgeSize);
  }
}

const app = new App();
app.play();

module.exports = App;

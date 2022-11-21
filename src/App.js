const InputView = require("./InputView");
const OutputView = require("./OutputView")
const BridgeGame = require("./BridgeGame");
class App {
  #bridgeGame;
  constructor() {
    this.#bridgeGame = new BridgeGame();
  }
  play() {
    OutputView.printStart();
    InputView.readBridgeSize(this.#bridgeGame);
  }
}

const app = new App();
app.play();
module.exports = App;

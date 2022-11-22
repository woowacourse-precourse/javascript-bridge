const InputView = require("./InputView");
const OutputView = require("./OutputView")
const BridgeGame = require("./BridgeGame");
const BridgeController = require('./BridgeController')
class App {
  #bridgeController
  #bridgeGame
  constructor() {
    this.#bridgeController = new BridgeController()
    this.#bridgeGame = new BridgeGame()
  }
  play() {
    OutputView.printStart();
    InputView.readBridgeSize(this.#bridgeGame);
  }
}

const app = new App();
app.play();
module.exports = App;

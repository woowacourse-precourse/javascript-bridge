const InputView = require("./InputView");
const BridgeGame = require("./BridgeGame");
class App {
  #bridgeGame;
  constructor() {
    this.#bridgeGame = new BridgeGame();
  }
  play() {
    InputView.readBridgeSize(this.#bridgeGame);
  }
}

const app = new App();
app.play();
module.exports = App;

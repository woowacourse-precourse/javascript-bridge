const InputView = require("./InputView");
const OutputView = require("./OutputView");
const BridgeGameController = require("./BridgeGameController");

class App {
  #bridgeGameControl;

  play() {
    this.#bridgeGameControl = new BridgeGameController();
    OutputView.printStart();
    InputView.readBridgeSize();
  }
}

let app = new App();
app.play();

module.exports = App;
const BridgeGame = require("./BridgeGame");
const BridgeMaker = require("./BridgeMaker");
const InputView = require("./InputView");
const OutputView = require("./OutputView");

class App {
  play() {
    OutputView.printStart();
    BridgeMaker.makeBridge();
  }
}

const app = new App();
app.play();

module.exports = App;

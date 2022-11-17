const BridgeGame = require("./BridgeGame");
const BridgeMaker = require("./BridgeMaker");
const OutputView = require("./OutputView");

class App {


  play() {
    this.start();
  }

  start() {
    OutputView.printStartMessage();
    BridgeMaker.start();
  }
}

const app = new App();
app.play();

module.exports = App;

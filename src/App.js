const BridgeGame = require("./BridgeGame");
const OutputView = require("./OutputView");

class App {


  play() {
    this.start();
  }

  start() {
    OutputView.printStartMessage();
    this.bridgeGame = new BridgeGame();
    this.bridgeGame.set();
  }
}

const app = new App();
app.play();

module.exports = App;

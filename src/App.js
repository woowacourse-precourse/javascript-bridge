const BridgeGame = require("./BridgeGame");
const OutputView = require("./OutputView");

class App {


  play() {
    OutputView.printStartMessage();
    this.bridgeGame = new BridgeGame();
    this.bridgeGame.start();
  }
}

const app = new App();
app.play();

module.exports = App;

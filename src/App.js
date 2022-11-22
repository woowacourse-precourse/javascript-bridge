const BridgeGame = require("./BridgeGame");
const OutputView = require("./OutputView");

class App {
  constructor() {
    this.game = new BridgeGame();
  }
  play() {
    OutputView.printStart();
  }
}

const app = new App();
app.play();

module.exports = App;
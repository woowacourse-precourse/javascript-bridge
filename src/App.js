const BridgeGame = require("./BridgeGame");
const InputView = require("./InputView");
const OutputView = require("./OutputView");

class App {
  constructor() {}
  play() {
    OutputView.printStart();
    this.gameSetting();
  }
  gameSetting(){
    const bridgeGame = new BridgeGame();
    InputView.readBridgeSize(bridgeGame);
  }
}

const app = new App();

app.play();

module.exports = App;
